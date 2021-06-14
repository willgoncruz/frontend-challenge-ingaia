import {
    Card,
    Name,
    Species,
    ProfileImage,
    InfoContainer
} from './style.js';

export const CharacterCard = (props) => {
    const { image, name, species, status, style } = props;

    return (
        <Card newStyle={style || ''}>
            <ProfileImage src={image} dead={status === 'Dead'} />
            <InfoContainer>
                <Name>{name}</Name>
                <Species>{species}</Species>
            </InfoContainer>
        </Card>
    );
}