import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
// import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";

const projects = [
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project1.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project2.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project3.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project4.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project5.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: new URL("../../../../src/assets/images/project-cards/project6.webp", import.meta.url).href,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    }
]

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionDescription>Things I`ve built so far</SectionDescription>
            <StyledGrid>
                {projects.map((project, index) => (
                    <Project key={index} {...project}/>
                ))}
            </StyledGrid>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`

`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    gap: 35px;
    justify-items: center;
`