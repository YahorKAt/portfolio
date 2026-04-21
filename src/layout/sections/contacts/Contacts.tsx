import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";

export const Contacts = () => {
    return (
        <StyledContacts id='contact'>
            <Container>
                <Text>For any questions please mail me: <GradientText>hi@pavanmg.in</GradientText></Text>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section``

const Text = styled.h4`
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 3.625rem;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${theme.colors.titleFont};
`

const GradientText = styled.span`
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`