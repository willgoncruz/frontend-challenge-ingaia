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

export const CharacterDetailsQuery = (id) => {
    return gql`
        query {
            character(id: ${id}) {
                name
                species
                status
                gender
                image
                location {
                    name
                    type
                    dimension
                }
                origin {
                    name
                    type
                    dimension
                }
            }
        }
    `;
};