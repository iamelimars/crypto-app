import React from 'react';
import { shallow } from 'enzyme';
import CoinHeader from './CoinHeader';
import { findByTestAttr } from '../../../../Utils';
const setUp = (props={}) => {
    const component = shallow(<CoinHeader {...props} />);
    return component
}
describe('<CoinHeader />',  () => {
    describe('With Props', () => {
        let component;
        beforeEach(() => {
            const props = { 
                coin: {
                    name: "Bitcoin",
                    price: 2000,
                    iconUrl: "testurl.com",
                    symbol: "BTC",
                    change: 1.2
                }
             }
            component = setUp(props);
        });
        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'coinHeaderContainer');
            expect(wrapper.length).toBe(1);
        });
    })
    describe('Without Props',  () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        it('Should return null', () => { 
            expect(component.type()).toEqual(null);
        });
    })
})