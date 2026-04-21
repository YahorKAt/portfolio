import photo from "../../../assets/images/photo/photo.webp"
import photo2x from "../../../assets/images/photo/photo_2x.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper $align={"center"} $justify={"space-between"} $wrap={'wrap'} $gap={'50px'}>
                    <StyledTextBox>Hi
                        <span aria-hidden="true">👋,</span><br/>
                        <span>My name is </span>
                        <Name>Egor Kotkovets</Name>
                        <MainTitle>I'm a web developer</MainTitle>
                    </StyledTextBox>
                    <PhotoWrapper>
                        <Square className="sq1"/>
                        <Square className="sq2"/>
                        <Square className="sq3"/>
                        <Square className="sq4"/>
                        <Square className="sq5"/>
                        <Photo src={photo} srcSet={`${photo2x} 2x`} alt="photo"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section``

const StyledTextBox = styled.span`
    color: ${theme.colors.titleFont};
    font-weight: 700;
    font-size: 3.625rem;
    line-height: 1.2069;
`

const Name = styled.h2`
    font-size: inherit;
    background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`

const MainTitle = styled.h1`
    font-size: inherit;
`

const Square = styled.div`
    width: 444px;
    height: 444px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;

    background: linear-gradient(0deg, #161616 0%, #FFFFFF 100%);
    padding: 1px;
    opacity: 0.1;


    -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
`

const PhotoWrapper = styled.div`
    position: relative;
    max-width: 350px;
    max-height: 350px;
    border-radius: 50%;
    background: linear-gradient(0deg, #13B0F5 3%, #E70FAA 100%);
    padding: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    .sq1 {
        transform: translate(-50%, -50%) rotate(-90deg);
    }

    .sq2 {
        transform: translate(-50%, -50%) rotate(-105deg);
    }

    .sq3 {
        transform: translate(-50%, -50%) rotate(-120deg);
    }

    .sq4 {
        transform: translate(-50%, -50%) rotate(-135deg);
    }

    .sq5 {
        transform: translate(-50%, -50%) rotate(-150deg);
    }
`
const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    
    @media screen {
        
    }
`