import styled from 'styled-components';

export const SearchContainer = styled.div`
    margin-top: 47px;
    position: relative;
    text-align: center;
`;

export const SearchBarInput = styled.input`
    max-width: 164px;
    height: 42px;

    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;

    color: #FFFFFF;
    font-weight: bold;
    padding: 10px;

    &::placeholder {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;

        color: #9F9F9F;
        padding: 10px;
    }

    @media (min-width: 1024px) {
        max-width: 196px;
    }
`;