import html from "@/app/icons/html.svg";
import css from "@/app/icons/css.svg";
import js from "@/app/icons/js.svg";
import ts from "@/app/icons/ts.svg";
import scss from "@/app/icons/scss.svg";
import react from "@/app/icons/react.svg";
import redux from "@/app/icons/redux.svg";
import nextIcon from "@/app/icons/next.svg";
import jwt from "@/app/icons/jwt.svg";
import git from "@/app/icons/git.svg";
import mytunes from "@/app/works/mytunes.png";
import nigam from "@/app/icons/nigam.jpg";

export const techStacks: Array<{ src: string; alt: string }> = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: scss, alt: "SCSS" },
  { src: js, alt: "JavaScript" },
  { src: ts, alt: "TypeScript" },
  { src: react, alt: "React" },
  { src: redux, alt: "Redux" },
  { src: nextIcon, alt: "Next.js" },
  { src: jwt, alt: "JWT" },
  // { src: py, alt: "Python" },
  { src: git, alt: "Git" },
];

export const myWorks: Array<{
  title: string;
  description: string;
  link: string;
  image: string;
  stacks: Array<string>;
  websiteLink?: string;
}> = [
  {
    title: "Website",
    description:
      "A static ecommerce website that showcase the cart functionality",
    link: "https://github.com/alishashresthaaa/static-ecommerce-website",
    image: mytunes.src,
    stacks: ["HTML", "SCSS", "Javascript", "Jquery"],
    websiteLink: "https://fe-mytunes.pages.dev/",
  },
];

export const ourTeam: Array<{
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
}> = [
  {
    name: "Alisha Shrestha",
    role: "Frontend Developer",
    image:
      "https://www.shutterstock.com/image-vector/portrait-young-beautiful-hipster-asian-600nw-1562341102.jpg",
    linkedin: "https://www.linkedin.com/in/alishashrestha/",
    description:
      "A passionate frontend developer with a keen interest in building user-friendly web applications.",
  },
  {
    name: "Nigam Bhattarai",
    role: "Backend Developer",
    image:
      "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg",
    linkedin: "https://www.linkedin.com/in/nigambhattarai/",
    description:
      "A dedicated backend developer who loves to create efficient and scalable server-side applications.",
  },
  {
    name: "Sandip Moktan",
    role: "QA Engineer",
    image:
      "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg",
    linkedin: "https://www.linkedin.com/in/sandip-moktan-608248190/",
    description:
      "Detail-oriented QA engineer ensuring product quality and seamless user experience through rigorous testing.",
  },
  {
    name: "Prachan Ghale",
    role: "Mobile App Developer",
    image:
      "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg",
    linkedin: "https://www.linkedin.com/in/prachan-ghale/",
    description:
      "Innovative mobile app developer focused on creating responsive and user-centric mobile applications.",
  },
];
