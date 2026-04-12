import styled from "styled-components";

export const Menu = (props: { links: Array<string>; }) => {
    return (
        <StyledMenu>
            <ul>
                {props.links.map((link, index) =>
                    <li key={index}>
                        <a href="#">{link}</a>
                    </li>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 50px;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-size: 20px;
        color: inherit;
        outline: none;
    }
`