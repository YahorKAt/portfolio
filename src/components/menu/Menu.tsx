import styled from "styled-components";

type MenuProps = {
    links: Array<{ title: string; id: string }>,
    $gap?: string
}

export const Menu = (props: MenuProps) => {
    return (
        <StyledMenu gap={props.$gap}>
            <ul>
                {props.links.map((link, index) =>
                    <ListItem key={index}>
                        <Link href={"#" + link.id}>{link.title}</Link>
                    </ListItem>)}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{ gap?: string }>`
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: ${({gap}) => gap || '4rem'};

        @media (max-width: 1024px) {
            gap: ${({ gap }) => gap || '1.5rem'}; /* планшет */
        }

        @media (max-width: 768px) {
            gap: ${({ gap }) => gap || '1rem'}; /* маленькие экраны */
        }

        @media (max-width: 480px) {
            gap: ${({ gap }) => gap || '0.5rem'}; /* мобильные */
        }
    }
`

const Link = styled.a`
    font-family: "DM Sans", sans-serif;
    font-size: 1.25rem;
    font-weight: 500;    
`

const ListItem = styled.li`
    &:hover {
        transform:  scale(120%);
    }
    
    &:active {
        transform: translateY(2px)
    }
`