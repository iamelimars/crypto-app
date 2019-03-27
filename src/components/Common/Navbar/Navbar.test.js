import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import { findByTestAttr } from '../../../../Utils';
const setUp = (props={}) => {
    const component = shallow(<Navbar {...props} />);
    return component
}
describe('<Navbar />',  () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('Should render page without errors', () => {
        const wrapper = findByTestAttr(component, 'navbarContainer');
        expect(wrapper.length).toBe(1);
    })
})