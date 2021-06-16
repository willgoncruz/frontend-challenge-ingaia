import styled from "styled-components";
import { fadein } from '../../pages/CharacterPage/style.js';

export const AboutContainer = styled.div`
    animation: ${fadein} 1s ease-in;
    animation-fill-mode: forwards;
`;

export const AboutText = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;

    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    color: #D3D3D3;
`;