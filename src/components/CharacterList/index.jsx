import styled from "styled-components";
import { ListContainer, CharacterListCard } from './style.js';
import { Link, useLocation } from 'react-router-dom';
import { CharacterCard } from '../CharacterCard';

const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;

    &:focus {
        outline: none;

        & > div {
            border: 2px solid #CBD736;
            box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
        }
    }
`;

const CharacterLink = ({ id, children }) => {
    const location = useLocation();
    const pathname = `/character/${id}`;

    return (
        <StyledLink to={{ pathname, state: { background: location } }}>
            {children}
        </StyledLink>
    );
};

export const CharacterList = ({ characters }) => {

    return (
        <ListContainer>
            { characters.map((c, i) => <CharacterLink key={i} id={c.id}><CharacterCard {...c} style={CharacterListCard} /></CharacterLink>) }
        </ListContainer>
    );
};