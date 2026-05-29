# AI Resume Builder 🚀

A full-stack AI-powered resume builder built with the MERN stack.

## 🌟 Features

- 🤖 AI-powered resume content enhancement
- 📄 Multiple resume templates
- 🎨 Customizable accent colors
- 📊 ATS Score Checker
- 🔗 Shareable resume links
- 📥 PDF download
- 🔐 JWT Authentication
- ☁️ Image upload with ImageKit

## 🛠️ Tech Stack

**Frontend:** React.js, Redux Toolkit, Tailwind CSS, Vite

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**AI:** OpenAI API

**Other:** ImageKit, JWT, Bcrypt, Multer

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- OpenAI API Key
- ImageKit Account

### Installation

**Clone the repo:**
```bash
git clone https://github.com/rakeshkumar-mandal/ai-resume-builder.git
```

**Backend setup:**
```bash
cd server
npm install
```

**Create`.env` file inside server folder:**
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-3.5-turbo
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url


**Frontend setup:**
```bash
cd client
npm install
```

**Create`.env` file in client folder:**
VITE_BASE_URL=http://localhost:3000

**Run code:**
```bash
# Backend
cd server
npm run server

# Frontend
cd client
npm run dev
```

## 👨‍💻 Developer

Made with ❤️ by [Rakesh Kumar Mandal](https://github.com/rakeshkumar-mandal)
