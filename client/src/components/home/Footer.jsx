import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{background: 'linear-gradient(to right, #f0fdf4, #dcfce7, #f0fdf4)'}} className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 mt-40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h2 className="text-xl font-medium text-slate-800 mb-3">resume<span className="text-green-600">x</span>ai</h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Build a professional, ATS-friendly resume in minutes using the power of AI. Land more interviews, faster.</p>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-700 uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-3">
              <li><Link to='/' className="text-sm text-slate-500 hover:text-green-600 transition">Home</Link></li>
              <li><Link to='/app' className="text-sm text-slate-500 hover:text-green-600 transition">Dashboard</Link></li>
              <li><Link to='/app?state=register' className="text-sm text-slate-500 hover:text-green-600 transition">Create Resume</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium text-slate-700 uppercase tracking-widest mb-4">Account</p>
            <ul className="space-y-3">
              <li><Link to='/app?state=login' className="text-sm text-slate-500 hover:text-green-600 transition">Login</Link></li>
              <li><Link to='/app?state=register' className="text-sm text-slate-500 hover:text-green-600 transition">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400">© 2025 AI Resume Builder. All rights reserved.</p>
          <p className="text-xs text-slate-400">Made with <span className="text-green-600">♥</span> for job seekers</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer