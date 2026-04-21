import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";

type ProjectProps = {
    imageSrc: string,
    imageSrc2x: string,
    title: string,
    description: string,
    technologies: Array<string>,
    link: Array<string>,
}

export const Project = (props: ProjectProps) => {
    return (
        <StyledProject>
            <Image src={props.imageSrc} srcSet={`${props.imageSrc2x} 2x`} alt="project1"/>
            <StyledInfoBox>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <StackText>
                    <span className="stack">Tech stack : </span>
                    <span>{props.technologies.join(', ')}</span>
                </StackText>

                <Links>
                    <Link href={`${props.link[0]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"link"} width="20" height="20"/>
                        <span>Live Preview</span>
                    </Link>
                    <Link href={`${props.link[1]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"github"} width="20" height="20"/>
                        <span>View Code</span>
                    </Link>
                </Links>
            </StyledInfoBox>

        </StyledProject>
    );
};

const StyledProject = styled.li`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: hidden;
    background: ${theme.colors.primaryBg};
    
    &:hover{
        transform: scale(1.25);
        transition: .3s;
    }
`

const StyledInfoBox = styled.div`
    padding: 30px;
`

const Image = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const Title = styled.h4`
    font-size: 1.75rem;
    font-weight: 500;
    color: ${theme.colors.titleFont};
`

const Description = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    margin: 15px 0;
`

const StackText = styled.div`
    display: inline-block;
    overflow-wrap: anywhere;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${theme.colors.titleFont};
    margin-bottom: 20px;
    
    .stack{
        font-size: 1rem;
        line-height: 1.625;
        font-weight: 400;
    }
`

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    :hover {
        color: rgb(66 68 110 / 0.24);
    }
`

const Link = styled.a`
    display: flex;
    gap: 10px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.titleFont};
    align-items: center;
`