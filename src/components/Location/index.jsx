import { useQuery } from '@apollo/client';
import { LocationDetailsQuery } from '../../api/query/character';
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

export const Location = ({ id, title }) => {
    const { loading, error, data } = useQuery(LocationDetailsQuery(id), { skip: (id === null) });
    if (loading || error) return ``;

    const { location = {} } = data || {};
    const { name, type, dimension, residents = []} = location;
    return (
        <LocationContainer>
            <DetailsTitle>{title}</DetailsTitle>
            <LocationType>{type}</LocationType>
            <LocationName>{name || "Unknown"}</LocationName>
            <LocationDimension>{dimension}</LocationDimension>
            { id !== null &&
                <ResidentsContainer>
                    <ResidentIcon src={residentIcon} alt='Resident count icon' />
                    <ResidentText>{residents.length} residents</ResidentText>
                </ResidentsContainer>
            }
        </LocationContainer>
    );
};