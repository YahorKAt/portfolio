import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {SectionDescription} from "../../../components/SectionDescription.tsx";
// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";

const mySkills = ["html", "css", "js", "react", "redux", "bootstrap", "tailwind", "sass", "git", "greensock", "vscode", "github"];

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionDescription>Technologies I’ve been working with recently</SectionDescription>

            <StyledGrid>
                {mySkills.map((skill) => (
                    <Skill key={skill} skillName={skill}/>
                ))}
            </StyledGrid>
            {/*<FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>*/}
            {/*    {mySkills.map((skill) => (*/}
            {/*        <Skill key={skill} skillName={skill}/>*/}
            {/*    ))}*/}
            {/*</FlexWrapper>*/}
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 105px;
    justify-items: center;
    align-items: center;
`