import { observer } from 'mobx-react-lite';
import { useQuery } from '@apollo/client';
import { useSearchStore } from '../../providers/search';
import { SearchCharactersQuery } from '../../api/query/character';

export const SearchPage = observer(() => {
    const store = useSearchStore();
    const { loading, error, data } = useQuery(SearchCharactersQuery(store.page, store.term));


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data.characters.info)
    store.updateStore(data.characters.info);

    return (
        <div className="App">

        </div>
    );
});