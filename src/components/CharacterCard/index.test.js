import 'jest-styled-components';
import { CharacterCard } from './';
import { shallow, mount, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() })

describe('Location Component Test', () => {
    test('renders', async () => {
        const component = shallow(<CharacterCard />);
        expect(component.exists()).toBeTruthy();
    });

    test('render card alive without external style', () => {
        const props = {
            name: 'Test',
            image: 'image',
            status: 'Alive',
            species: 'Human',
            style: '',
        };

        const component = mount(<CharacterCard {...props} />);
        const img = component.find('img');
        expect(img.prop('src')).toBe(props.image);
        expect(img).not.toHaveStyleRule('filter');

        expect(component.find('h3').html()).toContain(props.name);
        expect(component.find('h4').html()).toContain(props.species);
    });

    test('render card dead without external style', () => {
        const props = {
            name: 'Test',
            image: 'image',
            status: 'Dead',
            species: 'Robot',
            style: '',
        };

        const component = mount(<CharacterCard {...props} />);
        const img = component.find('img');
        expect(img.prop('src')).toBe(props.image);
        expect(img).toHaveStyleRule('filter', 'grayscale(100%)');

        expect(component.find('h3').html()).toContain(props.name);
        expect(component.find('h4').html()).toContain(props.species);
    });

    test('render card container with external style', () => {
        const props = {
            name: 'Test',
            image: 'image',
            status: 'Dead',
            species: 'Human',
            style: 'outline: none',
        };

        const component = mount(<CharacterCard {...props} />);
        const card = component.find('div').at(0);
        expect(card).toHaveStyleRule('outline', 'none');
    });
});