import styled from "styled-components";
import {
    Card,
    Name,
    Species,
    ProfileImage,
    InfoContainer
} from './style.js';

import { Link, useLocation } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const CharacterCard = (props) => {
    const { id, image, name, species, status } = props;

    const location = useLocation();
    const pathname = `/character/${id}`;
    return (
        <StyledLink to={{ pathname, state: { background: location } }}>
            <Card>
                <ProfileImage src={image} dead={status === 'Dead'} />
                <InfoContainer>
                    <Name>{name}</Name>
                    <Species>{species}</Species>
                </InfoContainer>
            </Card>
        </StyledLink>
    );
}