import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {

    const {user} = useSelector(state => state.auth)
    const [menuOpen, setMenuOpen] = React.useState(false);

  return (
     <>
    <div className="min-h-screen pb-20">
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <Link to='/'>
                        <img src='/file.svg' alt='logo' className='h-6 w-auto' />
                    </Link>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-green-600 transition">Home</a>
                        <a href="#features" className="hover:text-green-600 transition">Features</a>
                        <a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a>
                        <a href="#cta" className="hover:text-green-600 transition">Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={user}>
                            Get started
                        </Link>
                        <Link to='/app?state=login' className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" hidden={user}>
                            Login
                        </Link>
                        <Link to='/app' className='hidden md:block px-8 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white' hidden={!user}>
                            Dashboard
                        </Link>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu">
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                <div className={`fixed inset-0 z-100 bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <a href="#" className="text-white">Home</a>
                    <a href="#features" className="text-white">Features</a>
                    <a href="#testimonials" className="text-white">Testimonials</a>
                    <a href="#cta" className="text-white">Contact</a>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex">
                        X
                    </button>
                </div>

                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

                    <div className="flex items-center gap-2 mt-24 bg-green-50 border border-green-200 rounded-full px-4 py-2">
                        <span className="text-green-600 text-sm font-medium">✨ AI Powered Resume Builder</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 leading-tight">
                    Land Your Dream Job with{' '}
                    <span style={{
                        background: 'linear-gradient(to right, #15803d, #16a34a)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        AI
                    </span>{' '}
                    Powered Resume.
                    </h1>

                    <p className="max-w-md text-center text-base my-7">Create, customize & download your professional resume in minutes — with AI that actually gets you hired.</p>

                    <div className="flex items-center gap-4">
                        <Link to='/app' className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <a href="https://github.com/tera-username" target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700">
                            <span>View on GitHub</span>
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-14">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border text-sm text-slate-600">⚡ ATS Friendly</div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border text-sm text-slate-600">🎨 Multiple Templates</div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border text-sm text-slate-600">🤖 AI Enhanced</div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border text-sm text-slate-600">📄 PDF Download</div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
                    * { font-family: 'Poppins', sans-serif; }
                `}
            </style>
        </>
  )
}

export default Hero