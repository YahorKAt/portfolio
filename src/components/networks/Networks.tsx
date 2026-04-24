import {Network} from "./network/Network.tsx";
import styled from "styled-components";

const socialNetworksArray = [
    {
        id: 1,
        name: "github",
        ref: "https://github.com/"
    },
    {
        id: 2,
        name: "linkedin",
        ref: "https://linkedin.com/"
    },
    {
        id: 3,
        name: "twitter",
        ref: "https://x.com/"
    }
]

export function Networks() {
    return (
        <StyledSocialNetworksBox>
            {socialNetworksArray.map(network => (
                <Network
                    key={network.id}
                    iconId={network.name}
                    href={network.ref}
                    className={network.name}
                />
            ))}
        </StyledSocialNetworksBox>
    )
}

const StyledSocialNetworksBox = styled.ul`
    display: flex;
    gap: 20px;

    @media (max-width: 992px) {
        gap: 10px;
    }

    svg:hover {
        transform: scale(1.2);
    }

    .github:hover {
        color: #3e3c3c;
    }

    .linkedin:hover {
        color: #0077B5;
    }

    .twitter:hover {
        color: #1DA1F2;
    }

    @media (max-width: 768px) {
        display: none;
    }  
`