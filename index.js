#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import gradient from "gradient-string";

// ---------- HEADER ----------
console.log(
  gradient(["#00c6ff", "#0072ff"])(
    figlet.textSync("Aritra Kumar Bara", {
      font: "Standard",
      horizontalLayout: "default",
    })
  )
);

console.log(
  chalk.gray(
    "Full Stack Developer | React • Next.js • Angular • Node.js\n"
  )
);

// ---------- SUMMARY ----------
const summary = `
Full Stack Developer with 1+ year of experience delivering
scalable, production-grade web applications.
Strong in frontend performance optimization and
backend system design.
`;

console.log(
  boxen(chalk.white(summary.trim()), {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);

// ---------- SKILLS ----------
console.log(chalk.bold.cyan("\n🛠 TECH STACK"));

console.log(
  chalk.white(`
Frontend : React, Next.js 15, Angular 18, Tailwind CSS, shadcn/ui
Backend  : Node.js, Express.js, Prisma, PostgreSQL, MongoDB
Auth     : JWT, Next-Auth, Bcrypt
Realtime : WebRTC, WebSockets, Socket.IO
Tools    : Git, Docker, CI/CD, Jest, Webpack, Vercel
`)
);

// ---------- EXPERIENCE ----------
console.log(chalk.bold.cyan("💼 EXPERIENCE"));

console.log(
  chalk.white(`
Software Developer — Orglens Consultancy Pvt. Ltd. (Remote)
Sep 2024 – Present

• Built an organizational network visualization tool
  adopted by 100K+ professionals

• Delivered a learning platform (quizzes, webinars,
  self-paced courses) for 100K+ users
  Stack: Next.js, Prisma, PostgreSQL

• Optimized REST APIs with JWT auth and DB indexing
  → Response times under 250ms

• Developed Angular 18 + Tailwind dashboards
  with search, pagination, and reports
`)
);

// ---------- PROJECTS ----------
console.log(chalk.bold.cyan("🚀 PROJECTS"));

console.log(
  chalk.white(`
EduPortal — AI-powered Learning Platform
• Self-paced courses, quizzes, dashboards, Razorpay payments
• AI course discovery chatbot (Gemini 2.0 Flash)
• Next.js 15, Prisma, PostgreSQL, Cloudinary

Meetly — WebRTC Video Calling App
• 1-to-1 P2P video calling & screen sharing
• Custom Socket.IO signaling server
• STUN/TURN integration for NAT traversal
`)
);

// ---------- EDUCATION ----------
console.log(chalk.bold.cyan("🎓 EDUCATION"));

console.log(
  chalk.white(`
B.Tech in Computer Science & Engineering
Bengal Institute of Technology
CGPA: 9.15 / 10
`)
);

// ---------- ACHIEVEMENTS ----------
console.log(chalk.bold.cyan("🏆 ACHIEVEMENTS"));

console.log(
  chalk.white(`
• 5⭐ Coder on HackerRank
• Shortlisted for Smart India Hackathon 2022
`)
);

// ---------- LINKS ----------
console.log(chalk.bold.cyan("🔗 LINKS"));

console.log(
  chalk.white(`
GitHub   : https://github.com/ari-12-2000
LinkedIn : https://linkedin.com/in/aritra-kumar-bara-870740200
Email    : arikum12000@gmail.com
`)
);

console.log(chalk.gray("\nRun: npx @aritra-kumar-bara-870740200/resume\n"));
