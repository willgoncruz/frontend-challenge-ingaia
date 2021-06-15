import { AboutText } from './style.js';
import { DetailsTitle } from '../DetailsTitle';

export const About = ({ name, gender, species, status }) => {
    const getStatusText = (pronoum, status) => {
        if (status === 'dead') {
            return `${pronoum} is dead.`;
        }

        if (status === 'alive') {
            return `${pronoum} is alive and well.`;
        }

        return `It can't be told if he is alive or dead`;
    }

    const verb = (status === 'dead') ? 'was' : 'is';
    const pronoum = (gender === 'Male') ? 'He' : 'She';
    const statusText = getStatusText(pronoum, status);

    return (
        <>
            <DetailsTitle>About</DetailsTitle>
            <AboutText>{name} {verb} a {gender} {species}. {statusText}. Last seen in .</AboutText>
        </>
    );
}