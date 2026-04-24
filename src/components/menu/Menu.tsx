import styled from "styled-components";

type MenuPropsType = {
    links: Array<{ title: string; id: string }>
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <StyledList>
                {props.links.map((link, index) =>
                    <StyledListItem key={index}>
                        <a href={"#" + link.id}>{link.title}</a>
                    </StyledListItem>)}
            </StyledList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    justify-content: center;
    flex: 1;               
    min-width: 0;
    user-select: none;

    @media (max-width: 768px) {
        display: none;
    }
`

const StyledList = styled.ul`
    font-family: "DM Sans", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;

    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    
    @media (max-width: 992px) {
        gap: 25px;
    }
`

const StyledListItem = styled.li`
    &:hover {
        transform: scale(1.2);
        text-decoration: underline;
    }

    &:active {
        transform: translateY(-2px)
    }
`