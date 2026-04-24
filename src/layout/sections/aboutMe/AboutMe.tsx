import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";
import {List} from "../../../components/List.tsx";
import decor from "../../../assets/images/afterElement.png";

const workExperienceArray = [
    {
        jobPosition: "Junior Web Developer",
        nameCompany: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Web Development Intern",
        nameCompany: "IonPixelz Web Solutions",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    },
    {
        jobPosition: "SEO / SEM Specialist",
        nameCompany: "HAAPS",
        location: "Bengaluru",
        startDate: "Sep 2021",
        endDate: "Dec 2021",
        employmentType: "Internship"
    }
]
const educationExperienceArray = [
    {
        jobPosition: "Bachelor in Electronics & Communication",
        nameCompany: "Bangalore Instutute of Technology",
        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    },
    {
        jobPosition: "Bachelor in Electronics & Communication",
        nameCompany: "Bangalore Instutute of Technology",
        startDate: "Aug 2015",
        endDate: "Dec 2020",
        employmentType: "Full Time"
    }
]

export const AboutMe = () => {
    return (
        <StyledSection id='about'>
            <Container>
                <StyledPositionBlock>
                    <StyledInformationSection>
                        <StyledTitle>About Me</StyledTitle>
                        <StyledText>The Generator App is an online tool that helps you to export ready-made templates
                            ready
                            to work
                            as
                            your future website. It helps you to combine slides, panels and other components and export
                            it
                            as a
                            set of static files: HTML/CSS/JS.
                        </StyledText>

                        <StyledTitle>Work Experience</StyledTitle>
                        <List data={workExperienceArray}/>

                        <StyledTitle>Education</StyledTitle>
                        <List data={educationExperienceArray}/>
                    </StyledInformationSection>
                </StyledPositionBlock>
            </Container>
        </StyledSection>
    );
};

const StyledPositionBlock = styled.div`
    position: relative;
`


const StyledInformationSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 38px;
    width: 60%;
    @media screen and (max-width: 992px) {
        width: 100%;
    }

    &::after {
        content: "";
        position: absolute;
        
        top: -10%;
        left: 60%;

        width: 100%;
        height: 100%;

        transform: translateX(0);
         background: url(${decor}) no-repeat left;
         background-size: contain;

        pointer-events: none;
    }

    @media screen and (max-width: 992px) {
        &::after {
            display: none;
        }
    }

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
