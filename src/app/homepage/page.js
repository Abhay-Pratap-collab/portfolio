import Header from "../components/Header"
import FirstCompoent from "../components/FirstCompoent"
import Project from "../components/Project"
import About from "../components/About"
import Skill from "../components/Skill"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Homepage() {
    return (
        <div style={{display:'flex',flexDirection:'column',gap:'40px',background:'#EDECEC'}}>

        <Header/>
        <FirstCompoent/>
        <Project/>
        <About/>
        <Skill/>
        <Contact/>
        <Footer/>
        </div>
    )

}