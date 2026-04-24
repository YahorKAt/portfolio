import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <StyledApp id='home'>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </StyledApp>
    )
}

const StyledApp = styled.div``

export default App
