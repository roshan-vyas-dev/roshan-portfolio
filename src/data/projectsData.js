import codeBuddyImage from "../assets/projects/codebuddy.png";


const projectsData = [
  {
    id: 1,
    title: "Study Room",
    description:
      "A real-time virtual study room where users can join rooms, track study sessions, and view a weekly leaderboard.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    github: "#",
    liveDemo: "#",
    image: "",
  },
  {
    id: 2,
    title: "CodeBuddy",
    description:
      "A full-stack MERN application that allows users to create, organize, edit, and manage code snippets securely with JWT authentication and a responsive user interface.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Groq API",
      "Vercel",
      "Render"
    ],
    github: "https://github.com/roshan-vyas-dev/codeBuddy",
    liveDemo: "https://code-buddy-gules-eight.vercel.app",
    image: codeBuddyImage,
  },
];

export default projectsData;