import styled from "styled-components";

export const Card = styled.div`
    position: relative;
    width: 254px;
    height: 223px;
    margin-top: 24px;

    background: #1B1B1B;
    border: 2px solid #606060;
    box-sizing: border-box;
    border-radius: 8px;

    &:hover {
        border: 2px solid #CBD736;
        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
    }

    &:selected {
        border: 2px solid #CBD736;
        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
    }
`;

export const ProfileImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

export const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 55px;

    // background: #1B1B1B;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(23px);
    // filter: blur(23px);
`;

export const Name = styled.h3`
    display: block;
    margin-top: 7px;
    margin-left: 13px;
    margin-bottom: 0px;
    // margin-right: 10px;

    font-family: Seravek;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

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
    /* identical to box height */

    color: #FFFFFF;
`;