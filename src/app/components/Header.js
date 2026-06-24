
import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.maindiv}>
            <p className={styles.font}>
                <a href="#about">About Me</a>
            </p>

            <p className={styles.font}>
                <a href="#skill">Skill</a>
            </p>

            <div className={styles.contactBtn}>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}