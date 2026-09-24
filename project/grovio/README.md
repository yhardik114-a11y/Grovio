# Electron.js Workshop — Grovio

### CLYXN × SORXN | Nirmala College 2026

A hands-on desktop application development workshop using
**Electron.js, Next.js, React.js and Node.js**

![Electron](https://img.shields.io/badge/Electron-43.4.0-47848F?style=for-the-badge&logo=electron&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.3.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Workshop](https://img.shields.io/badge/Workshop-Nirmala_College_2026-orange?style=flat-square)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)
![Repository](https://img.shields.io/badge/Repository-Public-brightgreen?style=flat-square)
![Updates](https://img.shields.io/badge/Updates-After_Every_Session-blue?style=flat-square)

---

## About the Workshop

This repository contains the source code, examples, and session-wise development work for the **CLYXN × SORXN Electron.js Workshop at Nirmala College 2026**.

The workshop follows a project-based approach where students progressively build **Grovio**, a desktop application developed using modern web technologies and Electron.js.

---

## About Grovio

**Grovio** is the primary application developed throughout the workshop.

The project demonstrates how a modern Next.js application can be integrated with Electron.js and executed as a desktop application.

### Technology Stack

| Technology   | Purpose                                    |
| ------------ | ------------------------------------------ |
| JavaScript   | Application programming language           |
| React.js     | Component-based user interface             |
| Next.js      | Application framework and structure        |
| Tailwind CSS | User interface styling                     |
| Node.js      | JavaScript runtime and package environment |
| Electron.js  | Desktop application environment            |
| Supabase     | Backend and database integration           |

---

## Project Architecture

```
Grovio
│
├── Next.js
│   ├── Pages
│   ├── Components
│   ├── Application Logic
│   └── User Interface
│
├── Electron.js
│   ├── Main Process
│   ├── BrowserWindow
│   └── Preload Script
│
└── Supabase
    ├── Database
    └── Backend Services
```

Next.js is responsible for building the application interface.

Electron.js provides the desktop environment in which the Next.js application runs.

Supabase is integrated as the backend and database layer.

---

## Current Project Structure

```
grovio/
│
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│
├── electron/
│   ├── main.js
│   └── preload.js
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Prerequisites

Before starting, ensure the following software is installed:

![VS Code](https://img.shields.io/badge/VS_Code-Required-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-Required-F05032?style=flat-square&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)

Verify Node.js and npm:

```bash
node -v
npm -v
```

Verify Git:

```bash
git --version
```

---

## Clone the Repository

```bash
git clone https://github.com/yhardik114-a11y/Grovio.git
cd Grovio
code .
```

---

## Enter the Grovio Project

```bash
cd project/grovio
```

---

## Getting Started (Grovio Frontend)

This is the Grovio frontend, built with [Next.js](https://nextjs.org).

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font).

The Electron development environment additionally uses:

```bash
npm install --save-dev electron concurrently wait-on
```

### Development Packages

| Package        | Purpose                                              |
| -------------- | ----------------------------------------------------- |
| `electron`     | Runs Grovio as a desktop application                 |
| `concurrently` | Runs Next.js and Electron together                   |
| `wait-on`      | Waits for the Next.js server before Electron starts  |

---

## Run Grovio (Full Desktop App)

```bash
npm run dev
```

```
npm run dev
     |
     v
Next.js Development Server
     |
     v
http://localhost:3000
     |
     v
wait-on
     |
     v
Electron
     |
     v
Grovio Desktop Application
```

One command starts both the Next.js development server and the Electron desktop application.

---

## Electron Configuration

### Main Process

Located at `electron/main.js`. It creates the Grovio desktop window and loads the Next.js application.

```javascript
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);
```

### Preload Script

Located at `electron/preload.js`. It provides a controlled bridge between Electron and the application interface.

```javascript
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  version: process.versions.electron,
});
```

---

## Package Configuration

```json
"main": "electron/main.js"
```

```json
"dev": "concurrently \"next dev\" \"wait-on http://localhost:3000 && electron .\""
```

---

## Workshop Progress

| Session    | Topics                                          | Status |
| ---------- | ------------------------------------------------ | ------ |
| Session 01 | Setup, GitHub and Next.js Project Setup         | ![Completed](https://img.shields.io/badge/Completed-brightgreen?style=flat-square) |
| Session 02 | Electron Setup, Main Process and Preload Script | ![Completed](https://img.shields.io/badge/Completed-brightgreen?style=flat-square) |
| Session 03 | Grovio Development and Integration              | ![Completed](https://img.shields.io/badge/Completed-brightgreen?style=flat-square) |

All workshop sessions are complete, and Grovio runs as a fully working Electron desktop application.

---

## Updating the Project

```bash
git pull origin main
cd project/grovio
npm install
npm run dev
```

---

## Essential Git Commands

```bash
git status
git pull origin main
code .
```

---

## Learn More

To learn more about the tools used in this project:

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial
- [Electron.js Documentation](https://www.electronjs.org/docs/latest)
- [Supabase Documentation](https://supabase.com/docs)

The [Next.js GitHub repository](https://github.com/vercel/next.js) is also open to feedback and contributions.

---

## Troubleshooting

### Node.js or npm is not detected

```bash
node -v
npm -v
```

If the commands are not available, verify the Node.js installation and restart the terminal.

### Dependencies are missing

```bash
npm install
```

### Electron does not start

First verify that Next.js starts correctly:

```bash
npx next dev
```

Check `http://localhost:3000`, then stop the server and run:

```bash
npm run dev
```

### Local Repository is Outdated

```bash
git pull origin main
cd project/grovio
npm install
npm run dev
```

---

## Deployment Note

The Next.js frontend alone can also be deployed independently (e.g. via [Vercel](https://vercel.com/new)) if a web-only version of Grovio is needed, separate from the Electron desktop build. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.

---

**Electron.js Workshop — Nirmala College 2026**

### CLYXN × SORXN

![Electron.js](https://img.shields.io/badge/Built_with-Electron.js-47848F?style=flat-square&logo=electron&logoColor=white)
![Next.js](https://img.shields.io/badge/Powered_by-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)

**Learn. Build. Ship.**
