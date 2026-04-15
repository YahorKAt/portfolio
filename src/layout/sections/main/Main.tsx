import photo from "../../../assets/images/header/photo.png"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={'wrap'}>
                <StyledTextBox>
                    <span>Hi </span><span aria-hidden="true">👋,</span><br/>
                    <span>My name is </span><br/>
                    <h2>Egor Kotkovets</h2>
                    <h1>I'm a web developer</h1>
                </StyledTextBox>
                <Photo>
                    <img src={photo} alt="photo"/>
                </Photo>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
`

const StyledTextBox = styled.div`
    text-align: left;
    color: #42446E;
    font-weight: bold;
    font-size: 3.625rem;
    line-height: 70px;


    h2 {
        font-size: inherit;
        background: linear-gradient(90deg, #13B0F5 3%, #E70FAA 100%);

        /* 2. Обрезаем фон по форме текста */
        -webkit-background-clip: text;
        background-clip: text;

        /* 3. Делаем сам текст прозрачным, чтобы был виден фон */
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    h1 {
        font-size: inherit;
    }
`

const Photo = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: linear-gradient(0deg, #13B0F5 3%, #E70FAA 100%);
    padding: 6px;
    box-sizing: border-box;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    
`
