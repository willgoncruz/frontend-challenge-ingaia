import { ListContainer } from './style.js';
import { CharacterCard } from '../CharacterCard';

export const CharacterList = ({ characters }) => {

    return (
        <ListContainer>
            { characters.map((c, i) => <CharacterCard key={i} {...c} />) }
        </ListContainer>
    );
};