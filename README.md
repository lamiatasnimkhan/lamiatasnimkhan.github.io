# Academic Portfolio — Lamia Tasnim Khan
### Prospective Fall 2027 Ph.D. Applicant | Computer Science & Artificial Intelligence

This repository contains the complete academic portfolio and research website for **Lamia Tasnim Khan** (Computer Science & Engineering Graduate from CUET, Research Assistant at Elite Research Lab, Junior Software Engineer at OMUKK), prepared for **Fall 2027 Ph.D. Applications** in Multimodal Learning, Large Language Models, AI Agents & Memory, and Explainable Medical AI.

The design features a professional academic layout utilizing classic serif typography (**Times New Roman**), an independently scrollable sidebar, dark/light theme switching, and interactive publication tools.

---

## Key Highlights

1. **Academic Background:**
   - **B.Sc. in Computer Science and Engineering**, Chittagong University of Engineering and Technology (CUET), CGPA: **3.79 / 4.00**.
   - **Research Assistant**, Elite Research Lab (supervised by [Md. Kishor Morol](https://scholar.google.com/citations?user=pjn3jg4AAAAJ&hl=en), CEO of Elite Research Lab, AI Safety Researcher at Meta, Incoming Researcher at Anthropic).
   - **Junior Software Engineer**, OMUKK (from October 2026).
   - **Undergraduate Researcher**, CUET NLP Lab (supervised by Prof. Dr. Mohammed Moshiul Hoque while studying at CUET).
2. **Publications & Manuscripts:**
   - **1st Place Global Winner:** LT-EDI@LDK 2025 (*CUET_320@LT-EDI-2025: A Multimodal Approach for Misogyny Meme Detection in Chinese Social Media*).
   - **Published Paper:** SemEval-2026 Task 10 (*CUET320: Few-Shot Large Language Models for Psycholinguistic Marker Extraction and Conspiracy Detection*).
   - **Published Paper:** SemEval-2026 Task 1 (*CUETClashing: Multilingual Joke Generation Under Lexical and Topical Constraints Using Small Instruction-Tuned LLMs*).
   - **Published IEEE Conference Paper:** ICTEST 2025 (*Brainchild: An Election and Voter Assistant Smart Mobile Application with Election Fraud Detection*).
   - **4 Working Manuscripts in Preparation:** Bengali Comic VLM benchmark (*Who Said What?*), Deceptive Bangla SMS Stylometrics, Causal Identifiability of Memory Failures in LLM Agents, and Multimodal Deep Learning for Parkinson's Disease.
   - Direct link to [Google Scholar](https://scholar.google.com/citations?user=4jSQnsoAAAAJ&hl=en) for publication records.
3. **Interactive Features:**
   - Filterable tabs: `All`, `Refereed & Published`, `Working Manuscripts`, `Multimodal AI`, `LLM & Reasoning`, `Medical AI`.
   - Collapsible abstract accordion.
   - One-click BibTeX citation copying with toast notification.
   - Independently scrollable left sidebar with profile, verified contacts, and quick links.
   - Dark / Light mode toggle.
4. **Honors & Awards Spotlight:**
   - 1st Place (Global Winner) — LT-EDI@LDK 2025 International Shared Task.
   - Finalist (Top 7 Teams Worldwide) — HackCSB 2024 International Hackathon.
   - Finalist — IEEE Computer Society CUET Intra Machine Learning Contest 2025.
   - Finalist — Nodescape Multi-stage Hackathon 2025.
   - HSC Higher Secondary Merit Board Scholarship, Government of Bangladesh.

---

## Quick Start: View & Test Locally

You can preview this website locally without installing Ruby, Jekyll, or Hugo!

### Option 1: Open Directly in Your Browser
Double-click `index.html` in file explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Run with Python (Recommended)
Open a terminal in this folder and run:
```bash
python -m http.server 8080
```
Then visit [http://localhost:8080](http://localhost:8080) in your web browser.

---

## Deploy to GitHub Pages (Free Hosting)

To deploy your portfolio live at `https://lamiatasnimkhan.github.io`:

1. Create a public repository on GitHub named:
   ```
   lamiatasnimkhan.github.io
   ```
2. In this folder, initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Update Lamia Tasnim Khan Academic Portfolio"
   git branch -M main
   git remote add origin https://github.com/lamiatasnimkhan/lamiatasnimkhan.github.io.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch** &rarr; Branch: `main` / `root`.
4. Your website will be live at `https://lamiatasnimkhan.github.io` in ~1-2 minutes!

---

## Repository Structure

```text
Lamia Portfolio/
├── index.html                      # Primary modern academic portfolio website
├── README.md                       # Documentation & deployment guide
├── _config.yml                     # Jekyll academic configuration for GitHub Pages
├── assets/
│   ├── css/
│   │   ├── academic-theme.css      # Times New Roman font styling, dark/light theme, scrollable sidebar
│   │   └── academicons.min.css     # Academic icons (Google Scholar, etc.)
│   └── js/
│       └── academic-portfolio.js   # Filters, BibTeX copy, abstract toggles, theme switch
├── files/
│   ├── Lamia_Tasnim_Khan_CV.pdf    # Official Academic CV (PDF)
│   └── Lamia_Tasnim_Khan_Academic_CV.tex # LaTeX CV source file
├── images/
│   ├── profile.png                 # Profile portrait / avatar
│   └── profile.jpg
├── _pages/                         # Jekyll markdown pages (AcademicPages compatible)
│   ├── about.md                    # Main bio & academic profile
│   ├── cv.md                       # Academic CV page
│   ├── awards.md                   # Dedicated Honors & Awards page
│   ├── service.md                  # Academic service & leadership
│   └── publications.html           # Jekyll publication archive
├── _publications/                  # Individual publication markdown files with BibTeX
├── _portfolio/                     # Technical & research projects
├── _posts/                         # Research milestones & news updates
└── _data/
    └── navigation.yml              # Header navigation links
```

---

&copy; 2026 Lamia Tasnim Khan. All rights reserved.
