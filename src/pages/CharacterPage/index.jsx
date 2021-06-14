import { useHistory, useParams } from 'react-router';
import BackdropContainer from '../../components/Backdrop';
import { CharacterCard } from '../../components/CharacterCard';

import header from '../../images/filter.png';

import {
    HeaderImage,
    CardContainer,
    ModalContainer,
    CharacterDataContainer
} from './style.js';

export const CharacterPage = () => {
    let { id } = useParams();

    const history = useHistory();
    const modalClose = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <ModalContainer onClick={modalClose}>
            <BackdropContainer>
                <CharacterDataContainer>
                    <HeaderImage src={header} alt='Header Character Image' />

                    <CardContainer>
                        <CharacterCard name={"Rick"} species={"Human"} image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"} />
                    </CardContainer>

                    {id}
                </CharacterDataContainer>
            </BackdropContainer>
        </ModalContainer>
    );
}