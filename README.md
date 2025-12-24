# Nallamala House - IIT Madras

A modern, interactive website for Nallamala House at IIT Madras, featuring stunning visuals, animations, and comprehensive information about the house community.

## 🌟 Features

- **Dynamic Home Section**: Immersive video background with smooth scroll animations
- **Events Management**: Showcase upcoming and past events with detailed information
- **Community Blogs**: Platform for sharing house experiences and stories
- **House Council & Team**: Display leadership and team structure
- **Clubs & Societies**: Information about various communities:
  - Coding: Shunya
  - Chess: Grand Master Guild
  - AI-ML: AIDW
  - Chapters & Verses (Literary Club)
  - Art Canvas
- **Regional Leaders**: Connect with regional representatives
- **3D Particle Effects**: Custom pixel snow animation using Three.js
- **Theme Support**: Dark/Light theme toggle
- **Responsive Design**: Fully optimized for all device sizes
- **Loading Screen**: Beautiful animated loading experience
- **Sign In/Up Pages**: User authentication interface

## 🛠️ Tech Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **3D Graphics**: Three.js 0.182.0
- **Icons**: Lucide React
- **Routing**: React Router DOM 6.27.0

## 📋 Prerequisites

Before you begin, ensure you have installed:
- Node.js (v18 or higher recommended)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nallamala
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets:
   - Place video files in `/public/videos/`:
     - `sample.mp4` - Main video for various sections
     - `855570-hd_1920_1080_25fps.mp4` - Hero section background
   - Place house logo in `/public/`:
     - `nallamala_house_iit_madras_logo.jpg`

## 💻 Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
nallamala/
├── public/
│   └── videos/              # Video assets
├── src/
│   ├── components/          # React components
│   │   ├── CommunitySection.tsx
│   │   ├── DarkEventsSection.tsx
│   │   ├── DarkHomeSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HomeSection.tsx
│   │   ├── HouseCouncilSection.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── MeetupGallery.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewEventsSection.tsx
│   │   ├── NewHomeSection.tsx
│   │   ├── NewHouseCouncilSection.tsx
│   │   ├── PixelSnow.tsx    # 3D particle system
│   │   ├── RegionalLeadersSection.tsx
│   │   ├── SignInPage.tsx
│   │   └── TeamSection.tsx
│   ├── context/
│   │   └── ThemeContext.tsx # Theme management
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── eslint.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## 🎨 Key Components

### PixelSnow
Custom 3D particle system built with Three.js featuring:
- Configurable particle colors, sizes, and density
- Depth-based fading effects
- Multiple particle variants (square/circle)
- Directional particle flow

### DarkHomeSection
Main landing page featuring:
- Video background with parallax scrolling
- Animated title and motto
- Statistics showcase
- Community highlights
- Meetup gallery

### Theme Context
Global theme management supporting:
- Dark/Light mode toggle
- Persistent theme preference
- Smooth theme transitions

## 🔧 Configuration Files

- **tailwind.config.js**: Tailwind CSS configuration
- **vite.config.ts**: Vite build configuration
- **tsconfig.json**: TypeScript configuration
- **eslint.config.js**: ESLint rules

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Motto

**वसुधैव कुटुम्बकम्** (Vasudhaiva Kutumbakam)
*"The World is One Family"*



## 📄 License

This project is private and maintained by Nallamala House, IIT Madras.

## 👥 Contact

For any queries or suggestions, please reach out to the Nallamala House Council.

---

Made with ❤️ by Nallamala House Community
