import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';
import { findByTestAttr } from '../../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<ErrorPage {...props} />);
    return component
}

describe("<ErrorPage />",  () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it("Should render page without errors", () => {
        const wrapper = findByTestAttr(component, 'errorContainer');
        expect(wrapper.length).toBe(1);
    })
})

