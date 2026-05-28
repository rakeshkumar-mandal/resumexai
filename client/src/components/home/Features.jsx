import React, { useState, useEffect } from 'react';
import { Zap, FileText, Sparkles, Download, CheckCircle2, ChevronRight, Wand2, RefreshCw } from 'lucide-react';

const Title = ({ title, description }) => (
    <div className="flex flex-col items-center text-center mt-6 mb-4 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">{title}</h2>
        <p className="text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Features = () => {
    // State for the AI typing animation effect
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    
    const fullOptimizedText = "Spearheaded a cross-functional team of 10, driving a 35% increase in Q3 sales through targeted campaigns.";

    useEffect(() => {
        let i = 0;
        let typingInterval;
        let pauseTimeout;

        const startTyping = () => {
            setIsTyping(true);
            setTypedText("");
            i = 0;
            
            typingInterval = setInterval(() => {
                if (i < fullOptimizedText.length) {
                    setTypedText(fullOptimizedText.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                    // Pause for 3 seconds, then restart the animation
                    pauseTimeout = setTimeout(() => {
                        startTyping();
                    }, 4000);
                }
            }, 40); // Speed of typing
        };

        startTyping();

        return () => {
            clearInterval(typingInterval);
            clearTimeout(pauseTimeout);
        };
    }, []);

    return (
        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12 px-4 min-h-screen bg-slate-50/50 overflow-hidden'>

            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 border border-green-500/20 rounded-full px-6 py-1.5 mt-8 shadow-sm">
                <Zap width={16} className="fill-green-500"/>    
                <span className="font-semibold tracking-wide">Simple Process</span>
            </div>

            <Title 
                title='Build a Resume That Gets You Hired' 
                description='From your experience to a job-winning resume — our AI handles the hard part, so you can focus on landing the job.'
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-10 z-10 relative">
                {/* Card 1 */}
                <div className="p-8 bg-white border border-slate-200/60 shadow-sm flex flex-col gap-5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group">
                    <div className="w-14 h-14 rounded-xl bg-violet-100/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="size-7 text-violet-600"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">AI Enhanced Content</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">Let AI improve your professional summary and job descriptions to make them ATS-friendly and impactful.</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-white border border-slate-200/60 shadow-sm flex flex-col gap-5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group">
                    <div className="w-14 h-14 rounded-xl bg-emerald-100/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FileText className="size-7 text-emerald-600"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Multiple Templates</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">Choose from beautiful resume templates and customize colors to match your personal style perfectly.</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="p-8 bg-white border border-slate-200/60 shadow-sm flex flex-col gap-5 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default group">
                    <div className="w-14 h-14 rounded-xl bg-amber-100/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Download className="size-7 text-amber-600"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Download & Share</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">Download your resume as PDF or share a public link directly with recruiters in one single click.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 w-full max-w-5xl relative mb-24">
                {/* Ambient Glow Behind Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-violet-500/20 via-blue-500/10 to-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>

                {/* Browser Mockup Container */}
                <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/50 overflow-hidden flex flex-col ring-1 ring-slate-900/5">
                    
                    {/* Browser Header Bar */}
                    <div className="bg-slate-50/80 backdrop-blur-sm border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                        {/* Traffic Lights */}
                        <div className="flex gap-2 w-24">
                            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-red-400 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-amber-400 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300 hover:bg-green-400 transition-colors"></div>
                        </div>
                        
                        {/* Fake URL Bar */}
                        <div className="flex-1 flex justify-center">
                            <div className="bg-white/60 shadow-sm rounded-md px-12 md:px-32 py-1.5 text-xs text-slate-500 font-medium border border-slate-200 flex items-center gap-2">
                                <span className="text-[10px]">🔒</span> app.resumexai.com
                            </div>
                        </div>
                        <div className="w-24 flex justify-end"></div> 
                    </div>
                    
                    <div className="w-full flex flex-col md:flex-row relative min-h-[450px]">
                        
                        {/* LEFT PANEL: Canvas with dot pattern */}
                        <div className="flex-1 bg-slate-50 p-6 md:p-10 flex justify-center items-center relative border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden" 
                             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            
                            {/* Glassmorphism ATS Badge */}
                            <div className="absolute top-6 right-6 bg-white/70 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white flex items-center gap-3 z-10 hover:scale-105 transition-transform duration-500">
                                <div className="relative flex h-3.5 w-3.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">ATS Match</span>
                                    <span className="text-base font-black text-slate-800 leading-none">98<span className="text-emerald-500">%</span></span>
                                </div>
                            </div>

                            {/* Realistic Resume Paper Skeleton */}
                            <div className="w-full max-w-[300px] bg-white shadow-2xl shadow-slate-200/50 rounded-sm p-6 flex flex-col gap-5 relative transition-transform duration-700">
                                
                                {/* Header */}
                                <div className="flex flex-col items-center border-b border-slate-100 pb-5 gap-3">
                                    <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-50"></div>
                                    <div className="flex flex-col gap-2 items-center w-full">
                                        <div className="w-2/3 h-3 bg-slate-800/20 rounded-full"></div>
                                        <div className="w-1/3 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Normal Experience Block */}
                                <div className="flex flex-col gap-2.5">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="w-2/5 h-2.5 bg-slate-800/20 rounded-full"></div>
                                        <div className="w-1/5 h-2 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1"></div>
                                        <div className="w-full h-2 bg-slate-100 rounded-full mt-0.5"></div>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1"></div>
                                        <div className="w-4/5 h-2 bg-slate-100 rounded-full mt-0.5"></div>
                                    </div>
                                </div>

                                {/* AI Highlighted Editing Block */}
                                <div className="flex flex-col gap-2.5 p-3.5 bg-violet-50/80 rounded-lg border border-violet-200/60 relative overflow-hidden group">
                                    {/* Sweeping light effect */}
                                    {isTyping && <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>}
                                    
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="w-1/2 h-2.5 bg-violet-300 rounded-full"></div>
                                    </div>
                                    <div className="flex gap-2 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1 shadow-[0_0_8px_rgba(167,139,250,0.8)]"></div>
                                        {/* Skeleton lines representing the generated text */}
                                        <div className="flex flex-col w-full gap-2 mt-0.5">
                                            <div className="w-full h-2 bg-violet-200 rounded-full"></div>
                                            <div className="w-[85%] h-2 bg-violet-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* RIGHT PANEL: AI Editor Assistant */}
                        <div className="w-full md:w-[420px] bg-white p-6 md:p-8 flex flex-col justify-center border-l border-slate-100 z-10">
                            
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-xl shadow-inner border border-violet-50">
                                        <Wand2 className="size-5 text-violet-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-slate-800">AI Enhancer</h4>
                                        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Bullet Point Optimizer</p>
                                    </div>
                                </div>
                                
                                {/* Status Indicator */}
                                {isTyping ? (
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-600 rounded-full border border-violet-100">
                                        <RefreshCw className="size-3 animate-spin" />
                                        <span className="text-xs font-semibold">Writing</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
                                        <CheckCircle2 className="size-3" />
                                        <span className="text-xs font-semibold">Done</span>
                                    </div>
                                )}
                            </div>

                            {/* Original Text Box */}
                            <div className="mb-6 group">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Original Text</p>
                                </div>
                                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                    <p className="text-sm text-slate-500 line-through decoration-red-400/50 decoration-2">
                                        Managed team and increased sales.
                                    </p>
                                </div>
                            </div>

                            {/* AI Output Generation Animation Box */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider flex items-center gap-1">
                                        <Sparkles className="size-3" /> Optimized Result
                                    </p>
                                </div>
                                
                                <div className={`p-5 rounded-xl border transition-all duration-500 ${isTyping ? 'bg-white border-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)] ring-4 ring-violet-50' : 'bg-violet-50/50 border-violet-200'}`}>
                                    
                                    <div className="min-h-[80px]">
                                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                                            {typedText}
                                            {/* Blinking Cursor */}
                                            {isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-violet-500 animate-[pulse_0.8s_infinite] align-middle rounded-sm"></span>}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="mt-5 flex gap-3 opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]" style={{ animationDelay: isTyping ? '10s' : '0s' }}>
                                        <button className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 shadow-md">
                                            Apply <ChevronRight className="size-4" />
                                        </button>
                                        <button className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium rounded-lg transition-colors">
                                            Retry
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap');
                
                h2, h3, h4, span.font-semibold {
                    font-family: 'Poppins', sans-serif;
                }
                p, div {
                    font-family: 'Inter', sans-serif;
                }
                
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}

export default Features;