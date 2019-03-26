import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';
import { findByTestAttr } from '../../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Hero {...props} />);
    return component;
}


describe("<Hero />", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it("Should render without errors", () => {        
        const wrapper = findByTestAttr(component, 'heroComponent');
        expect(wrapper.length).toBe(1);
    });

    it("Should render the hero image",  () => {
        const image = findByTestAttr(component, 'heroImage');
        expect(image.length).toBe(1);
    })

    it("Should render the hero text",  () => {
        const text = findByTestAttr(component, 'heroText');
        expect(text.length).toBe(1);
    })
});
