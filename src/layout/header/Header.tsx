import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

const linksNameList = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Tech Stack", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" }
]

export const Header = () => {
    return (
        <StyledHeader>
            <H1>I'm a web developer</H1>    {/*hidden*/}
            <Container>
                <FlexWrapper $align={"center"} $justify={"space-between"}>
                    <Logo text={"My portfolio"}/>
                    <Menu links={linksNameList}/>
                    <Networks/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 999999;
    background-color: ${theme.colors.primaryBg};
    box-shadow: 0 0 10px rgb(69 68 68 / 0.2);
`

const H1 = styled.h1`
    display: none;
`
