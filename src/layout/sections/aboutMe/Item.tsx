import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type ExperienceItemProps = {
    jobPosition: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

export const Item = ({jobPosition, company, location, startDate, endDate, employmentType}: ExperienceItemProps) => {
    return (
        <StyledExperienceItem>
            <MainInfoBox>
                <JobPosition>{jobPosition}</JobPosition>
                <Badge>{employmentType}</Badge>
            </MainInfoBox>

            <MetaInfoBox>
                <InfoItem aria-label={"building icon"}>
                    <Icon iconId={"building"} width={"12"} height={"12"} aria-hidden="true"/>
                    {company}
                </InfoItem>

                <InfoItem aria-label="map point icon">
                    {location ? (
                        <>
                            <Icon iconId="location" width="12" height="12" aria-hidden="true" />
                            {location}
                        </>
                    ) : null}
                </InfoItem>

                <InfoItem aria-label={"calendar icon"}>
                    <Icon iconId={"calendar"} width={"12"} height={"12"} aria-hidden="true"/>
                    {startDate} - {endDate}
                </InfoItem>
            </MetaInfoBox>
        </StyledExperienceItem>
    );
};

const StyledExperienceItem = styled.div`
    display: flex;
    flex-direction: column;
 

    &::after {
        content: '';
        padding-bottom: 20px;
        border-bottom: #EBEAED 2px solid;
    }
`

const MainInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`
const JobPosition = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.05em;
`
const Badge = styled.span`
    font-size: 0.5625rem;
    font-weight: 600;
    text-align: center;
    color: #018C0F;
    min-width: 84px;
    border-radius: 100px;
    padding: 7px 20px;
    background-color: #D7FFE0;
`


const InfoItem = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
`

const MetaInfoBox = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    font-weight: 500;
    font-size: 0.75rem;
    color: #A7A7A7;
    letter-spacing: 0.08em;

    ${InfoItem}:last-child {
        justify-self: end;
    }
`