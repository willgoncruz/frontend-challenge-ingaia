import img from '../../images/loading.png';
import {
    LoadingText,
    LoadingImage,
    LoadingContainer
} from './style.js';

export const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingImage src={img} alt="Loading"></LoadingImage>
            <LoadingText>Loading</LoadingText>
        </LoadingContainer>
    );
};