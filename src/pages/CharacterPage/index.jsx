import { useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router';
import { CharacterDetailsQuery } from '../../api/query/character';
import { CharacterCard } from '../../components/CharacterCard';
import { Location } from '../../components/Location';
import { About } from '../../components/About';
import header from '../../images/filter.png';
import close from '../../images/close.png';

import {
    CloseButton,
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

    const downHandler = useCallback(e => {
        if (e.key === "Backspace") {
            e.stopPropagation();
            history.goBack();
        }
    }, [history]);

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        return () => {
            window.removeEventListener("keydown", downHandler);
        }
    }, [downHandler]);

    const { loading, error, data } = useQuery(CharacterDetailsQuery(id));
    if (loading || error) return ``;

    const { character = {} } = data || {};
    return (
        <ModalContainer>
            <CloseButton src={close} alt="Close Character Details" onClick={modalClose} />
            <CharacterDataContainer>
                <HeaderImage src={header} alt='Header Character Image' />

                <CardContainer>
                    <CharacterCard {...character} />
                </CardContainer>

                <DetailsContainer>
                    <About {...character} />
                    <Location title='Origin' {...character.origin || {}} />
                    <Location title='Location' {...character.location || {}} />
                </DetailsContainer>
            </CharacterDataContainer>
        </ModalContainer>
    );
}