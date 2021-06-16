import { useQuery } from '@apollo/client';
import { LocationDetailsQuery } from '../../api/query/character';
import { Location } from '../../components/Location';

export const LocationLoader = ({ id, title, newStyle }) => {
    const { loading, error, data } = useQuery(LocationDetailsQuery(id), { skip: (id === null) });
    if (loading || error) return ``;

    const { location = {} } = data || {};
    return <Location title={title} newStyle={newStyle} {...location} />
};