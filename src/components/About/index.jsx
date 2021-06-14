import { AboutText } from './style.js';
import { DetailsTitle } from '../DetailsTitle';

export const About = ({ name, gender, species, status }) => {
    const pronoum = (gender === 'Male') ? 'He' : 'She';
    const statusText = (status === 'dead') ? `${pronoum} is dead.` : `${pronoum} is alive and well.`;

    return (
        <>
            <DetailsTitle>About</DetailsTitle>
            <AboutText>{name} is a {gender} {species}. {statusText}</AboutText>
        </>
    );
}