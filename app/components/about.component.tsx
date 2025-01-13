import Image from "next/image";
import styles from "./about.module.css";
import linkedin from "@/app/icons/linkedin.png";
import github from "@/app/icons/github.png";
import email from "@/app/icons/email.png";
import code from "@/app/icons/code.png";

const About = () => {
  return (
    <>
      <h1 className={styles.logo}>A.</h1>
      <div className={styles.about}>
        <h3 className={styles.subtitle}>Hello there, I am</h3>
        <h1 className={styles.title}>
          <span className={styles.light}>Alisha</span>
          <span className={styles.secondary}>Shrestha.</span>
        </h1>
        <p className={styles.details}>
          <span className={styles.quote}>Thank you!</span> For finding me here.
        </p>
        <p className={styles.details}>Highly motivated towards Frontend Development.</p>
        <p className={styles.details}>Experienced in Frontend Architecture, Javascript, and Design Concepts.</p>
        <p className={styles.details}>
          Download my resume{" "}
          <a className={styles.secondaryText} href="https://drive.google.com/uc?export=download&id=1BvTfm1kkoVjsJvAg8Wm4P-lFViE5bg1n" target="_blank">
            here
          </a>
        </p>

        <div className={styles.divider}></div>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/alishashrestha/" target="_blank">
            <Image src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/alishashresthaaa" target="_blank">
            <Image src={github} alt="Github" />
          </a>
          <a href="https://leetcode.com/u/alishashrestha/" target="_blank">
            <Image src={code} alt="Leetcode" />
          </a>
          <a href="mailto:alishashresthaaa0@gmail.com">
            <Image src={email} alt="Email" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
