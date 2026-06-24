import styles from "./Header.module.css"
export default function Header() {
    return (

        <div className={styles.maindiv}>




            <p className={styles.font}>
                <a href="#about">About Me</a>
            </p>
            <p className={styles.font}>
               <a href="#skill">Skill</a>
            </p>
            <div style={{ width: '150px', height: '40px', borderRadius: '10px', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex' ,marginRight:'30px'}}>
                <div style={{ color: 'black', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>


                    <p style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontOpticalSizing: 'auto',
                        fontWeight: 500,
                        fontStyle: 'normal',
                    }}>
                         <a href="#contact">Contact</a>
                    </p>
                </div>
            </div>



                   

        </div>)
}