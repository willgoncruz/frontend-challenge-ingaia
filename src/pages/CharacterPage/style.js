import styled from "styled-components";

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    // background-color: red;
`;

export const CharacterDataContainer = styled.div`
    position: fixed;

    top: 110px;
    left: 12px;
    right: 12px;
    bottom: 16px;

    border: 1px solid rgba(96, 96, 96, 0.3);
    background: rgba(0, 0, 0, 0.8);
    border-radius: 16px;
`;

export const HeaderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 65px;

    filter: blur(5px);
`;

export const CardContainer = styled.div`
    position: absolute;
    top: -70px;
    bottom: -30px;
    left: 0;
    right: 0;

    width: 178px;
    height: 182px;

    margin-left: auto;
    margin-right: auto;
`;

export const DetailsContainer = styled.section`
    display: block;
    position: relative;

    margin-top: 140px;
    margin-left: 21px;
    margin-right: 21px;
`;
