import { DetailsTitle } from '../DetailsTitle';

import residentIcon from '../../images/residents.png';
import {
    LocationName,
    LocationType,
    ResidentIcon,
    ResidentText,
    LocationContainer,
    LocationDimension,
    ResidentsContainer
} from './style.js';

export const Location = ({ id, title, name, type, dimension, residents = [], newStyle }) => {
    return (
        <LocationContainer newStyle={newStyle}>
            <DetailsTitle>{title}</DetailsTitle>
            <LocationType>{type || "Unknown Planet"}</LocationType>
            <LocationName>{name || "Unknown"}</LocationName>
            <LocationDimension>{dimension || "Unknown dimension"}</LocationDimension>
            { id !== null &&
                <ResidentsContainer>
                    <ResidentIcon src={residentIcon} alt='Resident count icon' />
                    <ResidentText>{residents.length} residents</ResidentText>
                </ResidentsContainer>
            }
        </LocationContainer>
    );
};