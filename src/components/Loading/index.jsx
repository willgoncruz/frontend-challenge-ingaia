import img from '../../images/loading.png';
import BackdropContainer from '../Backdrop';
import {
    LoadingText,
    LoadingImage
} from './style.js';

export const Loading = () => {
    return (
        <BackdropContainer>
            <LoadingImage src={img} alt="Loading"></LoadingImage>
            <LoadingText>Loading</LoadingText>
        </BackdropContainer>
    );
};