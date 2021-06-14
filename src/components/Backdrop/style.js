import styled from "styled-components"

export const BackdropContainer = styled.div`
    top: 0;
    left: 0;
    position: fixed;

    width: 100vw;
    height: 100vh;

    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
`;
