import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import { Loader2, Target } from 'lucide-react'

const ATSChecker = ({ resumeData }) => {
    const { token } = useSelector(state => state.auth)
    const [jobDescription, setJobDescription] = useState('')
    const [result, setResult] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const checkATS = async () => {
        if (!jobDescription.trim()) {
            toast.error('Please enter a job description')
            return
        }

        setIsLoading(true)
        try {
            const resumeText = `
                Name: ${resumeData.personal_info?.full_name || ''}
                Summary: ${resumeData.professional_summary || ''}
                Skills: ${resumeData.skills?.join(', ') || ''}
                Experience: ${resumeData.experience?.map(e => `${e.position} at ${e.company}: ${e.description}`).join('\n') || ''}
                Education: ${resumeData.education?.map(e => `${e.degree} from ${e.institution}`).join('\n') || ''}
            `

            const prompt = `
You are an ATS (Applicant Tracking System) expert. Analyze this resume against the job description and respond ONLY in this exact JSON format with no extra text:
{
  "score": <number between 0-100>,
  "matched_keywords": [<list of keywords found in both resume and job description>],
  "missing_keywords": [<list of important keywords from job description missing in resume>],
  "suggestions": [<list of 3-4 specific improvement suggestions>]
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`
            const { data } = await api.post('/api/ai/enhance-pro-sum',
                { userContent: prompt },
                { headers: { Authorization: token } }
            )

            const parsed = JSON.parse(data.enhancedContent)
            setResult(parsed)
        } catch (error) {
            toast.error('Error checking ATS score')
        }
        setIsLoading(false)
    }

    const getScoreColor = (score) => {
        if (score >= 75) return 'text-green-600'
        if (score >= 50) return 'text-yellow-600'
        return 'text-red-600'
    }

    const getScoreBg = (score) => {
        if (score >= 75) return 'bg-green-50 border-green-200'
        if (score >= 50) return 'bg-yellow-50 border-yellow-200'
        return 'bg-red-50 border-red-200'
    }

    return (
        <div className='space-y-4'>
            <div>
                <h3 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                    <Target className='size-5 text-green-600' />
                    ATS Score Checker
                </h3>
                <p className='text-sm text-gray-500'>Paste job description to check how well your resume matches</p>
            </div>

            <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                rows={6}
                className='w-full p-3 text-sm border border-gray-300 rounded-lg outline-none focus:ring focus:ring-green-500 resize-none'
                placeholder='Paste the job description here...'
            />

            <button
                onClick={checkATS}
                disabled={isLoading}
                className='w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2'
            >
                {isLoading ? (
                    <><Loader2 className='size-4 animate-spin' /> Analyzing...</>
                ) : (
                    <><Target className='size-4' /> Check ATS Score</>
                )}
            </button>

            {result && (
                <div className='space-y-3'>
                    <div className={`p-4 rounded-lg border ${getScoreBg(result.score)} text-center`}>
                        <p className='text-sm text-gray-600'>ATS Match Score</p>
                        <p className={`text-5xl font-bold ${getScoreColor(result.score)}`}>{result.score}%</p>
                        <p className='text-sm text-gray-500 mt-1'>
                            {result.score >= 75 ? '🎉 Great match!' : result.score >= 50 ? '⚠️ Needs improvement' : '❌ Low match'}
                        </p>
                    </div>

                    {result.matched_keywords?.length > 0 && (
                        <div>
                            <p className='text-sm font-medium text-gray-700 mb-2'>✅ Matched Keywords</p>
                            <div className='flex flex-wrap gap-2'>
                                {result.matched_keywords.map((kw, i) => (
                                    <span key={i} className='px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs'>{kw}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {result.missing_keywords?.length > 0 && (
                        <div>
                            <p className='text-sm font-medium text-gray-700 mb-2'>❌ Missing Keywords</p>
                            <div className='flex flex-wrap gap-2'>
                                {result.missing_keywords.map((kw, i) => (
                                    <span key={i} className='px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs'>{kw}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {result.suggestions?.length > 0 && (
                        <div>
                            <p className='text-sm font-medium text-gray-700 mb-2'>💡 Suggestions</p>
                            <ul className='space-y-2'>
                                {result.suggestions.map((s, i) => (
                                    <li key={i} className='text-sm text-gray-600 flex gap-2'>
                                        <span className='text-green-600 shrink-0'>{i + 1}.</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ATSChecker