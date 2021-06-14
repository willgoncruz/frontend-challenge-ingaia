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
                    id
                }
                origin {
                    id
                }
            }
        }
    `;
};

export const LocationDetailsQuery = (id) => {
    return gql`
        query {
            location(id: ${id}) {
                name
                type
                dimension
                residents {
                    id
                }
            }
        }
    `;
};