import React from 'react';
import ReactDOM from 'react-dom';
import { Shallow } from '../types';
import { ListItemTag } from './ListItemTag';
import { findByTestId } from '../test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });

let shallow: Shallow;

describe('ListItemTag', () => {
    beforeEach(() => {
        shallow = createShallow();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListItemTag label={'test'} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render list-item-tag wrapper', () => {
        const wrapper = shallow(<ListItemTag label={'test'} />);
        expect(findByTestId('list-item-tag', wrapper)).toBeTruthy();
    });

    it('renders the correct label text', () => {
        const wrapper = shallow(<ListItemTag label={'test'} />);
        expect(wrapper.text()).toEqual('test');
    });

    /*
    This won't work if we use JSS to style the component

    it('renders with correct colors', () => {
        const wrapper = shallow(
            <ListItemTag label={'test'} fontColor={Colors.gold['200']} backgroundColor={Colors.green['900']} />
        );
        expect(wrapper.props().style.color).toEqual(Colors.gold['200']);
        expect(wrapper.props().style.backgroundColor).toEqual(Colors.green['900']);
    });
    */
});
