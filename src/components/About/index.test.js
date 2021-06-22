import { About } from './';
import { shallow, mount, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() })

describe('Location Component Test', () => {
    test('renders', async () => {
        const component = shallow(<About />);
        expect(component.exists()).toBeTruthy();
    });

    test('render about status dead gender male', () => {
        const about = { name: 'Test', status: 'Dead', gender: 'Male', species: 'Human' };
        const component = mount(<About {...about} />);
        const paragraph = component.find('p');
        expect(paragraph).toHaveLength(1);

        expect(paragraph.html()).toContain(`${about.name} was a ${about.gender} ${about.species}.`);
        expect(paragraph.html()).toContain(`He is dead.`);
    });


    test('render about status alive gender female', () => {
        const about = { name: 'Test', status: 'Alive', gender: 'Female', species: 'Robot' };
        const component = mount(<About {...about} />);
        const paragraph = component.find('p');
        expect(paragraph).toHaveLength(1);

        expect(paragraph.html()).toContain(`${about.name} is a ${about.gender} ${about.species}.`);
        expect(paragraph.html()).toContain(`She is alive and well.`);
    });

    test('render about status unknown', () => {
        const about = { name: 'Test', status: 'Unknown', gender: 'Female', species: 'Human' };
        const component = mount(<About {...about} />);
        const paragraph = component.find('p');
        expect(paragraph).toHaveLength(1);

        expect(paragraph.html()).toContain(`${about.name} is a ${about.gender} ${about.species}.`);
        expect(paragraph.html()).toContain(`It can't be told if she is alive or dead`);
    });
});