import {Network} from "./network/Network.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";


const socialNetworksArray = [
    {
        id:1,
        name: "github",
        ref: "https://github.com/"
    },
    {
        id:2,
        name: "linkedin",
        ref: "https://linkedin.com/"
    },
    {
        id:3,
        name: "twitter",
        ref: "https://x.com/"
    }
]

export function Networks() {
    return (
        <StyledNetworksBox>
            {socialNetworksArray.map(network => (
                <Network
                    key={network.id}
                    iconId={network.name}
                    href={network.ref}
                    className={`svg-tag ${network.name}`}
                />
            ))}
        </StyledNetworksBox>
    )
}

const StyledNetworksBox = styled.div`
    display: flex;
    gap: 20px;
    
    .svg-tag svg {
        color: ${theme.colors.font};
    }

    .github:hover svg {
        color: #3e3c3c;
    }

    .linkedin:hover svg {
        color: #0077B5;
    }

    .twitter:hover svg {
        color: #1DA1F2;
    }
`