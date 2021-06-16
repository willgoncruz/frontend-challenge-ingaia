import { observer } from 'mobx-react-lite';
import { useSearchStore } from '../../providers/search';

import {
    Arrow,
    PageList,
    PageNumber,
    CurrentPage,
    PaginationContainer
} from './style.js';

export const Pagination = observer(({ pages = 0 }) => {
    const store = useSearchStore();
    if (pages <= 0) {
        return ``;
    }

    const isPreviousAvailable = () => {
        return store.page > 1;
    }

    const isNextAvailable = () => {
        return store.page < pages
    }

    const updatePage = (newPage) => {
        store.updatePage(newPage)
    }

    const goToNextPage = () => {
        if (isNextAvailable()) {
            updatePage(Math.min(store.page + 1, pages));
        }
    }

    const goToPreviousPage = () => {
        if (isPreviousAvailable()) {
            updatePage(Math.max(0, store.page - 1));
        }
    }

    const pagesArray = Array(pages).fill(0);
    return (
        <PaginationContainer>
            <Arrow available={isPreviousAvailable()} onClick={goToPreviousPage} alt="Previous Page">&lt;</Arrow>

            <PageList>
                <CurrentPage >{store.page}</CurrentPage>

                {pagesArray.map((_, i) =>
                    <PageNumber key={i} active={i+1 === store.page} onClick={() => updatePage(i+1)}>{i+1}</PageNumber>
                )}
            </PageList>

            <Arrow available={isNextAvailable()} onClick={goToNextPage} alt="Next Page">&gt;</Arrow>
        </PaginationContainer>
    );
});