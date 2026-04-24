import {SectionDescription} from "../../../components/SectionDescription.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Project} from "./project/Project.tsx";
import {Container} from "../../../components/Container.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";

const projects = [
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project1.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project1.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project2.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project2.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project3.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project3.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project4.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project4.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project5.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project5.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    },
    {
        imageSrc: [new URL("../../../../src/assets/images/project-cards/default/project6.webp", import.meta.url).href, new URL("../../../../src/assets/images/project-cards/2x/project6.webp", import.meta.url).href],
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        technologies: ["HTML", "JavaScript", "SASS", "React"],
        link: ["#1", "#2"]
    }
]

export const Projects = () => {
    return (
        <StyledSection id='projects'>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionDescription>Things I`ve built so far</SectionDescription>
                <StyledGrid>
                    {projects.map((project, index) => (
                        <Project key={index} {...project}/>
                    ))}
                </StyledGrid>
            </Container>
        </StyledSection>
    );
};

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 365px));
    gap: 35px;
    justify-content: center;
`