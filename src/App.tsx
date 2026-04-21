import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import styled from "styled-components";

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

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
    margin: 40px 0 60px 0;
`

export default App
