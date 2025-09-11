# 🌟 Tristan Agra Yudhistira - Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-blue?style=for-the-badge)](https://tristanagra.dev)
[![React Router](https://img.shields.io/badge/React%20Router-7.8.2-red?style=for-the-badge&logo=react-router)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.5-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0.0-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> A modern, responsive portfolio website showcasing my journey as a Software Engineer specializing in Website, Mobile, and Desktop Development. Currently studying Computer Science at Universitas Indonesia.

## ✨ Features

### 🎨 **Modern Design**

-   **Dark/Light Mode Toggle** with system preference detection
-   **Responsive Design** optimized for all devices
-   **Professional Typography** using Inter font family
-   **Gradient Accents** and smooth color transitions

### ⚡ **Performance & UX**

-   **Server-Side Rendering** with React Router v7
-   **Smooth Scrolling** powered by Framer Motion
-   **Optimized Images** and lazy loading
-   **Fast Loading** with code splitting

### 🚀 **Interactive Elements**

-   **Animated Sections** with scroll-triggered animations
-   **Typed.js Integration** for dynamic hero text
-   **Smooth Navigation** with active section highlighting
-   **Progress Indicators** and back-to-top functionality

### 📱 **Contact & Analytics**

-   **Discord Webhook Integration** for contact form submissions
-   **CV Download Tracking** with user analytics
-   **Social Media Links** with hover animations
-   **Professional Contact Information**

### 🛡️ **Modern Stack**

-   **React Router 7** with modern routing
-   **TypeScript** for type safety
-   **Tailwind CSS 4** for utility-first styling
-   **Framer Motion** for smooth animations
-   **Radix UI** for accessible components

## 🏗️ Project Structure

```
📦 Web-Portfolio-Refined
├── 📂 app/
│   ├── 📂 components/
│   │   ├── 📂 ui/                    # Reusable UI components
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   ├── scroll-progress.tsx
│   │   │   └── back-to-top.tsx
│   │   ├── 📂 sections/              # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   └── contact-section.tsx
│   │   └── navigation.tsx
│   ├── 📂 lib/
│   │   ├── constants.ts              # App constants and data
│   │   ├── utils.ts                  # Utility functions
│   │   ├── theme-context.tsx         # Theme management
│   │   └── smooth-scroll.ts          # Smooth scrolling logic
│   ├── 📂 routes/
│   │   └── home.tsx                  # Main page route
│   ├── app.css                       # Global styles
│   └── root.tsx                      # App root with meta tags
├── 📂 public/
│   ├── 📂 webicon/                   # Favicon and app icons
│   ├── 📂 Profile/                   # Profile images
│   ├── 📂 Project/                   # Project screenshots
│   └── 📂 Skills/                    # Technology icons
└── 📄 README.md
```

## 🚀 Getting Started

### Prerequisites

-   **Node.js** 18+
-   **pnpm** (recommended) or npm
-   **Modern browser** with ES2020+ support

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/TrayMachi/Web-Portofolio-Refined.git
    cd Web-Portofolio-Refined
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Start development server**

    ```bash
    pnpm dev
    ```

4. **Open in browser**
    ```
    http://localhost:5173
    ```

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with HMR

# Building
pnpm build        # Create production build
pnpm start        # Start production server

# Type Checking
pnpm typecheck    # Run TypeScript compiler
```

### Key Technologies

| Technology        | Version | Purpose                              |
| ----------------- | ------- | ------------------------------------ |
| **React Router**  | 7.8.2   | Modern routing and SSR               |
| **TypeScript**    | 5.8.5   | Type safety and developer experience |
| **Tailwind CSS**  | 4.1.5   | Utility-first styling                |
| **Framer Motion** | 12.0.0  | Smooth animations and gestures       |
| **Radix UI**      | Latest  | Accessible component primitives      |
| **Lucide React**  | 0.543.0 | Beautiful icon library               |

## 🎨 Customization

### Theme Configuration

The portfolio supports light/dark themes with system preference detection:

```typescript
// lib/theme-context.tsx
type Theme = "light" | "dark" | "system";
```

### Adding New Sections

1. Create component in `app/components/sections/`
2. Add section ID to `lib/constants.ts`
3. Import and use in `routes/home.tsx`

### Updating Content

Personal information, projects, and experience data are centralized in:

```typescript
// lib/constants.ts
export const PERSONAL_INFO = {
    /* ... */
};
export const PROJECTS = [
    /* ... */
];
export const EXPERIENCE = [
    /* ... */
];
```

## 🚢 Deployment

### Docker Deployment

```bash
# Build Docker image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Platform Support

-   ✅ **Fly.io** (includes GitHub Actions workflow)
-   ✅ **Vercel** / **Netlify**
-   ✅ **AWS ECS** / **Google Cloud Run**
-   ✅ **Railway** / **Digital Ocean**

### Environment Setup

Required environment variables:

```bash
VITE_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

## 📊 Features Deep Dive

### Contact Form Integration

-   **Discord Webhooks** for real-time notifications
-   **Form validation** with user feedback
-   **Responsive design** with smooth animations

### CV Download Tracking

-   **User analytics** including browser, location, referrer
-   **IP geolocation** for visitor insights
-   **Discord notifications** with detailed metrics

### Smooth Scrolling

-   **Adaptive easing** based on scroll distance
-   **Performance optimized** with requestAnimationFrame
-   **Visual feedback** with progress indicators

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements:

1. **Fork** the repository
2. **Create** a feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

## 📄 License

This project is **open source** and available under the [MIT License](LICENSE).

## 📧 Contact

**Tristan Agra Yudhistira**

-   🌐 Website: [tristanagra.dev](https://tristanagra.dev)
-   💼 LinkedIn: [tristanagra](https://www.linkedin.com/in/tristanagra/)
-   🐙 GitHub: [TrayMachi](https://github.com/TrayMachi)
-   📧 Email: tristanagraa@gmail.com

---

<div align="center">

**Built with ❤️ using React Router, TypeScript, and modern web technologies**

[![Portfolio](https://img.shields.io/badge/Visit-Portfolio-blue?style=for-the-badge)](https://tristanagra.dev)

</div>
