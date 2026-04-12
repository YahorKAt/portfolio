import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper align={"center"} direction={"column"}>
                <Text>For any questions please mail me:</Text>
                <Email>hi@pavanmg.in</Email>
            </FlexWrapper>
        </StyledContacts>

    );
};
const StyledContacts = styled.section``

const Text = styled.h5`
    color: #1E0E62;
    font-size: 3.625rem;
    font-weight: bold;
`

const Email = styled.span`
    font-size: 3.625rem;
    font-weight: bold;
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`