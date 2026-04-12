import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type ProjectProps = {
    imageSrc: string,
    title: string,
    description: string,
    technologies: Array<string>,
    link: Array<string>,
}

export const Project = (props: ProjectProps) => {
    return (
        <StyledProject>
            <Image src={props.imageSrc} alt="project1"/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <StackText>
                <span className={"stack"}>Tech stack:</span>
                <span>{props.technologies}</span>
            </StackText>

            <div>
                <Link href={`${props.link[0]}`} target="_blank" rel="noreferrer">
                    <Icon iconId={"link"} width="20" height="20"/>
                    <span>Live Preview</span>
                </Link>
                <Link href={`${props.link[1]}`} target="_blank" rel="noreferrer">
                    <Icon iconId={"github"} width="20" height="20"/>
                    <span>View Code</span>
                </Link>
            </div>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    width: 375px;
    max-width: 100%;
    margin: 0 50px;
    border-radius: 20px;
    overflow: hidden;
    background-color: #FFFFFF;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
    font-size: 1.75rem;
    font-weight: 500;
    color: #000000;
`

const Description = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
`

const StackText = styled.div`
    font-size: 0.9375rem;
    font-weight: 300;
    color: #42446E;
    
    .stack{
        font-weight: 400;
    }
`

const Link = styled.a`
    color: #000000;
`