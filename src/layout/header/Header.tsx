import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {Container} from "../../components/Container.tsx";

const links = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Tech Stack", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" }
]

export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper $align={"center"} $justify={"space-between"} $wrap={"wrap"}>
                    <Logo color={"color_logo"}/>
                    <Menu links={links}/>
                    <Networks/>
                </FlexWrapper>
            </Container>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: ${theme.colors.primaryBg};
`
