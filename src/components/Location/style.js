import styled from "styled-components";

export const LocationContainer = styled.div`
    margin-top: 41px;
`;

export const LocationType = styled.h4`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #8C8C8C;
    margin-top: 17px;
    margin-bottom: 0px;

    @media(min-width: 1024px) {
        font-size: 14px;
        line-height: 19px;
    }
`;

export const LocationName = styled.h1`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    color: #FFFFFF;
    margin: 0px;

    @media(min-width: 1024px) {
        font-size: 28px;
        line-height: 26px;
    }
`;

export const LocationDimension = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #D3D3D3;
    margin-top: 3px;
    margin-bottom: 0px;

    @media(min-width: 1024px) {
        font-size: 18px;
        line-height: 25px;
        margin: 0px;
    }
`;

export const ResidentsContainer = styled.div`
    position: relative;
    margin-top: 7px;
`;

export const ResidentIcon = styled.img`
    width: 12px;
    height: 10px;
    display: inline-block;
    vertical-align: middle;
`;

export const ResidentText = styled.span`
    margin-left: 11px;
    display: inline-block;
    vertical-align: middle;

    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;

    color: #8C8C8C;

    // @media(min-width: 1024px) {
    //     font-size: 18px;
    //     line-height: 25px;
    // }
`;
