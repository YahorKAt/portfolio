import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Logo} from "../../components/logo/Logo.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

const linksNameList = [
    {title: "Home", id: "home"},
    {title: "About", id: "about"},
    {title: "Technologies", id: "skills"},
    {title: "Projects", id: "projects"},
    {title: "Contact", id: "contact"}
]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper $direction="column">
                    <StyledTopRow>
                        <Logo text={"My portfolio"}/>
                        <StyledContacts>
                            <StyledText>+91 12345 09876</StyledText>
                            <StyledText>info@example.com</StyledText>
                            <Networks/>
                        </StyledContacts>
                    </StyledTopRow>
                    <StyledBottomRow>
                        <Menu links={linksNameList}/>
                        <StyledTextBox>
                            <GreyText>Designed and built by </GreyText>Egor
                            Kotkovets<GreyText> with </GreyText>Love<GreyText> & </GreyText>
                            Coffee
                        </StyledTextBox>
                    </StyledBottomRow>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding-top: 100px;
    padding-bottom: 60px;
    font-family: "DM Sans", sans-serif;
    font-size: 1.125rem;
    line-height: 1.44444;
    color: ${theme.colors.titleFont};
`

const StyledTopRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    margin-bottom: 45px;
    border-bottom: #EBEAED 2px solid;
`

const StyledText = styled.span`
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
    
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`

const GreyText = styled.span`
    -webkit-text-fill-color: ${theme.colors.font};
    background: none;
    color: ${theme.colors.titleFont};
`

const StyledBottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
        font-size: 18px;
        font-weight: 400;
    }
`
