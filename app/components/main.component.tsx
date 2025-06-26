import Image from "next/image";
import styles from "./main.module.css";
import { myWorks, techStacks } from "../constants";
import { useState } from "react";

interface MainComponentProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
  techStackRef: React.RefObject<HTMLDivElement>;
  myWorksRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const MainComponent = (props: MainComponentProps) => {
  const { aboutMeRef, techStackRef, myWorksRef, contactRef } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setName(data.name as string);
    setEmail(data.email as string);
    setMessage(data.message as string);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response from server:", response);
      
      if (!response.ok) {
        console.error("Network response was not ok:", response.statusText);
        throw new Error("Network response was not ok");
      }

      alert("Message sent successfully!");
      clearForm();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  }
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className={styles.container} ref={aboutMeRef}>
        <h3 className={styles.title}>What I do</h3>
        <p className={styles.subtitle}>
          I`ve been coding for 3 years now and working as a <b>Frontend Developer who focuses on Frontend Architecture, Web Development, & Design Practices.</b>
        </p>
        <p className={styles.subtitle}>I am a team player, design enthusiast and like building user centric applications. I am always looking for new opportunities to learn and grow.</p>
        {/* <p className={styles.subtitle}>
          Currently, I am working on <b>Python, Django, Backend Development, and other similar subjects.</b>
        </p> */}
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
              <a href={work.websiteLink} target="_blank" rel="noopener noreferrer" className={styles.workImageContainer}>
                <Image src={work.image} alt={work.title} className={styles.workImage} width={1000} height={1000} />
              </a>
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
        <h3 className={styles.title}>Build with us</h3>
        <p className={styles.subtitle}>
          Change your vision into reality. If you have an idea or a project in mind, We would love to hear about it. Let’s collaborate and create something amazing together!
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <textarea
            name="message"
            placeholder="Your Idea"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className={styles.textareaField}
          ></textarea>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default MainComponent;
