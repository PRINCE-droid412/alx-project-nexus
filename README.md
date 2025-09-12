# 🗳️ Online Poll System Frontend

## Project Overview

This **Online Poll System** is a comprehensive web application built with **Next.js, TypeScript, Redux, and Tailwind CSS**, where users can create polls, vote, and view live results. The system emphasizes **real-time updates**, **dynamic data visualizations**, and a smooth **user experience**.

---

## 🚀 Features
- ✅ **Poll Creation & Voting** – Create polls with multiple options and vote on active polls.
- 🔄 **Real-Time Results** – Results update live as votes are cast, no refresh needed.
- 📊 **Dynamic Visualizations** – Charts display poll results in a clear and engaging way.
- 📱 **Responsive UI** – Optimized for mobile, tablet, and desktop.
- 🛡️ **Form Validation** – User-friendly error handling for invalid inputs.

---

## 🛠️ Tech Stack
- **[Next.js](https://nextjs.org/)** – Component-based UI and server-side rendering.
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety and maintainable code.
- **[Redux](https://redux.js.org/)** – Global state management.
- **[Tailwind CSS](https://tailwindcss.com/)** – Modern styling and responsive design.
- **[Recharts](https://recharts.org/en-US/)** or **[Chart.js](https://www.chartjs.org/)** – Dynamic data visualizations.

---


## 🧑‍💻 Git Commit Workflow

feat: – New feature (e.g., feat: implement real-time results display)

fix: – Bug fix (e.g., fix: resolve state update bugs in Redux)

style: – UI changes and styling
docs: – Documentation updates


# 📊 Future Improvements

🔐 User authentication (sign up / login).

🌐 Deploy with Vercel.

📤 Shareable poll links with unique IDs.

📈 Advanced analytics dashboard for admins.

## 👨‍💻 Author

### Developed by **Prince Takyi Amaoko ✨**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/PRINCE-droid412)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/prince-takyi-amoako-33ba02256/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://princetechportfolio.framer.wiki/)

 
---

## **Step 3: Scaffolding the Project**
Run this in your terminal:


---

## ⚙️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/online-poll-system.git
cd online-poll-system
npm install
npm run dev




## 📂 Project Structure

```bash
online-poll-system/
├── components/              # Reusable UI components
│   ## 📂 Project Structure

```bash
online-poll-system/
├── components/              # Reusable UI components
│   ├── PollForm.tsx         # Component for creating polls
│   ├── PollList.tsx         # Displays list of available polls
│   ├── PollResultsChart.tsx # Chart visualization of poll results
│   ├── Navbar.tsx           # Navigation bar component
│   └── Button.tsx           # Reusable button component
│
├── features/                # Redux slices and state logic
│   ├── pollSlice.ts         # Handles poll creation and voting state
│   ├── voteSlice.ts         # Manages votes and results updates
│   └── userSlice.ts         # (Optional) Manages user state
│
├── pages/                   # Next.js pages
│   ├── index.tsx            # Homepage - shows active polls
│   ├── create.tsx           # Page for creating a poll
│   └── polls/               # Dynamic poll routes
│       └── [id].tsx         # Single poll details & results
│
├── pages/api/               # API routes
│   ├── polls.ts             # Endpoint for polls
│   └── votes.ts             # Endpoint for votes
│
├── public/                  # Static assets (logos, images, icons)
│
├── styles/                  # Styling files
│   ├── globals.css          # Global styles
│   └── tailwind.css         # Tailwind base styles
│
├── utils/                   # Utility functions
│   ├── apiClient.ts         # Axios/fetch wrapper for API calls
│   └── validators.ts        # Form validation helpers
│
├── .eslintrc.json           # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies & scripts
└── README.md                # Project documentation

├── features/                # Redux slices and state logic
│   ├── pollSlice.ts         # Handles poll creation and voting state
│   ├── voteSlice.ts         # Manages votes and results updates
│   └── userSlice.ts         # (Optional) Manages user state
│
├── pages/                   # Next.js pages
│   ├── index.tsx            # Homepage - shows active polls
│   ├── create.tsx           # Page for creating a poll
│   └── polls/               # Dynamic poll routes
│       └── [id].tsx         # Single poll details & results
│
├── pages/api/               # API routes
│   ├── polls.ts             # Endpoint for polls
│   └── votes.ts             # Endpoint for votes
│
├── public/                  # Static assets (logos, images, icons)
│
├── styles/                  # Styling files
│   ├── globals.css          # Global styles
│   └── tailwind.css         # Tailwind base styles
│
├── utils/                   # Utility functions
│   ├── apiClient.ts         # Axios/fetch wrapper for API calls
│   └── validators.ts        # Form validation helpers
│
├── .eslintrc.json           # ESLint configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies & scripts
└── README.md                # Project documentation
