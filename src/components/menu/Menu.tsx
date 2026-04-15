import styled from "styled-components";

export const Menu = (props: { links: Array<string>; }) => {
    return (
        <StyledMenu>
            <ul role="menu">
                {props.links.map((link, index) =>
                    <li role="menuitem" key={index}>
                        <a href="#">{link}</a>
                    </li>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        column-gap: 50px;
        flex-wrap: wrap;
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