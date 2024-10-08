"use client";
import styles from "./page.module.css";
import About from "./components/about.component";
import Nav from "./components/nav.component";
import MainComponent from "./components/main.component";
import { useRef } from "react";

export default function Home() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const myWorksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.main__section}>
      <section className={styles.left__section}>
        <About />
      </section>
      <section className={styles.center__section}>
        <MainComponent aboutMeRef={aboutMeRef} techStackRef={techStackRef} myWorksRef={myWorksRef} contactRef={contactRef} />
      </section>
      <section className={styles.right__section}>
        <Nav aboutMeRef={aboutMeRef} techStackRef={techStackRef} myWorksRef={myWorksRef} contactRef={contactRef} />
      </section>
    </main>
  );
}
