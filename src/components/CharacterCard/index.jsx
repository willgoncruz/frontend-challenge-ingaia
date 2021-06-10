import {
    Card,
    Name,
    Species,
    ProfileImage,
    InfoContainer
} from './style.js';

export const CharacterCard = (props) => {
    const { image, name, species, status } = props;
    return (
        <Card>
            <ProfileImage src={image} />
            <InfoContainer>
                <Name>{name}</Name>
                <Species>{species}</Species>
            </InfoContainer>
        </Card>
    );
}