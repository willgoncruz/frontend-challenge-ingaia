import { Location } from './';
import { shallow, mount, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() })

describe('Location Component Test', () => {
    test('renders', async () => {
        const component = shallow(<Location />);
        expect(component.exists()).toBeTruthy();
    });

    test('renders full location', async () => {
        const location = {
            id: 1,
            name: 'Earth',
            type: 'Planet',
            dimension: 'C-137',
            residents: [{}, {}]
        }

        const component = mount(<Location title='Origin' {...location} />);
        expect(component.find('h1').html()).toContain(location.name);
        expect(component.find('h2').html()).toContain(location.dimension);
        expect(component.find('h4').html()).toContain(location.type);
        expect(component.find('span').html()).toContain(`${location.residents.length} residents`);
    });

    test('renders full location', async () => {
        const location = {
            id: null,
            residents: [{}, {}]
        }

        const component = mount(<Location title='Origin' {...location} />);
        expect(component.find('h1').html()).toContain("Unknown");
        expect(component.find('h2').html()).toContain("Unknown dimension");
        expect(component.find('h4').html()).toContain("Unknown Planet");
        expect(component.find('span')).toHaveLength(0);
    });
});
