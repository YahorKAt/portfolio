import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.tsx";

const mySkills = ["html", "css", "js", "react", "redux", "bootstrap", "tailwind", "sass", "git", "greensock", "vscode", "github"];

export const Skills = () => {
    return (
        <StyledSkills id='skills'>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                <StyledGrid>
                    {mySkills.map((skill) => (
                        <Skill key={skill} skillName={skill}/>
                    ))}
                </StyledGrid>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section``

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 100px;
    overflow: hidden;
`