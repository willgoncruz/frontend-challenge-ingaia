import styled, { css } from "styled-components";

export const ListContainer = styled.div`
    position: relative;
    width: fill-available;
    margin-top: 24px;
`;

export const CharacterListCard = css`
    position: relative;

    width: 254px;
    height: 223px;
    margin-top: 24px;

    &:hover {
        border: 2px solid #CBD736;
        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
    }

    &:selected {
        border: 2px solid #CBD736;
        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);
    }
`;