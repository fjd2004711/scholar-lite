# Scholar-Lite

<div align="center">

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

**[English](./README.md) | [简体中文](./README.zh-CN.md)**

<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/fjd2004711/scholar-lite">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
  </a>
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/fjd2004711/scholar-lite">
    <img src="https://vercel.com/button" alt="Deploy with Vercel">
  </a>
</p>

</div>

## 📸 Preview

<div align="center">
  <img src="./public/assets/screenshots/home-desktop.png" alt="Desktop Preview" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

<div align="center" style="margin-top: 20px;">
  <img src="./public/assets/screenshots/mobile-view.png" alt="Mobile Preview" height="400" style="border-radius: 16px; border: 4px solid #333;">
</div>

> 🚀 **Scholar-Lite** is a **modern static website template** designed specifically for academic laboratories, research teams, and scholars. Built with Astro v5 and Tailwind CSS, it delivers extreme performance and an elegant presentation.

## ⚡ Performance First

We take performance seriously. Scholar-Lite is built on Astro to deliver **0kb JavaScript** by default to the client.

![Lighthouse Score](./public/assets/screenshots/lighthouse-score.png)

*Perfect 100/100 scores on Google Lighthouse.*

---

## ✨ Key Features

*   ⚡ **Blazing Fast**: Built on [Astro](https://astro.build), shipping zero JavaScript by default for ultimate performance.
*   🎨 **Modern Design**: Integrated with [Tailwind CSS](https://tailwindcss.com) for a clean, professional academic look that works perfectly on mobile.
*   📝 **Markdown Powered**: No database needed! Manage all data (papers, members, honors) via Markdown + Frontmatter. It's like writing documentation.
*   🛡️ **Type Safe**: Fully TypeScript-based with Zod schema validation to ensure your content data is always structured correctly.
*   🌍 **i18n Ready**: Built-in internationalization architecture to easily support English, Chinese, and 8 other languages.
*   🖼️ **Real Image Support**: Easily configure your Lab Logo, Hero Image, and Team Avatars via config files.
*   🧩 **Modular Components**: Ready-to-use academic components like Publication Lists, Team Cards, and Honor Badges.
*   🔍 **SEO Optimized**: Automatic sitemap generation and meta tags to help your research get found.
*   📱 **Mobile Optimized**: Fully responsive design with a modern, app-like mobile menu experience.

---

## ⚙️ Configuration

All major site settings are centralized in `src/config.ts`. You don't need to dig into code to change your lab's name or logo.

```typescript
// src/config.ts
export const SITE = {
  website: 'https://your-lab.com',
  labName: 'Scholar-Lite Lab', // Your Lab Name
  university: 'University Name', // Your University
  logo: '/assets/logo-real.svg', // Path to your logo
  email: 'contact@lab.edu',
  
  // Hero Section Configuration
  hero: {
    title: 'Advancing Computer Vision & Deep Learning Research.',
    subtitle: 'We are the Scholar-Lite Lab.',
    image: '/assets/hero-real.jpg', // Your Hero Image
  }
};

// Logo Visibility
export const LOGO_IMAGE = {
  enable: true, // Toggle logo display
  svg: true,
  width: 216,
  height: 46,
};
```

### 🧭 Navigation Bar Configuration

You can customize the top navigation bar by editing the `nav` array in `src/config.ts`.

1.  **Add a New Item**:
    Open `src/config.ts` and find the `nav` array. Add your new item:
    ```typescript
    export const SITE = {
      // ...
      nav: [
        { text: 'Home', link: '/', key: 'home' },
        { text: 'News', link: '/news', key: 'news' },
        // Add your new item here:
        { text: 'My Page', link: '/my-page', key: 'myPage' }, 
      ],
      // ...
    };
    ```

2.  **Add Translations (Optional)**:
    If you want multi-language support for this item, edit `src/i18n/ui.ts` and add the key under the `nav` namespace:
    ```typescript
    export const ui = {
      en: {
        // ...
        'nav.myPage': 'My Page',
      },
      zh: {
        // ...
        'nav.myPage': '我的页面',
      },
    };
    ```

## 🛠️ Quick Start

### Prerequisites
*   Node.js v18.14.1 or higher

### 1. Installation
```bash
npm install
```

### 2. Development
Start the local development server with live reload:
```bash
npm run dev
```
Open your browser at: `http://localhost:4321`

### 3. Build
Generate static files for production:
```bash
npm run build
```
The output will be in the `dist/` folder (or `public/` for GitLab Pages).

---

## 📂 Project Structure

A clear structure makes customization intuitive.

```text
/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images (Optimized by Astro)
│   ├── components/         # UI Components (Nav, Cards)
│   ├── content/            # 📝 DATABASE (Markdown files)
│   │   ├── activities/     # Team Activities
│   │   ├── honors/         # Awards & Honors
│   │   ├── news/           # News Items
│   │   ├── patents/        # Patents
│   │   ├── publications/   # Papers & Books
│   │   ├── research/       # Research Areas
│   │   ├── softwares/      # Software Copyrights
│   │   ├── team/           # Team Members
│   │   └── config.ts       # ⚙️ Data Schemas (Zod)
│   ├── i18n/               # 🌐 Internationalization
│   ├── pages/              # URL Routes
│   └── config.ts           # 🛠️ Global Config (Site Info, Nav)
└── astro.config.mjs        # Astro Configuration
```

---

## 📝 Content Management

This template uses **Markdown** files as its database. All content is located in the `src/content/` directory.

### 1. Honors (Awards)
**Location**: `src/content/honors/`
Automatically renders trophy icons and colors based on the award level.

| Attribute | Description | Example |
|-----------|-------------|---------|
| `title` | Award Name | "Challenge Cup Gold Medal" |
| `award` | Rank Description | "National First Prize" |
| `type` | Competition Type | `Challenge Cup`, `Internet+`, `Other` |
| `level` | **Visual Style** | `Special`, `First`, `Second`, `Third` |

**Example**:
```yaml
---
title: "AI Medical System"
award: "National First Prize"
date: 2023-10-01
year: "2023"
type: "Challenge Cup"
level: "First"
---
```

### 2. Publications
**Location**: `src/content/publications/`

| Attribute | Description |
|-----------|-------------|
| `title` | Paper Title |
| `authors` | Author List `['Zhang San', 'Li Si']` |
| `venue` | Journal/Conference (e.g., CVPR 2024) |
| `links` | Resources (PDF, Code, Demo, Video) |
| `featured` | Show on Home Page (`true`/`false`) |

**Example**:
```yaml
---
title: "Deep Learning for Computer Vision"
authors: ["San Zhang", "Si Li"]
year: 2024
venue: "CVPR 2024"
type: "paper"
links:
  pdf: "https://arxiv.org/abs/..."
  code: "https://github.com/..."
featured: true
---
```

### 3. Team Members
**Location**: `src/content/team/`

| Attribute | Description |
|-----------|-------------|
| `name` | Full Name |
| `role` | Role: `Teacher`, `Postdoc`, `Graduate Student`, etc. |
| `avatar` | Image Path (relative to assets) |
| `weight` | Sort Order (Lower numbers appear first) |
| `linkedin` | LinkedIn Profile URL (optional) |
| `github` | GitHub Profile URL (optional) |
| `website` | Personal Website URL (optional) |

---

## ⚙️ Configuration

### 1. Site Information
Edit `src/config.ts` to customize your lab name, logo, navigation menu, and social links.

```typescript
export const SITE = {
  website: 'https://your-lab-site.com',
  author: 'Intelligent Computing Lab',
  desc: 'Focusing on AI and CV research.',
  title: 'Scholar-Lite',
  // ...
};
```

### 2. Multi-language
Edit `src/i18n/ui.ts`.
*   Add new languages to the `languages` object.
*   Add translation strings to the `ui` object.

---

## 🚢 Deployment

### GitLab Pages (Pre-configured)
The project includes a `.gitlab-ci.yml` file. Simply push to GitLab, and the pipeline will build and deploy to Pages automatically.

### Other Platforms (Vercel / Netlify)
Connect your Git repository, set the build command to `npm run build`, and the publish directory to `dist/`.

---

<div align="center">
Created with ❤️ by <a href="https://github.com/fjd2004711">Scholar-Lite Team</a>
</div>
