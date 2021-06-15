import styled from 'styled-components';

export const ButtonContainer = styled.button`
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

    ${props => props.newStyle}
`;