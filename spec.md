# Portfolio Website Specification (MVP)

## 1. Overview
[cite_start]This project is a personal portfolio website for Patrick  O'Neill[cite: 1]. The goal is to highlight software engineering skills, professional experience, and projects. 

## 2. Tech Stack
* **Framework:** Next.js (Latest Version, App Router)
* **Language** Typescript (don't use any to define types, actually implement the correct type)
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Icons:** Lucide React
* **Email Handling:** Resend (or standard Next.js API route using Nodemailer)
* **GitHub Stats:** GitHub REST API or `react-github-calendar` package

## 3. Global Layout & Navigation
* **Navbar:** Fixed at the top. Links to Home (`/`), Experience (`/experience`), Projects (`/projects`), and Contact (`/contact`).
* [cite_start]**Footer:** Minimal footer containing links to GitHub (https://github.com/patoneill24) [cite: 2] [cite_start]and LinkedIn (in/p-oneill)[cite: 2].
* **Theme:** Dark mode by default using Next Themes and shadcn/ui configuration.

## 4. Page Specifications

### 4.1. Landing Page (`/`)
* [cite_start]**Hero Section:** Introduction with name (Patrick  O'Neill) [cite: 1][cite_start], title (Full-Stack Developer) [cite: 5][cite_start], contact email (patrick_oneill13@outlook.com)[cite: 2], and currently working at DataThink.io (add a brain lucid svg).
* [cite_start]**GitHub Stats Section:** * Fetch and display a contribution graph (similar to GitHub's contribution grid) using the GitHub API for username `patoneill24`[cite: 2].
    * Display a small chart or text summary of top programming languages used.
* [cite_start]**Skills/Tools Section:** Display an animated or responsive grid of logos for the following tools: Python, FastAPI, PostgreSQL, Git, Next.JS, React, Typescript, and Docker[cite: 4, 18].

### 4.2. Experience Page (`/experience`)
Render a list of `Card` components (from shadcn/ui) for the following roles:

* [cite_start]**DataThink.io - Full-Stack Web Developer** [cite: 5, 6]
    * [cite_start]*Dates:* April 2025 - Present [cite: 7]
    * *Details:*
        * [cite_start]Built and deployed software from the ground up for a local school district, improving communication and student monitoring for over 400 staff and faculty. [cite: 8]
        * [cite_start]Spearheaded full-stack software development efforts for three diverse client applications, leveraging Next.JS and Python (FastAPI) to deliver robust and scalable solutions. [cite: 9]
        * [cite_start]Ensured production readiness by utilizing testing software (Playwright) and maintaining critical systems, consistently resolving user issues within a 24-hour service level agreement (SLA). [cite: 10]
    * *Badges:* Next.JS, Python, FastAPI, Playwright

* [cite_start]**OneHealth - Full-Stack Web Developer** [cite: 15]
    * [cite_start]*Dates:* January 2025 - April 2025 [cite: 16]
    * *Details:*
        * [cite_start]Managed the end-to-end Software Development Life Cycle (SDLC) for a user authentication application, utilizing React, Express.JS, and PostgreSQL for robust database management. [cite: 17]
        * [cite_start]Optimized deployment efficiency by introducing Docker containerization to the development team, streamlining environment setup and reducing potential database hosting costs by up to $20/month. [cite: 18]
        * [cite_start]Architected system designs, including creating UI mockups with Figma and defining RESTful APIs with Swagger, ensuring clear technical documentation and alignment. [cite: 19]
    * *Badges:* React, Express.JS, PostgreSQL, Docker, Figma, Swagger

### 4.3. Projects Page (`/projects`)
Render a grid of `Card` components (from shadcn/ui) for the following projects:

* [cite_start]**Take-Off Genie** [cite: 11]
    * [cite_start]*Date:* January 2026-Present[cite: 12]
    * [cite_start]*Description:* Collaborating with small team of developers to develop a IOS Application with DotNet on the backend for general aviation pilots. [cite: 13] [cite_start]
    Implementing Machine Learning Model to predict a safe take off distance based on current weather conditions and weight of the aircraft. [cite: 14]
    * *Badges:* C#, Python, Machine Learning 


* [cite_start]**Bracket-IQ** [cite: 11]
    * [cite_start]*Date:* December 2025-January 2026[cite: 12]
    * [cite_start]*Description:* Developed a Next.JS application to create a platform for users to create a College Football Playoff Bracket and compete on a global leader board. [cite: 13] [cite_start]Integrating a College Football API to pull down results of games and compare it with people's predictions to score and rank their bracket[cite: 14]
    * *Badges:* Next.JS, MongoDB, Resend

* [cite_start]**Bracket-IQ** [cite: 11]
    * [cite_start]*Date:* December 2025-January 2026[cite: 12]
    * [cite_start]*Description:* Developed a Next.JS application to create a platform for users to create a College Football Playoff Bracket and compete on a global leader board. [cite: 13] [cite_start]Integrating a College Football API to pull down results of games and compare it with people's predictions to score and rank their bracket[cite: 14]
    * *Badges:* Next.JS, MongoDB, Resend

* [cite_start]**Olin AI-Interviewer (1st Place Hackathon Winner)** [cite: 11]
    * [cite_start]*Date:* October 2025 [cite: 12]
    * [cite_start]*Description:* Developed a Next.JS application utilizing the Gemini API's text-to-speech capabilities to create a live AI interview simulation. [cite: 13] [cite_start]Collaborated on a team of three to design and deliver a highly functional product. [cite: 14]
    * *Badges:* Next.JS, Gemini API, Hackathon

* **M&M and Skittles Color Identifier**
    * *Description:* An AI-driven computer vision project utilizing a YOLO model. Trained on custom video datasets to accurately identify, track, and annotate the colors of M&Ms and Skittles in real-time. 
    * *Badges:* Python, YOLO, Machine Learning, Computer Vision

### 4.4. Contact Page (`/contact`)
* **Form:** Implement a contact form using shadcn/ui `Form`, `Input`, `Textarea`, and `Button` components.
* **Fields:** Name, Email, Subject, Message.
* [cite_start]**Functionality:** Upon submission, the form should hit a Next.js Server Action or API route to send an email to `patrick_oneill13@outlook.com`[cite: 2]. Show a success toast notification upon successful delivery.