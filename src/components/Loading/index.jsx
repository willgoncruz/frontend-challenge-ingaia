import img from '../../images/loading.png';
import {
    LoadingText,
    LoadingImage,
    CenterContainer,
    LoadingContainer
} from './style.js';

export const Loading = () => {
    return (
        <LoadingContainer>
            <CenterContainer>
                <LoadingImage src={img} alt="Loading"></LoadingImage>
                <LoadingText>Loading</LoadingText>
            </CenterContainer>
        </LoadingContainer>
    );
};