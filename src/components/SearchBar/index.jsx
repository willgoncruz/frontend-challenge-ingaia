import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchStore } from '../../providers/search';

import { SearchBarInput, SearchContainer, SearchButton } from './style.js';

export const SearchBar = observer(() => {
    const store = useSearchStore();
    const [term, setTerm] = useState(store.term);

    return (
        <SearchContainer>
            <SearchBarInput
                type="text"
                name="search"
                value={term}
                placeholder="Search characters"
                onChange={ev => setTerm(ev.target.value)}
            />
            <SearchButton onClick={() => store.changeTerm(term)}>Search</SearchButton>
        </SearchContainer>
    );
});