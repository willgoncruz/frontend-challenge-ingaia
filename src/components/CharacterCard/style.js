import styled from "styled-components";

export const Card = styled.div`
    position: relative;

    background: #1B1B1B;
    border: 2px solid #606060;
    box-sizing: border-box;
    border-radius: 8px;

    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media (min-width: 540px) {
        margin-left: unset;
        margin-right: unset;
    }

    ${props => props.newStyle}
`;

export const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    filter: ${props => props.dead ? 'grayscale(100%)' : ''};
`;

export const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 55px;

    border-radius: 0 0 6px 6px;

    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(23px);
`;

export const Name = styled.h3`
    display: block;
    margin-top: 7px;
    margin-left: 13px;
    margin-bottom: 0px;

    font-family: Seravek;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;

    color: #FFFFFF;
`;

export const Species = styled.h4`
    display: block;
    margin-top: 0px;
    margin-left: 13px;

    font-family: Seravek;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;

    color: #FFFFFF;
`;