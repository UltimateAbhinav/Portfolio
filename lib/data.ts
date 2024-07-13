import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { url } from "inspector";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor Of Technology",
    location: "New Delhi",
    description:
      "I am pursuing my Bachelor of Technology in Electronics and Communication Engineering from Netaji Subhas University Of Technology, developing a strong foundation in computer science principles and practical application",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Higher Secondary School",
    location: "New Delhi",
    description:
      "I completed my Class XII studies from Mount Carmel School",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Senior Secondary School ",
    location: "New Delhi",
    description:
      "I completed my Class X studies from D.A.V public School",
    icon: React.createElement(FaReact),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Auction Website",
    description:
      " Developed a user-friendly auction platform that enables real-time bidding and effortless item addition, making the auction experience exciting and accessible.",
    tags: ["React", "Express", "MongoDB", "Node"],
    imageUrl: corpcommentImg,
    URL:"https://github.com/UltimateAbhinav/Auction_Website"
  },
  {
    title: "Crypto Tracker DashBoard",
    description:
      "Created an advanced dashboard for tracking cryptocurrency investments, providing real-time updates and insights for informed decision-making.",
    tags: ["React", "Framer Motion", "Chart.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Admin DashBoard",
    description:
      "Built a comprehensive admin dashboard to track emails sent, revenue generated, and geography-based traffic, helping businesses stay on top of their metrics.",
    tags: ["React", "Redux", "Chart.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  "Python",
  // "Django",
  "Framer Motion",
] as const;
