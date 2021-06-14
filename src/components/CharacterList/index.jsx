import styled from "styled-components";
import { ListContainer, CharacterListCard } from './style.js';
import { Link, useLocation } from 'react-router-dom';
import { CharacterCard } from '../CharacterCard';

const StyledLink = styled(Link)`
    text-decoration: none;
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