import iconsSprite from '../../assets/images/sprite.svg';
import styled from "styled-components";

type IconProps = {
    width?: string,
    height?: string,
    iconId: string,

}

export const Icon = ({width, height, iconId}: IconProps) => {
    return (
        <StyledSvg width={width || "30"} height={height || "30"}>
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </StyledSvg>
    );
};

const StyledSvg = styled.svg``