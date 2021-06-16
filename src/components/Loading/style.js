import styled, { keyframes } from "styled-components"

import { BackdropContainer } from '../../components/Backdrop/style.js';

export const LoadingContainer = styled(BackdropContainer)`
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
`;

export const CenterContainer = styled.div`
    height: fit-content;
    margin: auto;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
`;

const spinning = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

export const LoadingImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #606060;
    box-sizing: border-box;
    border-radius: 8px;

    animation: ${spinning} .5s infinite linear;
`;

export const LoadingText = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;

    text-align: center;
    margin: 40px auto;

    color: #FFFFFF;
`;