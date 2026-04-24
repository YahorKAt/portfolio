import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";

type ProjectPropsType = {
    imageSrc: Array<string>,
    title: string,
    description: string,
    technologies: Array<string>,
    link: Array<string>,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <StyledImage src={props.imageSrc[0]} srcSet={`${props.imageSrc[1]} 2x`} alt={"project"}/>
            <StyledInfoBlock>
                <StyledTitle>{props.title}</StyledTitle>
                <StyledDescription>{props.description}</StyledDescription>
                <StyledStackText>
                    <span className="stack">Tech stack : </span>
                    <span>{props.technologies.join(', ')}</span>
                </StyledStackText>

                <StyledLinks>
                    <StyledLink href={`${props.link[0]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"link"} width="20" height="20" aria-hidden={true}/>
                        <span>Live Preview</span>
                    </StyledLink>
                    <StyledLink href={`${props.link[1]}`} target="_blank" rel="noreferrer">
                        <Icon iconId={"github"} width="20" height="20" aria-hidden={true}/>
                        <span>View Code</span>
                    </StyledLink>
                </StyledLinks>
            </StyledInfoBlock>

        </StyledProject>
    );
};

const StyledProject = styled.li`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    background: ${theme.colors.primaryBg};
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
`

const StyledImage = styled.img`
    width: 100%;
    max-height: 260px;
    object-fit: cover;
`

const StyledInfoBlock = styled.div`
    padding: 30px;
`

const StyledTitle = styled.h4`
    font-size: 1.75rem;
    font-weight: 500;
    color: ${theme.colors.titleFont};
`

const StyledDescription = styled.p`
    font-size: 1.125rem;
    font-weight: 300;
    margin: 15px 0;
`

const StyledStackText = styled.div`
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

const StyledLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    :hover{
        transform: scale(1.05);
        
        background: linear-gradient(
                90deg,
                #13B0F5 0%,
                #E70FAA 50%,
                #13B0F5 100%
        );

        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: gradientMove 5s linear infinite;

        @keyframes gradientMove {
            0% {
                background-position: 0%;
            }
            100% {
                background-position: 200%;
            }
        }
    }
`

const StyledLink = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 1.625;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.colors.titleFont};
`