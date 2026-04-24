import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type ExperienceItemPropsType = {
    jobPosition: string;
    nameCompany: string;
    location: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

export const Item = ({
                         jobPosition,
                         nameCompany,
                         location,
                         startDate,
                         endDate,
                         employmentType
                     }: ExperienceItemPropsType) => {
    return (
        <StyledItem>
            <StyledTopRow>
                <StyledJobPosition>{jobPosition}</StyledJobPosition>
                <StyledBadge>{employmentType}</StyledBadge>
            </StyledTopRow>

            <StyledBottomRow>
                <StyledInfo aria-label="project name">
                    <Icon iconId={"building"}
                          width={"12"}
                          height={"12"}
                          aria-hidden="true"/>
                    {nameCompany}
                </StyledInfo>

                <StyledInfo aria-label="adress">
                    {location ? (
                        <>
                            <Icon iconId="location"
                                  width="12"
                                  height="12"
                                  aria-hidden="true"/>
                            {location}
                        </>
                    ) : null}
                </StyledInfo>

                <StyledInfo aria-label="date">
                    <Icon iconId={"calendar"}
                          width={"12"}
                          height={"12"}
                          aria-hidden="true"/>
                    {startDate} - {endDate}
                </StyledInfo>
            </StyledBottomRow>
        </StyledItem>
    );
};

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    border-bottom: #EBEAED 2px solid;
`

const StyledTopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`

const StyledInfo = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
`

const StyledBottomRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    font-weight: 500;
    font-size: 0.75rem;
    color: #A7A7A7;
    letter-spacing: 0.08em;

    ${StyledInfo}:last-child {
        justify-self: end;
    }
`

const StyledJobPosition = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.05em;
`

const StyledBadge = styled.span`
    font-size: 0.5625rem;
    font-weight: 600;
    text-align: center;
    color: #018C0F;
    min-width: 84px;
    border-radius: 100px;
    padding: 7px 20px;
    background-color: #D7FFE0;
`