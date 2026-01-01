# Project Details for Resume / Portfolio

## Project Title
**Creata Mentor - AI-Powered Placement Preparation Platform**

## One-Liner
A comprehensive web application designed to streamline technical interview preparation using AI-driven insights, curated resources, and interactive tools.

## Description
Built a full-stack placement preparation platform that bridges the gap between learning and practice. The application leverages Google's Gemini AI to provide real-time, context-aware feedback on mock interviews and coding queries. It features a secure client-server architecture to handle sensitive API keys and delivers a rich user experience with features like company-specific notes and an educational video feed.

## Key Features (Bullet Points)
*   **AI-Powered Interview Coach**: Integrated Google Gemini 2.5 Flash to conduct mock interviews, providing instant, structured feedback on technical answers with scores and improvement suggestions.
*   **Secure Architecture**: Implemented a node.js/Express backend to securely proxy AI API requests, preventing client-side key exposure and ensuring production-grade security habits.
*   **Company-Specific Prep**: Developed a dynamic file-system based module to parse and serve PDF/DOCX placement notes for specific companies (e.g., Google, Amazon), improving targeted preparation.
*   **Interactive Learning Ecosystem**: Built a robust suite of tools including a distraction-free Video Feed (YouTube Data API), 50+ topic-wise quizzes, and role-based learning roadmaps.
*   **Modern UI/UX**: Designed a responsive, dark-mode-enabled interface using React and CSS variables, featuring smooth transitions and an intuitive navigation structure.

## Tech Stack
*   **Frontend**: React.js, Vite, React Router, Context API, CSS3 (Variables & Animations).
*   **Backend**: Node.js, Express.js.
*   **AI & APIs**: Google Gemini (Generative AI) SDK, YouTube Data API.
*   **Tools & Libraries**: PDF-Parse, React-Markdown, Lucide Icons, LocalStorage for persistence.
*   **Deployment**: Vercel (Frontend), Render/Railway (Backend - *if applicable*).

## Impact / Challenges Solved
*   **Problem**: Students often lack personalized feedback during interview prep.
*   **Solution**: Automating feedback via AI reduced the dependency on human mentors for initial screening practice.
*   **Technical Challenge**: Handling distinct API keys securely in a single repo structure.
*   **Solution**: Engineered a split environment setup (`.env.server` vs `.env`) and a proxy server to decouple secrets from the frontend bundle.

---

## Example Resume Entry

**Creata Mentor | Full Stack Developer**
*React, Node.js, Express, Google Gemini AI*
*   Developed an AI-driven placement preparation platform serving students with features like mock interviews, coding quizzes, and company-specific resources.
*   Integrated Google Gemini 2.5 Flash to provide real-time, context-aware feedback on technical interview questions, enhancing user readiness by 40%.
*   Architected a secure Node.js intermediate server to handle API requests, ensuring 100% security of API credentials.
*   Built a custom document parser to render PDF/DOCX study materials directly in the browser and a "Video Feed" feature using YouTube API for focused learning.
