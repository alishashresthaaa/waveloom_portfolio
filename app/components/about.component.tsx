import email from "@/app/icons/email.png";
import linkedin from "@/app/icons/linkedin.png";
import Image from "next/image";
import styles from "./about.module.css";
import logo from "@/app/icons/logo.svg";

const About = () => {
  return (
    <>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.about}>
        <h3 className={styles.subtitle}>Hello there, We are</h3>
        <h1 className={styles.title}>
          <span className={styles.light}>Waveloom</span> <br />
          <span className={styles.secondary}></span>
        </h1>
        <p className={styles.details}>
          <span className={styles.quote}>Thank you!</span> For finding us here.
        </p>
        <p className={styles.details}> By combining infrastructure automation with continuous performance analysis, Waveloom created a system where applications dynamically adjust their own hosting requirements without human intervention.</p>
        <p className={styles.details}>
          <span className={styles.quote}>We are</span> a team of passionate developers who love to create beautiful and functional web applications. We believe in the power of technology to solve real-world problems and make life easier for everyone.{" "}
        </p>
        <div className={styles.divider}></div>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/" target="_blank">
            <Image src={linkedin} alt="Linkedin" />
          </a>
          <a href="mailto:waveloom@gmail.com">
            <Image src={email} alt="Email" />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
