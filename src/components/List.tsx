import {Item} from "../layout/sections/aboutMe/Item.tsx";
import styled from "styled-components";

type ItemPropsType = {
    jobPosition: string;
    nameCompany: string;
    location?: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

type ListPropsType = {
    data: ItemPropsType[]
}

export const List = (props: ListPropsType) => {
    return (
        <StyledList>
            {props.data.map((item, index) => (
                <Item key={index}
                      jobPosition={item.jobPosition}
                      nameCompany={item.nameCompany}
                      location={item.location || ""}
                      startDate={item.startDate}
                      endDate={item.endDate}
                      employmentType={item.employmentType}/>
            ))}
        </StyledList>
    );
};

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
