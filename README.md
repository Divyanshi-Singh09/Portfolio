# Divyanshi Singh — Personal Developer Portfolio

A premium, futuristic, highly interactive, fully responsive personal developer portfolio website designed for **Divyanshi Singh**, Full Stack Developer. Built with React 19, Vite, Tailwind CSS v4, Three.js, React Three Fiber, Framer Motion, Lenis, and modern WebGL aesthetics.

---

## 🌟 Key Features

- **Futuristic Cyber Aesthetics**: Sleek dark theme (`#070711`), neon violet (`#8B5CF6`) and electric cyan (`#06B6D4`) glowing accents, glassmorphic panels, and cyber radial gradients.
- **Interactive 3D Centerpiece**: React Three Fiber 3D glowing core with distortion materials, orbital cyber rings, and an interactive 350+ particle field responsive to cursor motion. Includes fallback rendering and respects `prefers-reduced-motion`.
- **Floating Glassmorphic Navbar**: Smooth section scroll spy, animated active pill indicator, responsive hamburger drawer for mobile, and instant resume download.
- **Dynamic Headline Typewriter**: Animated developer role text cycling smoothly between Full Stack, MERN, React, and 3D web capabilities.
- **Two-Column About Me**: Modern futuristic framed profile photograph, key metric counters, and editable information cards for Location, Experience Level, Education, and Specialization.
- **Categorized Technical Skills**: Interactive skill cards with 3D mouse tilt and glow effects. Filterable by Frontend, Backend, Database, Languages, Tools, and Computer Science fundamentals — free of misleading percentage meters.
- **Engineered Project Showcase**: Filterable portfolio projects featuring high-resolution preview graphics, technology tags, GitHub & live demo links, and an expandable deep-dive modal detailing architecture and engineering features.
- **Authentic Journey / "What I Build" Timeline**: Highlights hands-on engineering milestones, full-stack architecture, and open-source contributions with clear editable tags.
- **Education Timeline**: Degree qualifications, institution info, and relevant computer science coursework pills.
- **Functional Contact Flow**:
  - Validated with React Hook Form and Zod schemas.
  - Honeypot anti-spam protection.
  - Seamless EmailJS integration via environment variables.
  - Built-in graceful mailto fallback with one-click email copying.
  - Interactive celebration confetti using `canvas-confetti`.
- **Centralized Data File**: All personal information, projects, skills, education, social links, and credentials reside in `src/data/portfolioData.js` for instant updates.

---

## 🛠️ Technology Stack

| Category | Tools & Libraries |
| :--- | :--- |
| **Framework & Tooling** | React 19, Vite, JavaScript (ES6+) |
| **Styling** | Tailwind CSS v4, Glassmorphism, CSS Custom Properties |
| **3D & Creative** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animations** | Framer Motion, Lenis (Smooth Scroll), GSAP |
| **Icons & UI** | Lucide React, Custom SVG Icons, Sonner (Toasts) |
| **Forms & Validation**| React Hook Form, Zod, `@hookform/resolvers`, `@emailjs/browser` |
| **Delight** | `canvas-confetti` |

---

## 📁 Recommended Folder Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── avatar.jpg              # Profile photograph
│   │   ├── project-pgfinder.jpg    # PG Finder preview
│   │   ├── project-chatapp.jpg     # Real-Time Chat preview
│   │   ├── project-aiml3d.jpg      # 3D AI/ML Website preview
│   │   ├── project-expensetracker.jpg # Expense Tracker preview
│   │   ├── project-weatherapp.jpg  # Weather App preview
│   │   └── project-geminiclone.jpg # Gemini Clone preview
│   ├── resume/
│   │   └── Divyanshi_Singh_Resume.pdf # PDF resume file
│   └── favicon.svg                 # Neon initials favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Floating navigation bar
│   │   ├── Footer.jsx              # Footer with back-to-top & copyright
│   │   ├── ProjectCard.jsx         # Portfolio project showcase card
│   │   ├── ProjectModal.jsx        # Project deep-dive details modal
│   │   ├── SkillCard.jsx           # 3D tilting skill card
│   │   ├── SocialIcons.jsx         # Custom SVG GitHub & LinkedIn icons
│   │   └── ScrollToTop.jsx         # Floating back-to-top button
│   ├── sections/
│   │   ├── Hero.jsx                # Fullscreen 3D hero section
│   │   ├── About.jsx               # Two-column about with stats
│   │   ├── Skills.jsx              # Categorized skills grid
│   │   ├── Projects.jsx            # Filterable project showcase
│   │   ├── Experience.jsx          # Development journey timeline
│   │   ├── Education.jsx           # Academic degrees & coursework
│   │   └── Contact.jsx             # Validated contact form
│   ├── three/
│   │   └── HeroScene.jsx           # Three.js / R3F interactive scene
│   ├── data/
│   │   └── portfolioData.js        # Centralized configuration file
│   ├── hooks/
│   │   └── useScrollSpy.js         # Section scroll observer hook
│   ├── App.jsx                     # Application root with Lenis scroll
│   ├── main.jsx                    # React DOM entry point
│   └── index.css                   # Tailwind v4 tokens & glass styles
├── .env.example                    # EmailJS environment template
├── .env                            # Local environment variables
├── index.html                      # SEO metadata & Google Fonts
├── vite.config.js                  # Vite & Tailwind build configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Installation
Open your terminal in the project directory:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (typically `http://localhost:5173/`).

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory.

---

## ⚙️ Customization Guide

### Editing Content & Links
All portfolio data is centralized in **[`src/data/portfolioData.js`](file:///c:/Users/Admin/Desktop/Portfolio/src/data/portfolioData.js)**:
- **Personal Details**: Update your name, role, email, and tagline.
- **Social Media Links**: Replace GitHub and LinkedIn profile handles.
- **Projects**: Add new projects, update screenshots, or replace demo links.
- **Skills**: Add or reorder technical skills and categories.
- **Experience & Education**: Customize dates, institutions, roles, and accomplishments.

### Updating Your Resume
1. Drop your updated resume PDF into `public/resume/Divyanshi_Singh_Resume.pdf`.
2. Ensure `resumeAvailable: true` in `src/data/portfolioData.js`.

### Configuring EmailJS
To receive messages directly from the contact form into your email inbox:
1. Sign up for a free account at [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. Gmail) and copy your **Service ID**.
3. Create an **Email Template** and copy your **Template ID**. Use parameters `{{from_name}}`, `{{from_email}}`, `{{subject}}`, and `{{message}}`.
4. Grab your **Public Key** from Account > API Keys.
5. Create or edit `.env` in the root folder:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
6. Restart your dev server. *(Note: If credentials are not supplied, the contact form automatically defaults to a working mailto link).*

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
6. Click **Deploy**. Your portfolio will be live worldwide on an edge CDN!

---

## 📄 License
This portfolio is created for Divyanshi Singh. Feel free to customize and showcase your own projects!
