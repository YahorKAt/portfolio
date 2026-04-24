import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Container} from "../../../components/Container.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";
import {Skill} from "./skill/Skill.tsx";

const mySkillsArray = ["html", "css", "javascript", "react", "redux", "bootstrap", "tailwind", "sass", "git", "greensock", "vscode", "github"];

export const Skills = () => {
    return (
        <StyledSection id='skills'>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                <StyledGrid>
                    {mySkillsArray.map((skill) => (
                        <Skill key={skill} skillName={skill}/>
                    ))}
                </StyledGrid>
            </Container>
        </StyledSection>
    );
};

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 100px;
    overflow: hidden;
`