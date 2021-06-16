import { observer } from 'mobx-react-lite';
import { useQuery } from '@apollo/client';
import { useSearchStore } from '../../providers/search';
import { SearchCharactersQuery } from '../../api/query/character';

import { Logo } from '../../components/Logo';
import { Loading } from '../../components/Loading';
import { SearchBar } from '../../components/SearchBar';
import { Pagination } from '../../components/Pagination';
import { CharacterList } from '../../components/CharacterList';

import {
    PageContainer
} from './style.js';

export const SearchPage = observer(() => {
    const store = useSearchStore();

    const { loading, error, data } = useQuery(SearchCharactersQuery(store.page, store.term), { skip: !store.term });
    if (error) return `Error! ${error.message}`;

    const { characters = {} } = data || {};
    const { info = {}, results = [] } = characters;
    return (
        <PageContainer>
            {loading && <Loading /> }
            <Logo />
            <SearchBar />

            <CharacterList characters={results} pages={info.pages} />
            <Pagination pages={info.pages} />
        </PageContainer>
    );
});