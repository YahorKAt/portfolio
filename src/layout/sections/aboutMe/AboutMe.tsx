import styled from "styled-components";
import {Item} from "./Item.tsx";

const workExperienceArray = [
    {
        position: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Full Time"
    },
    {
        position: "Web Development Intern",
        company: "IonPixelz Web Solutions",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    },
    {
        position: "SEO / SEM Specialist",
        company: "HAAPS",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    }
]
const educationExperienceArray = [
    {
        position: "Bachelor in Electronics & Communication",
        company: "Bangalore Instutute of Technology",
        location: "Bengaluru",
        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    }
]

export const AboutMe = () => {
    return (
        <StyledSection>
            <StyledAboutMe>
                <StyledTitle>About Me</StyledTitle>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
                    future website. It helps you to combine slides, panels and other components and export it as a set of
                    static files: HTML/CSS/JS.
                </p>
            </StyledAboutMe>

            <StyledWorkList>
                <StyledTitle>Work Experience</StyledTitle>
                {workExperienceArray.map((item, index) => (
                    <Item key={index} position={item.position}
                          company={item.company}
                          location={item.location}
                          startDate={item.startDate}
                          endDate={item.endDate}
                          employmentType={item.employmentType}/>
                ))}
            </StyledWorkList>

            <StyledEducationList>
                <StyledTitle>Education</StyledTitle>
                {educationExperienceArray.map((item, index) => (
                    <Item key={index} position={item.position}
                          company={item.company}
                          location={item.location}
                          startDate={item.startDate}
                          endDate={item.endDate}
                          employmentType={item.employmentType}/>
                ))}
            </StyledEducationList>

        </StyledSection>
    );
};
const StyledSection = styled.section`
    max-width: 50%;
    p{
        font-size: 1.125rem;
        font-weight: normal;
    }
`

const StyledTitle = styled.h2`
    font-size: 2.625rem;
    color: #42446E;
    font-weight: bold;
`

const StyledAboutMe = styled.div``

const StyledWorkList = styled.div``

const StyledEducationList = styled.div``