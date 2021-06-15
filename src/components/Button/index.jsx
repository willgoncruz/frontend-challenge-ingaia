import { ButtonContainer } from './style.js';

export const Button = (props) => {
    const { children, ...rest } = props;
    return (
        <ButtonContainer {...rest}>{children}</ButtonContainer>
    );
};