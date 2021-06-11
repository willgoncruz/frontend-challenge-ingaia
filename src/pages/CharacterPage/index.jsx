import { useHistory, useParams } from 'react-router';
import { ModalContainer } from './style.js';

export const CharacterPage = () => {
    let { id } = useParams();

    const history = useHistory();
    const modalClose = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <ModalContainer onClick={modalClose}>
            {id}
        </ModalContainer>
    );
}