import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about">
            <div className={styles.aboutSection}>

                <div className={styles.aboutTitle}>
                    ABOUT ME
                </div>

                <div className={styles.aboutText}>
                    I am a passionate full-stack developer dedicated to building
                    scalable web applications and efficient relational database
                    systems. With a strong foundation in modern JavaScript frameworks
                    and backend engineering, I focus on writing clean, optimized code
                    that delivers smooth user experiences and robust functionality.
                </div>

                <div className={styles.explore}>
                    Explore
                </div>

                <div className={styles.divider}>
                    -------------------------
                </div>

                <div className={styles.skillsContainer}>
                    <div className={styles.skillBox}>
                        <h2>DESIGN</h2>
                        <p>
                            Creating structured, efficient database schemas and
                            intuitive API architectures to ensure smooth data flow
                            across web applications.
                        </p>
                    </div>

                    <div className={styles.skillBox}>
                        <h2>DEVELOPMENT</h2>
                        <p>
                            Building dynamic, responsive user interfaces using React,
                            backed by fast and secure server-side logic using Node.js
                            and Express.
                        </p>
                    </div>
                </div>

                <div className={styles.databaseBox}>
                    <h2>DATABASE</h2>
                    <p>
                        Designing and optimizing complex MySQL relational databases,
                        writing precise queries, and ensuring data integrity across
                        multi-table systems.
                    </p>
                </div>

                <div className={styles.divider}>
                    -------------------------
                </div>

            </div>
        </section>
    );
}