import {Icon} from "./Icon.tsx";
import styled from "styled-components";

export const Moon = () => {
    return (
        <StyledMoon>
            <Icon iconId={"moon"}
                  width="30"
                  height="30"
                  aria-label={"moon"}
                  aria-hidden="true"/>
        </StyledMoon>
    );
};

const StyledMoon = styled.div`
    display: flex;
    
    svg:hover {
        transform: scale(1.2);
    }

    .moon:hover {
        color: #3e3c3c;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
