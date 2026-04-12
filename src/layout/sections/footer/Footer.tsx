import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Logo} from "../../../components/logo/Logo.tsx";
import {Networks} from "../../../components/networks/Networks.tsx";
import {Menu} from "../../../components/menu/Menu.tsx";

const links = ["Home", "about", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column">
                <InfoRow>
                    <Logo color={"logo"} />
                    <StyledContacts>
                        <Text>+91 12345 09876</Text>
                        <Text>info@example.com</Text>
                        <Networks/>
                    </StyledContacts>
                </InfoRow>
                <NavRow>
                    <Menu links={links}/>
                    <StyledTextBox>
                        Designed and built by <GradientText>Egor Kotkovets</GradientText> with <GradientText>Love</GradientText> & <GradientText>Coffee</GradientText>
                    </StyledTextBox>
                </NavRow>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    color: #666666;
    font-size: 1.125rem;
    font-weight: normal;
`

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: #EBEAED 3px solid;
`

const Text = styled.span`
    display: flex;
    align-items: center;
`

const StyledContacts = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

const StyledTextBox = styled.div`
  
`

const GradientText = styled.span`
    font-size: inherit;
    font-weight: inherit;

    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`

const NavRow = styled.div`
    display: flex;
    justify-content: space-between;
`