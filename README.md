# 🎓 Scholar-Lite

<div align="center">

![Astro](https://img.shields.io/badge/Astro_v6-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Pagefind](https://img.shields.io/badge/Pagefind-Search-FF0000?style=for-the-badge&logo=algolia&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

**[English](./README.md) | [简体中文](./README.zh-CN.md)**

> ## **⚡ Create your site in 30 seconds**
> ```bash
> npm create astro@latest -- --template fjd2004711/scholar-lite
> ```

<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/fjd2004711/scholar-lite" target="_blank">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
  </a>
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/fjd2004711/scholar-lite" target="_blank">
    <img src="https://vercel.com/button" alt="Deploy with Vercel">
  </a>
</p>

**The Next-Generation Static Website Template for Academic Labs & Scholars.**
*Blazing fast, zero-config BibTeX import, and multilingual search engine built-in.*

---

## 🚀 Quick Start (No Coding Required)

1.  **Click** the `Deploy to Netlify` or `Deploy with Vercel` button above.
2.  **Wait** for the deployment to finish.
3.  **Go to** your new GitHub repository and find `citations.bib`.
4.  **Upload** your own BibTeX file to replace it.
5.  **Done!** Your website updates automatically in 1 minute.

---

<div align="center" style="margin-top: 20px;">
  <table>
    <tr>
      <td align="center">
        <a href="https://scholar-lite-demo.netlify.app/" target="_blank">
          <img src="https://img.shields.io/badge/Live_Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
        </a>
        <br />
        <strong>Live Preview</strong>
      </td>
      <td align="center">
        <a href="https://github.com/fjd2004711/scholar-lite" target="_blank">
          <img src="https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code" />
        </a>
        <br />
        <strong>Repository</strong>
      </td>
    </tr>
  </table>
</div>

<div align="center">
  <img src="public/assets/screenshots/home-desktop-mockup.png" width="70%" alt="Desktop View" />
  <img src="public/assets/screenshots/mobile-view-mockup.png" width="25%" alt="Mobile View" />
</div>

</div>

---

## 🚀 Why Scholar-Lite?

### ⚡ Unmatched Performance
*   **Zero JS by Default**: Built on **Astro v6**, sending **0kb** of JavaScript to the client for content pages.
*   **100/100 Lighthouse**: Optimized out-of-the-box for Performance, Accessibility, Best Practices, and SEO.
*   **Tailwind CSS v4**: The latest utility-first CSS framework for rapid, modern styling.

<p align="center">
  <img src="public/assets/screenshots/lighthouse-score.png" width="80%" alt="Lighthouse Score">
</p>

### 🤖 Smart Automation
*   **One-Click BibTeX Import**: Stop manually copying papers. Drop your `citations.bib` and run one command.
*   **Intelligent Parsing**: Automatically extracts **PDF links**, **Code repositories**, **Project Websites**, **Videos**, and **Cover images**.
*   **Asset Management**: Smart fallback system for missing publication covers.
*   **Auto-Badging**: Automatically highlights "Best Paper", "Oral", or "Spotlight" awards based on BibTeX notes.

### 🌍 Global Reach
*   **Multilingual Search**: Built-in **Pagefind** search engine supporting **8 languages** (English, Chinese, Japanese, Korean, French, German, Spanish, Russian).
*   **i18n Ready**: Native support for internationalization with type-safe translations.

---

## 🆚 Comparison: Scholar-Lite vs. Hugo Academic

| Feature | 🎓 Scholar-Lite | 🐢 Hugo Academic (Wowchemy) |
| :--- | :--- | :--- |
| **Tech Stack** | **Astro v6 + React + Tailwind v4** (Modern & Mainstream) | Hugo + Go Templates (Steep learning curve) |
| **Performance** | **100/100 Lighthouse** (Zero JS by default) | Good, but often bloated with heavy JS |
| **BibTeX Import** | **Zero-Config** (Drag & drop `citations.bib`) | Complex Python scripts / Manual entry |
| **Customization** | **Component-based** (Edit `.astro` / `.tsx` files directly) | Rigid Theme (Overriding internal templates is hard) |
| **Multilingual** | **Native i18n + Pagefind** (Search in 8 languages) | Partial support, search often breaks |
| **Dev Experience** | **Hot Reload (HMR)** in milliseconds | Slower rebuilds on large sites |
| **Ecosystem** | **NPM / Node.js** (Access to millions of packages) | Go Modules (Limited web-focused packages) |

---

## 🛠️ Quick Start

### Prerequisites
*   Node.js v22.12.0 or higher

### 1. Installation
```bash
git clone https://github.com/your-repo/scholar-lite.git
cd scholar-lite
npm install
```

### 2. Development
Start the local server with hot module replacement:
```bash
npm run dev
```
Visit `http://localhost:4321`.

### 3. Production Build
Generate the static site and search index:
```bash
npm run build
```
*Note: The search index is generated at build time. Search functionality requires the build step.*

---

## 📚 Smart Publication & Book Management

Scholar-Lite features a powerful **BibTeX Import Engine** located in `scripts/import-bibtex.js`, supporting both **Papers** and **Books**.

### How to Import
1.  **Export BibTeX**: Export your bibliography as `citations.bib` from Zotero, Mendeley, or Google Scholar.
2.  **Place File**: Save `citations.bib` in the project root.
3.  **Run Import**:
    ```bash
    npm run import-bibtex
    ```
4.  **Auto-Classification**: The system automatically classifies entries based on BibTeX type:
    *   `@article`, `@inproceedings`, etc. -> Imported to **Publications** (`src/content/publications`)
    *   `@book` -> Imported to **Books** (`src/content/books`)

### Advanced BibTeX Features

The importer maps BibTeX fields to website elements intelligently:

| BibTeX Field | Website Element | Smart Behavior |
|--------------|-----------------|----------------|
| `cover`/`image` | Cover Image | Auto-detects local images in `src/assets/`. **Highly recommended for books**. |
| `publisher` | Publisher | For books, `publisher` is automatically displayed as the venue. |
| `pdf`/`url`/`file` | PDF Button | Cleans Zotero path formats (e.g., `files/mypaper.pdf`). |
| `code`/`github` | Code Button | Generates a GitHub/Code link button. |
| `website`/`project` | **Project Page** | Generates a Globe icon link to the project homepage. |
| `demo` | **Live Demo** | Generates a "Demo" button (Web App / HuggingFace / Video). |
| `video`/`recording` | **Video** | Generates a Video link button. |
| `slides`/`ppt` | **Slides** | Generates a Slides download button. |
| `award`/`note` | **Badges** | Auto-generates Gold/Blue/Red badges for "Best Paper", "Oral", etc. |

### BibTeX Entry Examples

#### 1. Paper
```bibtex
@article{gpt4,
  title={GPT-4 Technical Report},
  author={OpenAI},
  year={2024},
  journal={ArXiv},
  url={https://arxiv.org/pdf/2303.08774.pdf},
  code={https://github.com/openai/evals},
  cover={../../assets/gpt4-cover.jpg},
  note={Tech Report}
}
```

#### 2. Book
Simply set the entry type to `@book`, and the system will automatically place it in the "Books" section.
```bibtex
@book{deeplearning,
  title={Deep Learning},
  author={Goodfellow, Ian and Bengio, Yoshua and Courville, Aaron},
  publisher={MIT Press},
  year={2016},
  url={http://www.deeplearningbook.org},
  cover={../../assets/book-deep-learning.jpg}
}
```

---

## 🌟 Best Practices

### 📁 Directory Structure
*   **Images**: Store website assets in `src/assets/images/`. Use `.webp` or optimized `.jpg` for better performance.
*   **Team Photos**: Place headshots in `src/assets/team/`. Square aspect ratio (1:1) is recommended.
*   **Content**: All editable content (News, Team, Research info) lives in `src/content/`.

### 📝 Content Management
*   **News**: Add new Markdown files in `src/content/news/`. The filename doesn't matter, but sorting is based on the `date` field.
*   **Team**: Add members in `src/content/team/`. Use `weight` to control display order (lower numbers appear first).
*   **Research Fields**: Add Markdown files in `src/content/research/`. Use `order` field to control display order.
*   **Translations**: Edit `src/i18n/ui.ts` to modify UI text (e.g., navigation menu, buttons) for all supported languages.

### 🎓 More Academic Achievements
Beyond papers and books, the system supports managing other academic achievements. Simply create Markdown files in the corresponding folders.

#### 1. Software Copyrights
*   **Location**: `src/content/softwares/`
*   **Example**:
    ```markdown
    ---
    title: "Intelligent Image Processing System V1.0"
    developers: ["John Doe", "Jane Smith"]
    number: "2023SR123456"
    date: 2023-06-15
    description: "An automated image processing platform based on deep learning."
    ---
    ```

#### 2. Invention Patents
*   **Location**: `src/content/patents/`
*   **Example**:
    ```markdown
    ---
    title: "A Method for Image Recognition Based on Attention Mechanism"
    inventors: ["John Doe", "Bob Johnson"]
    number: "CN102345678B"
    date: 2024-01-20
    status: "Granted" # Options: Granted, Pending, Filed
    ---
    ```

#### 3. Group Honors
*   **Location**: `src/content/honors/`
*   **Example**:
    ```markdown
    ---
    title: "18th Challenge Cup National College Student Extracurricular Academic Science and Technology Works Competition"
    award: "Grand Prize"
    date: 2023-10-30
    year: "2023"
    type: "Challenge Cup"  # Options: Challenge Cup, Internet+, Other
    level: "Special"       # Options: Special, First, Second, Third
    ---
    ```


### 🖼️ Image Optimization
Scholar-Lite automatically optimizes images imported from `src/assets/`.
*   **Avoid**: Putting large images in `public/`.
*   **Prefer**: Importing images in Markdown or Astro components to leverage automatic compression and lazy loading.

---

## 🚢 Deployment

Scholar-Lite is a static site that can be deployed anywhere.

### Recommended Platforms

| Platform | Global Speed | Ease of Use | Cost |
|----------|--------------|-------------|------|
| **Cloudflare Pages** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free |
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free |
| **Netlify** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free |
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐⭐ | Free |

### Cloudflare Pages / Vercel / Netlify
1.  Connect your GitHub/GitLab repository.
2.  **Build Command**: `npm run build`
3.  **Output Directory**: `dist`
4.  Deploy!

### GitHub Pages / GitLab Pages
This template includes CI/CD configurations (`.github/workflows` and `.gitlab-ci.yml`) to automatically build and deploy to GitHub/GitLab Pages on push.

---

<div align="center">

**[Scholar-Lite Team](https://github.com/fjd2004711)**
<br>
*Empowering academic research with modern web technology.*

</div>
