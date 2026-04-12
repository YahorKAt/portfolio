import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Networks} from "../../components/networks/Networks.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import styled from "styled-components";

const links = ["Home", "About", "Tech Stack", "Projects", "Contact"]

export const Header = () => {

    return (
        <StyledHeader>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <Logo color={"color_logo"} />
                <Menu links={links}/>
                <Networks/>
            </FlexWrapper>
        </StyledHeader>

    );
};
const StyledHeader = styled.header``
