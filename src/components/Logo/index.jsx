import { Image } from './style.js';
import logo from '../../images/rickmortylogo.png';

export const Logo = () => {
    return (
        <Image src={logo} alt='Rick and Morty Logo' />
    );
};