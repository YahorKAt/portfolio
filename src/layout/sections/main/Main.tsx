import photo from "../../../assets/images/photo/photo.webp"
import photo2x from "../../../assets/images/photo/photo_2x.webp"
import abstractImg from "../../../assets/images/photo/abstraction.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";
import {StyledSection} from "../../../components/StyledSection.tsx";

export const Main = () => {
    return (
        <StyledMain>
            < Container>
                <StyledFlexWrapper $align={"center"} $justify={"space-between"} $gap={"30px"}>
                    <StyledTextBox>
                        <span aria-hidden="true">Hi 👋,</span>
                        <span>My name is </span>
                        <StyledGradientText>Egor Kotkovets</StyledGradientText>
                        <span>I'm a web developer</span>
                    </StyledTextBox>
                    <StyledPhotoWrapper>
                        <StyledPhoto src={photo} srcSet={`${photo2x} 2x`} alt="photo"/>
                    </StyledPhotoWrapper>
                </StyledFlexWrapper>
            </ Container>
        </StyledMain>
    );
};

const StyledMain = styled(StyledSection)`
    display: flex;
    min-height: 100vh;
`

const StyledFlexWrapper = styled(FlexWrapper)`
    @media (max-width: 992px) {
        flex-direction: column-reverse;
    }
`

const StyledTextBox = styled.h2`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 3.625rem;
    line-height: 1.2;
    color: ${theme.colors.titleFont};

    @media (max-width: 992px) {
        align-items: center;
        font-size: 2.5rem;
    }
`

const StyledGradientText = styled.span`
    font-size: inherit;
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledPhotoWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    aspect-ratio: 1 / 1;
    
    border-radius: 50%;
    background: linear-gradient(0deg, #13B0F5 3%, #E70FAA 100%);

    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
        content: "";
        position: absolute;
        inset: -10px;
        border-radius: 50%;

        background: linear-gradient(0deg, #13B0F5 3%, #E70FAA 100%);
        filter: blur(20px);

        z-index: -1;
    }

    // &::after {
    //     content: "";
    //     position: absolute;
    //
    //     top: 50%;
    //     left: 50%;
    //     
    //     width: 100%;
    //     height: 100%;
    //     transform: translate(-50%, -50%) scale(2.2);
    //
    //     border: 2px red solid;
    //     background-image: url(${abstractImg});
    //     background-repeat: no-repeat;
    //     background-size: contain;
    //     background-position: center;
    //
    //     z-index: 0;
    // }
`

const StyledPhoto = styled.img`
    width: 100%;
    border-radius: 50%;
`