import {Item} from "../layout/sections/aboutMe/Item.tsx";
import styled from "styled-components";

type ItemType = {
    jobPosition: string;
    company: string;
    location?: string;
    startDate: string;
    endDate?: string;
    employmentType: string;
}

type ListPropsType = {
    data: ItemType[]
}

export const List = (props: ListPropsType) => {
    return (
        <StyledList>
            {props.data.map((item, index) => (
                <Item key={index} jobPosition={item.jobPosition}
                      company={item.company}
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
