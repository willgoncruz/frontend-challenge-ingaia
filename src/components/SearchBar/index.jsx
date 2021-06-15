import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchStore } from '../../providers/search';

import { Button } from '../Button';
import { SearchBarInput, SearchContainer } from './style.js';

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
            <Button onClick={() => store.changeTerm(term)}>Search</Button>
        </SearchContainer>
    );
});