import { gql } from '@apollo/client';

export const SearchCharactersQuery = (page, nameFilter) => {
    return gql`
        query {
            characters(page: ${page}, filter: { name: "${nameFilter}" }) {
                results {
                    id
                    name
                    image
                    status
                    species
                }
                info {
                    pages
                    count
                }
            }
        }
    `
};