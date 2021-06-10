import styled from "styled-components"

export const LoadingContainer = styled.div`
    top: 0;
    left: 0;
    position: fixed;

    width: 100vw;
    height: 100vh;

    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
`;

export const LoadingImage = styled.img`

    margin-top: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;

// background: url(821532.jpg);
// transform: matrix(-1, 0, 0, 1, 0, 0);
`;

export const LoadingText = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;
    margin: 40px auto;

    color: #FFFFFF;
`;