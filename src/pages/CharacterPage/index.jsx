import { useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router';
import { CharacterDetailsQuery } from '../../api/query/character';
import BackdropContainer from '../../components/Backdrop';
import { CharacterCard } from '../../components/CharacterCard';
import { Location } from '../../components/Location';
import { About } from '../../components/About';
import header from '../../images/filter.png';

import {
    HeaderImage,
    CardContainer,
    ModalContainer,
    DetailsContainer,
    CharacterDataContainer
} from './style.js';

export const CharacterPage = () => {
    let { id } = useParams();

    const history = useHistory();
    const modalClose = e => {
        e.stopPropagation();
        history.goBack();
    };

    const { loading, error, data } = useQuery(CharacterDetailsQuery(id));
    if (loading || error) return ``;

    const { character = {} } = data || {};
    return (
        <ModalContainer onClick={modalClose}>
            <BackdropContainer>
                <CharacterDataContainer>
                    <HeaderImage src={header} alt='Header Character Image' />

                    <CardContainer>
                        <CharacterCard {...character} />
                    </CardContainer>

                    <DetailsContainer>
                        <About {...character} />
                        <Location title='Origin' {...character.origin} />
                    </DetailsContainer>
                </CharacterDataContainer>
            </BackdropContainer>
        </ModalContainer>
    );
}