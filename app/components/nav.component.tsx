import styles from "./nav.module.css";

interface NavComponentProps {
  aboutMeRef: React.RefObject<HTMLDivElement>;
  ourTeamRef: React.RefObject<HTMLDivElement>;
  techStackRef: React.RefObject<HTMLDivElement>;
  myWorksRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Nav = (props: NavComponentProps) => {
  const { aboutMeRef, ourTeamRef, techStackRef, myWorksRef, contactRef } = props;
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navContainer}>
      <button className={styles.navItem} onClick={() => scrollToSection(aboutMeRef)}>
        About Us
      </button>
      <button className={styles.navItem} onClick={() => scrollToSection(ourTeamRef)}>
        Our Team
      </button>
      <button className={styles.navItem} onClick={() => scrollToSection(techStackRef)}>
        Tech Stack
      </button>
      <button className={styles.navItem} onClick={() => scrollToSection(myWorksRef)}>
        Projects
      </button>
      <button className={styles.navItem} onClick={() => scrollToSection(contactRef)}>
        Contact
      </button>
    </div>
  );
};

export default Nav;
