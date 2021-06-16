import styled from "styled-components"

export const PaginationContainer = styled.section`
    display: block;
    margin: 60px auto;
`;

export const Arrow = styled.button`
    cursor: pointer;
    display: inline-block;
    border: 0;
    background: transparent;

    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    font-size: 20px;
    line-height: 27px;

    color: ${props => props.available ? '#FFFFFF' : '#3E3E3E'};
`;

export const PageList = styled.div`
    display: inline-block;
    margin: 0 52px;
    text-align: center;
`;

export const CurrentPage = styled.button`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;

    color: #CBD736;
    margin: 0 auto;
    border: 0;
    background: transparent;

    @media(min-width: 1024px) {
        visibility: hidden;
        display: none;
    }
`;

export const PageNumber = styled(CurrentPage)`
    visibility: hidden;
    cursor: pointer;
    display: none;
    color: ${props => props.active ? '#CBD736' : '#3E3E3E'};

    @media(min-width: 1024px) {
        visibility: inherit;
        margin: 0 15px;
        display: inline-block;
    }
`;