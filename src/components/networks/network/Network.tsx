import {Icon} from "../../icon/Icon.tsx";
import styled from "styled-components";

type NetworkProps ={
    href: string,
    iconId: string,
    className?: string,
}

export function Network(props: NetworkProps) {
    return (
        <StyledLink href={props.href} className={props.className} target="_blank" rel="noreferrer">
            <Icon iconId={props.iconId} width="30" height="30" aria-label={props.className}/>
        </StyledLink>
    )
}

const StyledLink = styled.a`
    
`