# Mastersolis Infotech - Personal Website

A modern, responsive personal website showcasing Mastersolis Infotech's services, projects, and insights in AI-powered software development.

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-cyan)
![MongoDB](https://img.shields.io/badge/MongoDB-8-green)

## 🚀 Features

### Core Pages
- **Home**: Welcome page with hero section and key highlights
- **About**: Company story, mission, vision, values, and team information
- **Services**: Detailed breakdown of offered services (AI, web development, etc.)
- **Projects**: Showcase of completed projects with descriptions
- **Blog**: Technical articles on AI, development trends, and case studies
- **Resume Verification**: AI-powered resume analysis tool
- **Contact**: Contact form with email notifications
- **Admin Dashboard**: Management interface for content and analytics

### Key Functionality
- **AI-Powered Resume Analysis**: Upload PDF resumes for skill matching and AI-generated feedback
- **Email Integration**: Contact forms send automated emails via Resend
- **Responsive Design**: Mobile-first design with dark/light theme support
- **Blog System**: Dynamic blog posts with categories and rich content
- **Contact Management**: Store contact submissions (MongoDB integration)
- **Modern UI**: Glassmorphism effects, smooth animations, and professional styling

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Backend & APIs
- **Next.js API Routes** - Serverless functions
- **MongoDB** - NoSQL database for contact storage
- **OpenAI API** - AI-powered resume analysis
- **Resend** - Email service for notifications

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment platform

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** 18+ (preferably 20+ for Next.js 16 compatibility)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud like MongoDB Atlas)
- **OpenAI API Key** (for resume verification)
- **Resend API Key** (for email notifications)

## 🏗 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mastersolis-website.git
   cd mastersolis-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/mastersolis

   # AI & Email Services
   OPENAI_API_KEY=your_openai_api_key_here
   RESEND_API_KEY=your_resend_api_key_here

   # Email Configuration
   MAIL_FROM=contact@mastersolis.dev
   NOTIFY_TO=admin@mastersolis.dev
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

### Navigating the Website
- Browse through different sections using the header navigation
- Use the theme toggle for dark/light mode
- Contact form submissions are stored and trigger email notifications

### Resume Verification
1. Go to `/resume` page
2. Upload a PDF resume
3. AI analyzes the content and provides:
   - Skill matching against required competencies
   - AI-generated assessment and suggestions
   - Match score and missing skills

### Admin Dashboard
- Access via `/admin` for content management
- View analytics and contact submissions
- Manage blog posts and projects

### Blog System
- Browse articles on `/blog`
- Click any post card to read full content
- Posts include categories, read time, and rich formatting

## 🔌 API Documentation

### Resume Verification API
- **Endpoint**: `POST /api/resume/verify`
- **Body**: `FormData` with `file` (PDF)
- **Response**: JSON with score, matched skills, missing skills, and AI summary

### Contact API
- **Endpoint**: `POST /api/contact`
- **Body**: JSON with `name`, `email`, `message`
- **Response**: Success confirmation with optional email sending

### Blog Posts
- Dynamic routes: `/blog/[slug]`
- Server-side rendered blog content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Mastersolis Infotech**
- Email: ishanoza666@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
