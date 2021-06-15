import styled, { css } from "styled-components";

import { BackdropContainer } from '../../components/Backdrop/style.js';

export const ModalContainer = styled(BackdropContainer)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.8);
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

    @media(min-width: 1024px) {
        max-width: 1034px;
        margin: 0 auto;
    }

    @media(min-width: 1440px) {
        top: 50px;
        left: 165px;
        right: 165px;
        bottom: 50px;
    }
`;

export const HeaderImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 65px;

    filter: blur(5px);

    @media(min-width: 1024px) {
        height: fill-available;
        rotate: 90deg;
        width: 441px;
    }
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

    @media(min-width: 1024px) {
        margin: 0;
        top: 50%;
        transform: translateY(-50%);

        left: 25px;
        width: 350px;
        height: 500px;
    }

    @media(min-width: 1440px) {
        left: -50px;
        width: 401px;
        height: 653px;
    }
`;

export const DetailsContainer = styled.section`
    display: block;
    position: relative;

    margin-top: 140px;
    margin-left: 21px;
    padding-right: 21px;
    padding-bottom: 40px;

    height: fill-available;
    overflow-y: scroll;

    @media(min-width: 1024px) {
        margin-top: 72px;
        margin-left: 500px;
    }
`;

export const CloseButton = styled.img`
    position: absolute;
    top: -90px;
    left: 7px;
    z-index: 1;

    width: 17px;
    height: 17px;

    @media(min-width: 1024px) {
        visibility: hidden;
    }
`;

export const HideModalButton = css`
    visibility: hidden;
    position: absolute;
    z-index: 2;

    @media(min-width: 1024px) {
        visibility: inherit;
        top: 20px;
        left: 25px;
    }

    // @media(min-width: 1440px) {
    //     top: 20px;
    // }
`;