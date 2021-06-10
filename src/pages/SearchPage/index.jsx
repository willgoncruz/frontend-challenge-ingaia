import { observer } from 'mobx-react-lite';
import { useQuery } from '@apollo/client';
import { useSearchStore } from '../../providers/search';
import { SearchCharactersQuery } from '../../api/query/character';

import { Logo } from '../../components/Logo';
import { Loading } from '../../components/Loading';
import { SearchBar } from '../../components/SearchBar';

import {
    PageContainer
} from './style.js';

export const SearchPage = observer(() => {
    const store = useSearchStore();

    const { loading, error, data } = useQuery(SearchCharactersQuery(store.page, store.term), { skip: !store.term });
    // if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(loading, error, data)
    // store.updateStore(data.characters.info);

    return (
        <PageContainer>
            {loading && <Loading /> }
            <Logo />
            <SearchBar />
        </PageContainer>
    );
});