import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";

type SkillProps = {
    skillName: string;
}
export const Skill = (props: SkillProps) => {
    return (
        <StyledSkill>
            <Icon iconId={props.skillName} width={"100"} height={"100"} />
        </StyledSkill>
    );
};

const StyledSkill = styled.li`
    display: flex;
    justify-content: center;
`
