import { DetailsTitle } from '../DetailsTitle';
import {
    LocationName,
    LocationType,
    LocationContainer,
    LocationDimension
} from './style.js';

export const Location = ({ title, name, type, dimension, residents}) => {

    return (
        <LocationContainer>
            <DetailsTitle>{title}</DetailsTitle>
            <LocationType>{type}</LocationType>
            <LocationName>{name}</LocationName>
            <LocationDimension>{dimension}</LocationDimension>
        </LocationContainer>
    );
}