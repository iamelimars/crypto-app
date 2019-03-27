import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';
import { findByTestAttr } from '../../../../Utils';
const setUp = (props={}) => {
    const component = shallow(<Loading {...props} />);
    return component
}
describe('<Loading />',  () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('Should render page without errors', () => {
        const wrapper = findByTestAttr(component, 'loadingContainer');
        expect(wrapper.length).toBe(1);
    })
})