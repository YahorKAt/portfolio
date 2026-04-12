import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
type LogoProps = {
    color: string;
}
export const Logo = (props: LogoProps) => {
    return (
        <StyledLink href="/" aria-label="На главную">
            <Icon aria-hidden="true" iconId={props.color} width="97" height="59"/>
        </StyledLink>
    );
};

const StyledLink = styled.a`
    display: flex;
    gap: 20px;
`