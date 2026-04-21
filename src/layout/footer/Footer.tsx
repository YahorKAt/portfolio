import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

const links = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Technologies", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" }
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $direction="column">
                    <InfoRow>
                        <Logo color={"logo"}/>
                        <StyledContacts>
                            <Text>+91 12345 09876</Text>
                            <Text>info@example.com</Text>
                            <Networks/>
                        </StyledContacts>
                    </InfoRow>
                    <NavRow>
                        <Menu links={links} $gap="2rem"/>
                        <StyledTextBox>
                            Designed and built by <GradientText>Egor
                            Kotkovets</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText>
                        </StyledTextBox>
                    </NavRow>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    font-family: "DM Sans", sans-serif;
    font-size: 1.125rem;
    line-height: 1.44444;
    color: ${theme.colors.titleFont};
`

const InfoRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    &::after {
        content: "";
        display: inline-block;
        width: 100%;
        padding-bottom: 40px;
        margin-bottom: 45px;
        border-bottom: #EBEAED 2px solid;
    }
`

const Text = styled.span`
    display: flex;
    align-items: center;
`

const StyledContacts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 50px;

`

const StyledTextBox = styled.div`
    font-family: "Poppins", sans-serif;
    text-align: center;
    color: ${theme.colors.font};
`

const GradientText = styled.span`
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`

const NavRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
        font-size: 18px;
        font-weight: 400;
    }
`