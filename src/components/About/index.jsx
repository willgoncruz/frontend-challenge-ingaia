import { AboutText } from './style.js';
import { DetailsTitle } from '../DetailsTitle';

export const About = ({ name, gender, species }) => {
    return (
        <>
            <DetailsTitle>About</DetailsTitle>
            <AboutText>{name} is a {gender} {species}.</AboutText>
        </>
    );
}