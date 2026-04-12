import './Networks.css'
import {Network} from "./network/Network.tsx";
import styled from "styled-components";

export function Networks() {
    return (
        <StyledBox>
            <Network iconId="github" href="https://github.com/" className={`svg-tag github`}/>
            <Network iconId="linkedin" href="https://linkedin.com/" className={`svg-tag  linkedin`}/>
            <Network iconId="twitter" href="https://x.com/" className={`svg-tag twitter`}/>
        </StyledBox>
    )
}

const StyledBox= styled.div`
    display: flex;
    gap: 20px;
`





