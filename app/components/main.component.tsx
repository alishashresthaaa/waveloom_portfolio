import Image from "next/image";
import styles from "./main.module.css";
import { myWorks, techStacks } from "../constants";

interface MainComponentProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
  techStackRef: React.RefObject<HTMLDivElement>;
  myWorksRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const MainComponent = (props: MainComponentProps) => {
  const { aboutMeRef, techStackRef, myWorksRef, contactRef } = props;

  return (
    <>
      <div className={styles.container} ref={aboutMeRef}>
        <h3 className={styles.title}>What I do</h3>
        <p className={styles.subtitle}>
          I`ve been coding for 3 years now and working as a <b>Frontend Developer who focuses on Frontend Architecture, Web Development, & Design Practices.</b>
        </p>
        <p className={styles.subtitle}>
          Currently, I am working on <b>Python, Django, Backend Development, and other similar subjects.</b>
        </p>
      </div>

      <div className={styles.container} ref={techStackRef}>
        <h3 className={styles.title}>My Tech Stacks</h3>
        <p className={styles.subtitle}>Mastery is achieved through curiosity and persistence. I thrive on exploring new technologies and perfecting the ones I use daily.</p>
        <div className="icons-flex">
          {techStacks.map((tech) => (
            <Image key={tech.alt} src={tech.src} alt={tech.alt} className={styles.techIcons} />
          ))}
        </div>
      </div>

      <div className={`${styles.container} ${styles.myWorks}`} ref={myWorksRef}>
        <h3 className={styles.title}>Some of my works</h3>
        <p className={styles.subtitle}>I believe that you learn the most when you code for fun and not for knowledge. Check out some of the works that I have done.</p>
        <div className={styles.workList}>
          {myWorks.map((work, index) => (
            <div key={work.title} className={styles.workContainer}>
              <div className={styles.workImageContainer}>
                <Image src={work.image} alt={work.title} className={styles.workImage} width={1000} height={1000} />
              </div>
              <div className={styles.workDetails}>
                <h4 className={styles.workTitle}>
                  <span className={styles.workIndex}>#{index + 1 > 9 ? index + 1 : `0${index + 1}`} </span>
                  {work.title}
                </h4>
                <div className={styles.workStacks}>
                  {work.stacks.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
                <p className={styles.workDescription}>{work.description}</p>
                <a href={work.link} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  View on Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container} ref={contactRef}>
        <h3 className={styles.title}>Get in touch</h3>
        <p className={styles.subtitle}>
          I like talking to people with similar interests. Coding, music, sitcoms, or random stuff. So feel free to send me an{" "}
          <a href="mailto:alishashresthaaa0@gmail.com" className={styles.secondaryText}>
            email.
          </a>
        </p>
      </div>
    </>
  );
};

export default MainComponent;
