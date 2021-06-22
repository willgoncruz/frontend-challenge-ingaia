import { AboutText, AboutContainer } from './style.js';
import { DetailsTitle } from '../DetailsTitle';

export const About = ({ name, gender = '', species, status }) => {
    const getStatusText = (pronoum, status) => {
        if (status === 'Dead') {
            return `${pronoum} is dead`;
        }

        if (status === 'Alive') {
            return `${pronoum} is alive and well`;
        }

        return `It can't be told if ${pronoum.toLowerCase()} is alive or dead`;
    }

    const verb = (status === 'Dead') ? 'was' : 'is';
    const pronoum = (gender.toLowerCase() === 'male') ? 'He' : 'She';
    const statusText = getStatusText(pronoum, status);

    return (
        <AboutContainer>
            <DetailsTitle>About</DetailsTitle>
            <AboutText>{name} {verb} a {gender} {species}. {statusText}.</AboutText>
        </AboutContainer>
    );
}