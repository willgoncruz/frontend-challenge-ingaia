import styled from 'styled-components';

export const SearchContainer = styled.div`
    margin-top: 47px;
    position: relative;
    display: inline-block;
`;

export const SearchButton = styled.button`
    width: 84px;
    height: 42px;

    margin-left: 8px;
    vertical-align: middle;

    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    color: #FFFFFF;
    padding: 10px 16px;
`;

export const SearchBarInput = styled.input`
    width: 164px;
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
`;