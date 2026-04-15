import './Networks.css'
import {Network} from "./network/Network.tsx";
import styled from "styled-components";


const socialNetworksArray = [
    {
        name: "github",
        ref: "https://github.com/"
    },
    {
        name: "linkedin",
        ref: "https://linkedin.com/"
    },
    {
        name: "twitter",
        ref: "https://x.com/"
    }
]

export function Networks() {
    return (
        <StyledBox>
            {socialNetworksArray.map((network, index) => (
                <Network key={index} iconId={network.name} href={network.ref} className={`svg-tag ${network.name}`}/>
            ))}
        </StyledBox>
    )
}

const StyledBox = styled.div`
    display: flex;
    gap: 20px;
`