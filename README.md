# Interactive Neon 3D Portfolio
A modern, high-performance, and visually stunning interactive 3D portfolio website built for Amany Elsayed. Featuring a sleek, futuristic dark mode aesthetic with vibrant neon highlights, custom line-drawing and text-typing animations, scroll-triggered visual trees, an interactive experience timeline, and contact form integration via EmailJS.

## Features
- **Interactive 3D Effects** - Powered by Three.js and React Three Fiber/Drei for premium, immersive 3D post-processing effects
- **Dynamic Neon Aesthetics** - Cyberpunk-inspired dark-blue neon styling with custom glassmorphism components
- **Scroll-Triggered Animations** - Smooth entrance and branch reveal animations using custom Intersection Observer hooks (`useScrollReveal`)
- **Interactive Timeline** - A dynamically drawn "light beam" vertical timeline representing educational and professional milestones
- **Visual Skill Trees** - Unique branching neon visual trees representing different skill categories
- **Email Form Integration** - Direct, secure email dispatch utilizing client-side EmailJS SDK integration
- **Responsive Layout** - Seamless design built with Material UI (MUI) that works flawlessly on mobile, tablet, and desktop
- **Custom Typography** - Highly polished typographic hierarchy using Exo 2 and Space Grotesk Google Fonts

## Tech Stack
### Frontend
- **React 19** - Component-based library for building user interfaces
- **Three.js** - 3D library used to render interactive graphics
- **React Three Fiber & Drei** - React wrapper and helpers for Three.js
- **Material UI (MUI) 9** - Component library for layout, grids, inputs, buttons, and system icons
- **Styled Components 6** - CSS-in-JS library for styling components dynamically
- **EmailJS Client SDK 4** - Third-party service to send emails directly from client-side code
- **Vite 8** - Extremely fast bundler and build tool

### Development & Tools
- **ESLint 9** - Linting tool for ensuring clean, consistent JS/React code
- **Google Fonts** - Host for Exo 2 (headings) and Space Grotesk (body/buttons)

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js (v18 or higher)** - [Download](https://nodejs.org/)
- **npm (v9 or higher)** - Comes with Node.js

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Amany-Elsayed/improved-portfolio.git
   cd improved-portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
Create a `.env` file in the root directory to store your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```

## Running the Application
### Development Mode
Start the development server:
```bash
npm run dev
```
The application will run on `http://localhost:5173` (or the port specified by Vite).
The application will automatically reload when you modify source files.

### Production Mode
1. Build the production application:
   ```bash
   npm run build
   ```
   This creates optimized production-ready files in the `dist/` directory.

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure
```
improved-portfolio/
├── public/                          # Static assets and images
│   ├── myPicture.png                # Profile picture
│   ├── project1.png                 # Chats-App screenshot
│   ├── project2.png                 # AI Grading Model screenshot
│   ├── project3.png                 # Todo List screenshot
│   └── project4.png                 # Portfolio Builder screenshot
│
├── src/                             # React application source code
│   ├── animations/                  # Custom interactive animation components
│   │   ├── ExperienceReveal.css     # CSS rules for timeline reveal beam
│   │   ├── ExperienceReveal.jsx     # Intersection observer for timeline tracking
│   │   ├── NeonLineAnimation.css    # Glow and drawing styles for neon headers
│   │   ├── NeonLineAnimation.jsx    # Custom line-reveal header animation
│   │   ├── ProjectsTreeReveal.css   # Neon connector style for projects tree
│   │   ├── ProjectsTreeReveal.jsx   # Branching vector animation for projects
│   │   ├── RevealWrapper.css        # Base transition rules for elements
│   │   ├── RevealWrapper.jsx        # Generic viewport entry wrapper
│   │   ├── SkillsTreeReveal.css     # Neon connector style for skills tree
│   │   ├── SkillsTreeReveal.jsx     # Branching vector animation for skills
│   │   ├── TypingAnimation.css      # Typing cursor visual styling
│   │   └── TypingAnimation.jsx      # Typewriter effect component
│   │
│   ├── components/                  # Section components of the site
│   │   ├── About.css                # Style rules for stats and terminal boxes
│   │   ├── About.jsx                # "Who I Am" section with metrics and bio
│   │   ├── Contact.css              # Custom styling for terminal block & forms
│   │   ├── Contact.jsx              # Forms with validation & EmailJS logic
│   │   ├── Experience.css           # Timeline cards layout & media queries
│   │   ├── Experience.jsx           # Milestones layout (NTI, You Can Academy)
│   │   ├── Footer.css               # Styled footer layout
│   │   ├── Footer.jsx               # Quick links & author credits
│   │   ├── Header.css               # Sticky header and menu layout
│   │   ├── Header.jsx               # Navigation bar & responsive menu trigger
│   │   ├── Hero.css                 # 3D/landing backdrop styles
│   │   ├── Hero.jsx                 # Dynamic entrance landing viewport
│   │   ├── Projects.css             # Hover states & card grid layout
│   │   ├── Projects.jsx             # Grid portfolio featuring 4 distinct projects
│   │   ├── Skills.css               # Skills layout with typography
│   │   └── Skills.jsx               # Category cards (Frontend, Backend, etc.)
│   │
│   ├── hooks/                       # Custom React Hooks
│   │   └── useScrollReveal.js       # Hook checking whether elements are visible
│   │
│   ├── App.css                      # Global container layouts & glows
│   ├── App.jsx                      # Main orchestrator mapping all sections
│   ├── Fonts.css                    # Font integrations (Exo 2, Space Grotesk)
│   ├── Theme.jsx                    # Custom Material UI theme config
│   └── main.jsx                     # StrictMode and ThemeProvider wrapper
│
├── index.html                       # HTML base template
├── package.json                     # List of scripts and npm dependencies
├── vite.config.js                   # Vite configuration
└── eslint.config.js                 # ESLint rules and settings
```

## Available Scripts
- `npm run dev` - Start the local Vite development server with HMR
- `npm run build` - Bundle the application for production deployment into `/dist`
- `npm run lint` - Run ESLint static code analyzer to catch bugs and verify standards
- `npm run preview` - Serve the built `/dist` project locally to preview production build

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Guidelines
- Maintain a consistent code style based on ESLint rules.
- Add comments explaining custom canvas behaviors and animations.
- Ensure styling scales correctly on all device widths (fully responsive).
- Verify EmailJS environment variables are correctly loaded before committing.

## Author
**Amany Elsayed**
- GitHub: [@Amany-Elsayed](https://github.com/Amany-Elsayed)
- LinkedIn: [Amany Elsayed](https://www.linkedin.com/in/amany-elsayed0/)
- Email: [amanyelsayed@outlook.com](mailto:amanyelsayed@outlook.com)
- Role: Junior MERN / MEAN Stack Developer & Electronics and Communications Engineer

## Acknowledgments
- **Three.js / React Three Fiber** - For enabling immersive web 3D graphics
- **Material UI** - For building beautiful layout components quickly
- **EmailJS** - For hassle-free direct email contact dispatch
- **National Telecommunication Institute (NTI)** - For full-stack MEAN training support
