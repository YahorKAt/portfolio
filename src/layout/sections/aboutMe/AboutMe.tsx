import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {List} from "../../../components/List.tsx";
import {Container} from "../../../components/Container.tsx";

const workExperienceArray = [
    {
        jobPosition: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Web Development Intern",
        company: "IonPixelz Web Solutions",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    },
    {
        jobPosition: "SEO / SEM Specialist",
        company: "HAAPS",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    }
]
const educationExperienceArray = [
    {
        jobPosition: "Bachelor in Electronics & Communication",
        company: "Bangalore Instutute of Technology",

        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Bachelor in Electronics & Communication",
        company: "Bangalore Instutute of Technology",

        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    }
]

export const AboutMe = () => {
    return (
        <StyledSection id='about'>
            <Container>
                <InformationSection>
                    <StyledTitle>About Me</StyledTitle>
                    <StyledText>The Generator App is an online tool that helps you to export ready-made templates ready
                        to work
                        as
                        your future website. It helps you to combine slides, panels and other components and export it
                        as a
                        set of static files: HTML/CSS/JS.
                    </StyledText>

                    <StyledTitle>Work Experience</StyledTitle>
                    <List data={workExperienceArray}/>

                    <StyledTitle>Education</StyledTitle>
                    <List data={educationExperienceArray}/>
                </InformationSection>
                <FigureSection>

                </FigureSection>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.section``

const InformationSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    width: 60%;
`

const StyledTitle = styled.h2`
    font-weight: 700;
    font-size: 2.625rem;
    letter-spacing: -0.01em;
    color: ${theme.colors.titleFont};
`

const StyledText = styled.p`
    font-size: 1.125rem;
`

const FigureSection = styled.div``