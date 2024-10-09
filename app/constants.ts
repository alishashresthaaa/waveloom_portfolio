import html from "@/app/icons/html.svg";
import css from "@/app/icons/css.svg";
import js from "@/app/icons/js.svg";
import ts from "@/app/icons/ts.svg";
import py from "@/app/icons/py.svg";
import scss from "@/app/icons/scss.svg";
import react from "@/app/icons/react.svg";
import redux from "@/app/icons/redux.svg";
import nextIcon from "@/app/icons/next.svg";
import jwt from "@/app/icons/jwt.svg";
import git from "@/app/icons/git.svg";
import one from "@/app/icons/1.jpg";

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
  { src: py, alt: "Python" },
  { src: git, alt: "Git" },
];

export const myWorks: Array<{ title: string; description: string; link: string; image: string; stacks: Array<string> }> = [
  {
    title: "Website",
    description: "An multipage website that showcase the playlist of songs.",
    link: "github.com",
    image: one.src,
    stacks: ["HTML", "SCSS", "Javascript", "Jquery"],
  },
  {
    title: "E-commerce",
    description: "An e-commerce website that sells various products.",
    link: "github.com",
    image: one.src,
    stacks: ["React", "Redux", "TypeScript", "SCSS"],
  },
  {
    title: "Blog",
    description: "A blog website where users can read and write articles.",
    link: "github.com",
    image: one.src,
    stacks: ["React", "Redux", "TypeScript", "SCSS"],
  },
  {
    title: "Social Media",
    description: "A social media website where users can connect with each other.",
    link: "github.com",
    image: one.src,
    stacks: ["React", "Redux", "TypeScript", "SCSS"],
  },
];
