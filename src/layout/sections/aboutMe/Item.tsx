import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";

type ExperienceItemProps = {
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

export const Item = ({position, company, location, startDate, endDate, employmentType}: ExperienceItemProps) => {
    return (
        <StyledExperienceItem>
            <Header>
                <Position>{position}</Position>
                <Badge>{employmentType}</Badge>
             </Header>

            <MetaInfo>
                <CompanyInfo>
                    <InfoItem>
                        <Icon iconId={"building"} width={"12"} height={"12"}/>
                        {company}
                    </InfoItem>
                    <InfoItem>
                        <Icon iconId={"location"} width={"12"} height={"12"}/>
                        {location}
                    </InfoItem>
                </CompanyInfo>
                <DateRange>
                    <Icon iconId={"calendar"} width={"12"} height={"12"}/>
                    {startDate} - {endDate}
                </DateRange>
            </MetaInfo>
        </StyledExperienceItem>
    );
};

const StyledExperienceItem = styled.div`
    border-bottom: #EBEAED 2px solid;
`

const Header = styled.div`
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;    
    color: #A7A7A7;
`

const Position = styled.h4`
    font-size: 1.25rem;
    font-weight: normal;
    color: #666666;
`

const MetaInfo = styled.div`
    font-size: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;    
    color: #A7A7A7;
  
`

const Badge = styled.span`
    min-width: 84px;
    display: inline-block;
    padding: 7px 20px;
    border-radius: 50px;
    background-color: #D7FFE0;
    font-size: 0.5625rem;
    color: #018C0F;
    font-weight: 600;
`

const CompanyInfo = styled.div`
    display: flex;
    gap: 20px;
`

const InfoItem = styled.span`
    display: flex;
    align-items: center;
`


const DateRange = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`