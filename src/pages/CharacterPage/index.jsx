import { useCallback, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router';
import { CharacterDetailsQuery } from '../../api/query/character';
import { CharacterCard } from '../../components/CharacterCard';
import { LocationLoader } from '../../components/LocationLoader';
import { Button } from '../../components/Button';
import { About } from '../../components/About';
import header from '../../images/filter.png';
import close from '../../images/close.png';
import FocusTrap from 'focus-trap-react';

import {
    CloseButton,
    HeaderImage,
    CardContainer,
    ModalContainer,
    HideModalButton,
    OriginAnimation,
    DetailsContainer,
    LocationAnimation,
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
            <FocusTrap active={true}>
                <CharacterDataContainer>
                    <CloseButton onClick={modalClose}><img src={close} alt="Close Character Details" /></CloseButton>
                    <Button alt="Close Character Details" onClick={modalClose} newStyle={HideModalButton}>Close</Button>

                    <HeaderImage src={header} alt='Header Character Image' />

                    <CardContainer>
                        <CharacterCard {...character} />
                    </CardContainer>

                    <DetailsContainer>
                        <About {...character} />
                        <LocationLoader title='Origin' newStyle={OriginAnimation} {...character.origin || {}} />
                        <LocationLoader title='Location' newStyle={LocationAnimation} {...character.location || {}} />
                    </DetailsContainer>
                </CharacterDataContainer>
            </FocusTrap>
        </ModalContainer>
    );
}