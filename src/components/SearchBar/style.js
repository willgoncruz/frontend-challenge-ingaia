import styled from 'styled-components';

export const SearchBarInput = styled.input`
    width: 164px;
    height: 42px;

    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;

    color: #FFFFFF;

    &::placeholder {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;

        color: #9F9F9F;
        padding: 10px;
    }
`;