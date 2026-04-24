import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillPropsType = {
    skillName: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.skillName} width={"100"} height={"100"}/>
            <StyledTooltip>{props.skillName}</StyledTooltip>
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    aspect-ratio: 1 / 1;

    &:hover span {
        opacity: 1;
        transform: translateY(-5px);
    }
`

const StyledTooltip = styled.span`
    position: absolute;
    bottom: 0;

    background: #333;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.75rem;

    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
`