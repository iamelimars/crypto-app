import React from 'react';
import { shallow } from 'enzyme';
import NoMatchFound from './NoMatchFound';
import { findByTestAttr } from '../../../../Utils';
const setUp = (props={}) => {
    const component = shallow(<NoMatchFound {...props} />);
    return component
}
describe('<NoMatchFound />',  () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('Should render page without errors', () => {
        const wrapper = findByTestAttr(component, 'noMatchContainer');
        expect(wrapper.length).toBe(1);
    })
})