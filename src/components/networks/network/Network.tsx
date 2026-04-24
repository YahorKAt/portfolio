import {Icon} from "../../icon/Icon.tsx";
import styled from "styled-components";

type NetworkProps = {
    href: string,
    iconId: string,
    className?: string
}

export function Network(props: NetworkProps) {
    return (
        <li>
            <StyledLink href={props.href}
                        className={props.className}
                        aria-label={`link in ${props.className}`}
                        target="_blank"
                        rel="noreferrer">
                <Icon iconId={props.iconId}
                      width="30"
                      height="30"
                      aria-label={props.className}
                      aria-hidden="true"/>
            </StyledLink>
        </li>
    )
}

const StyledLink = styled.a`
    display: flex;
`