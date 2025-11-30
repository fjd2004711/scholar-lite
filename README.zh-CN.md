# Scholar-Lite

<div align="center">

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

**[English](./README.md) | [简体中文](./README.zh-CN.md)**

<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/nxu-scholar/scholar-lite">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
  </a>
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/nxu-scholar/scholar-lite">
    <img src="https://vercel.com/button" alt="Deploy with Vercel">
  </a>
</p>

</div>

## 📸 预览

<div align="center">
  <img src="./public/assets/screenshots/home-desktop.png" alt="桌面端预览" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

<div align="center" style="margin-top: 20px;">
  <img src="./public/assets/screenshots/mobile-view.png" alt="移动端预览" height="400" style="border-radius: 16px; border: 4px solid #333;">
</div>

> 🚀 **Scholar-Lite** 是一款专为学术实验室、研究团队和学者打造的**现代化静态网站模板**。基于 Astro v4 和 Tailwind CSS 构建，旨在提供极致的性能体验和优雅的展示效果。

## ⚡ 性能优先

我们极其重视性能。Scholar-Lite 基于 Astro 构建，默认向客户端发送 **0kb JavaScript**，确保秒开体验。

![Lighthouse Score](./public/assets/screenshots/lighthouse-score.png)

*Google Lighthouse 满分 100/100 评分。*

---

## ✨ 核心亮点

*   ⚡ **极致性能**：基于 [Astro](https://astro.build) 构建，默认零 JavaScript 运行时，加载速度飞快。
*   🎨 **现代设计**：集成 [Tailwind CSS](https://tailwindcss.com)，提供清新、专业的学术风格 UI，完美适配移动端。
*   📝 **Markdown 驱动**：无需数据库！通过 Markdown + Frontmatter 管理所有数据（论文、成员、荣誉等），像写文档一样管理网站。
*   🛡️ **类型安全**：完全基于 TypeScript，利用 Zod 进行内容模式验证，确保数据结构无误。
*   🌍 **多语言支持**：内置国际化（i18n）架构，轻松支持中、英等多语言切换。
*   🖼️ **真实图片支持**：轻松配置实验室 Logo、首页大图和团队成员头像。
*   🧩 **模块化组件**：提供论文列表、成员卡片、荣誉奖章等专用学术组件，开箱即用。
*   🔍 **SEO 优化**：自动生成站点地图（Sitemap），不仅对用户友好，对搜索引擎也友好。
*   📱 **移动端优化**：全响应式设计，提供现代化的移动端菜单体验。

---

## ⚙️ 个性化配置

所有主要配置都集中在 `src/config.ts` 文件中。你无需深入代码即可修改实验室名称、Logo 和其他信息。

```typescript
// src/config.ts
export const SITE = {
  website: 'https://your-lab.com',
  labName: 'Scholar-Lite Lab', // 实验室名称
  university: 'University Name', // 所属高校/机构
  logo: '/assets/logo-real.svg', // Logo 路径
  email: 'contact@lab.edu',
  
  // 首页 Hero 区域配置
  hero: {
    title: 'Advancing Computer Vision & Deep Learning Research.', // 首页标题
    subtitle: 'We are the Scholar-Lite Lab.', // 首页副标题
    image: '/assets/hero-real.jpg', // 首页右侧大图路径
  }
};

// Logo 显示配置
export const LOGO_IMAGE = {
  enable: true, // 是否显示 Logo
  svg: true,
  width: 216,
  height: 46,
};
```

### 🧭 导航栏配置

你可以通过修改 `src/config.ts` 中的 `nav` 数组来自定义顶部导航栏。

1.  **添加新菜单项**：
    打开 `src/config.ts`，找到 `nav` 数组，添加你的菜单项：
    ```typescript
    export const SITE = {
      // ...
      nav: [
        { text: 'Home', link: '/', key: 'home' },
        { text: 'News', link: '/news', key: 'news' },
        // 在这里添加新项：
        { text: 'My Page', link: '/my-page', key: 'myPage' }, 
      ],
      // ...
    };
    ```

2.  **添加多语言翻译（可选）**：
    如果你需要该菜单项支持多语言切换，请编辑 `src/i18n/ui.ts` 并在 `nav` 命名空间下添加对应的 key：
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

## 🛠️ 快速开始

### 环境要求
*   Node.js v18.14.1 或更高版本

### 1. 安装依赖
```bash
npm install
```

### 2. 本地开发
启动本地开发服务器，实时预览修改效果：
```bash
npm run dev
```
浏览器访问：`http://localhost:4321`

### 3. 构建部署
生成生产环境的静态文件：
```bash
npm run build
```
构建产物位于 `dist/` 目录（GitLab Pages 模式下会自动移至 `public/`）。

---

## 📂 项目结构概览

清晰的项目结构，让定制变得简单直观。

```text
/
├── public/                 # 静态资源 (favicon, robots.txt)
├── src/
│   ├── assets/             # 图片资源 (Astro 自动优化)
│   ├── components/         # UI 组件 (导航栏, 论文卡片, 成员卡片)
│   ├── content/            # 📝 核心数据库 (Markdown 文件)
│   │   ├── activities/     # 团队活动
│   │   ├── honors/         # 荣誉奖项
│   │   ├── news/           # 新闻动态
│   │   ├── patents/        # 专利
│   │   ├── publications/   # 学术论文与著作
│   │   ├── research/       # 研究方向介绍
│   │   ├── softwares/      # 软件著作权
│   │   ├── team/           # 团队成员
│   │   └── config.ts       # ⚙️ 数据模型定义 (Zod Schema)
│   ├── i18n/               # 🌐 多语言配置
│   ├── pages/              # 页面路由
│   └── config.ts           # 🛠️ 全局配置 (站点信息, 导航菜单)
└── astro.config.mjs        # Astro 配置文件
```

---

## 📝 内容管理指南

本模板使用 **Markdown** 文件作为数据源。所有内容均位于 `src/content/` 目录下。

### 1. 荣誉奖项 (Honors)
**路径**: `src/content/honors/`
支持自动根据奖项等级渲染不同的奖杯图标和颜色。

| 属性 | 说明 | 示例值 |
|------|------|--------|
| `title` | 奖项名称 | "挑战杯金奖" |
| `award` | 奖项等级描述 | "国家级一等奖" |
| `type` | 比赛类型 | `Challenge Cup`, `Internet+`, `Other` |
| `level` | **视觉样式等级** | `Special` (特等), `First` (一等), `Second` (二等), `Third` (三等) |

**示例**:
```yaml
---
title: "AI 医疗辅助诊断系统"
award: "国家级一等奖"
date: 2023-10-01
year: "2023"
type: "Challenge Cup"
level: "First"
---
```

### 2. 学术论文 (Publications)
**路径**: `src/content/publications/`

| 属性 | 说明 |
|------|------|
| `title` | 论文标题 |
| `authors` | 作者列表 `['Zhang San', 'Li Si']` |
| `venue` | 发表期刊或会议 (如 CVPR 2024) |
| `links` | 资源链接 (PDF, Code, Demo, Video) |
| `featured` | 是否在首页精选显示 (`true`/`false`) |

**示例**:
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

### 3. 团队成员 (Team)
**路径**: `src/content/team/`

| 属性 | 说明 |
|------|------|
| `name` | 姓名 |
| `role` | 角色: `Teacher`, `Postdoc`, `Graduate Student` 等 |
| `avatar` | 头像路径 (相对于 assets) |
| `weight` | 排序权重 (数字越小越靠前) |

---

## ⚙️ 系统配置

### 1. 修改站点基本信息
编辑 `src/config.ts` 文件，自定义你的实验室名称、Logo、导航菜单和社交链接。

```typescript
export const SITE = {
  website: 'https://your-lab-site.com',
  author: 'Intelligent Computing Lab',
  desc: 'Focusing on AI and CV research.',
  title: 'Scholar-Lite',
  // ...
};
```

### 2. 配置多语言
编辑 `src/i18n/ui.ts` 文件。
*   在 `languages` 对象中添加新语言。
*   在 `ui` 对象中添加对应的翻译文本。

---

## 🚢 部署

### GitLab Pages (预配置)
项目包含 `.gitlab-ci.yml` 文件，推送到 GitLab 后即可自动构建并部署到 Pages。

### 其他平台 (Vercel / Netlify)
只需连接你的 Git 仓库，构建命令设置为 `npm run build`，发布目录设置为 `dist/` 即可。

---

<div align="center">
Created with ❤️ by <a href="https://github.com/nxu-scholar">Scholar-Lite Team</a>
</div>
