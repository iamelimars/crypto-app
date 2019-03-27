import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { findByTestAttr } from '../../../../Utils';
const setUp = (props = {}) => {
    const component = shallow(<Footer {...props} />);
    return component
}
describe('<Footer />', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('Should render page without errors', () => {
        const wrapper = findByTestAttr(component, 'footerContainer');
        expect(wrapper.length).toBe(1);
    })
})
