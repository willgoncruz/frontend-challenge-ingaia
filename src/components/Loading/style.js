import styled from "styled-components"

import { BackdropContainer } from '../../components/Backdrop/style.js';

export const LoadingContainer = styled(BackdropContainer)`
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
`;

export const LoadingImage = styled.img`
    margin-top: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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