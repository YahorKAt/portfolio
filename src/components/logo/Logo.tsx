import styled from "styled-components";

type LogoPropsType = {
    text: string;
}

export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLink href="/" aria-label="site logo">
            {props.text}
        </StyledLink>
    );
};

const StyledLink = styled.a`
    font-family: "DM Sans", sans-serif;
    font-size: 3rem;
    font-weight: 500;
    white-space: nowrap;
    
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    user-select: none;
`