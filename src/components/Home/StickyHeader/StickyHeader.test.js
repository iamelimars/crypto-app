import React from 'react';
import { shallow } from 'enzyme';
import StickyHeader from './StickyHeader';
import { findByTestAttr } from '../../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<StickyHeader {...props} />);
    return component;
}

describe("<StickyHeader />", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it("Should render without errors", () => {        
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it("Should render 4 sections", () => {
        const sections = findByTestAttr(component, 'headerSection');
        expect(sections.length).toBe(4);
    })
})