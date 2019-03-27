import React from 'react';
import { shallow } from 'enzyme';
import CoinList from './CoinList';
import { findByTestAttr } from '../../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<CoinList {...props} />);
    return component;
}

describe("<CoinList />", () => {
    describe("With Props", () => {
        let component;
        beforeEach(() => {
            const props = {
                coins: [{
                    id: 1,
                    slug: 'bitcoin-btc',
                    symbol: 'BTC',
                    name: 'Bitcoin',
                    description: 'Bitcoin is the first decentralized digital currency that can be sent through the internet globally without using financial institutions like banks. The network is controlled by many of its users, instead of a few entities.',
                    color: '#f7931A',
                    iconType: 'vector',
                    iconUrl: 'https://cdn.coinranking.com/Sy33Krudb/btc.svg',
                    websiteUrl: 'https://bitcoin.org',
                    confirmedSupply: true,
                    numberOfMarkets: 9713,
                    numberOfExchanges: 201,
                    type: 'coin',
                    volume: 12376457617,
                    marketCap: 70001696203,
                    price: '3975.09923042',
                    circulatingSupply: 17610050,
                    totalSupply: 17610050,
                    approvedSupply: true,
                    firstSeen: 1330214400000,
                    change: 0.66,
                    rank: 1,
                    history: [
                      '3949.0774558666',
                      '3958.7079132365',
                      '3963.9632184973',
                      '3964.8663851327',
                      '3964.2735242381',
                      '3967.780710813',
                      '3966.914277766',
                      '3965.6076779201',
                      '3963.3297963497',
                      '3955.8858833733',
                      '3949.3558870973',
                      '3960.0491589978',
                      '3959.8623556169',
                      '3958.6003085394',
                      '3953.1787228092',
                      '3949.987624889',
                      '3947.3445427851',
                      '3950.7644375613',
                      '3962.1549448031',
                      '3969.6614283467',
                      '3969.5036762126',
                      '3969.0154253255',
                      '3973.3755110598',
                      '3974.2704880901',
                      '3974.0228334682',
                      '3973.5479490868',
                      '3975.09923042'
                    ],
                    allTimeHigh: {
                      price: '19500.47124838819',
                      timestamp: 1513555200000
                    },
                    penalty: false
                  },
                  {
                    id: 2,
                    slug: 'bitcoin-btc',
                    symbol: 'BTC',
                    name: 'Bitcoin',
                    description: 'Bitcoin is the first decentralized digital currency that can be sent through the internet globally without using financial institutions like banks. The network is controlled by many of its users, instead of a few entities.',
                    color: '#f7931A',
                    iconType: 'vector',
                    iconUrl: 'https://cdn.coinranking.com/Sy33Krudb/btc.svg',
                    websiteUrl: 'https://bitcoin.org',
                    confirmedSupply: true,
                    numberOfMarkets: 9713,
                    numberOfExchanges: 201,
                    type: 'coin',
                    volume: 12376457617,
                    marketCap: 70001696203,
                    price: '3975.09923042',
                    circulatingSupply: 17610050,
                    totalSupply: 17610050,
                    approvedSupply: true,
                    firstSeen: 1330214400000,
                    change: 0.66,
                    rank: 1,
                    history: [
                      '3949.0774558666',
                      '3958.7079132365',
                      '3963.9632184973',
                      '3964.8663851327',
                      '3964.2735242381',
                      '3967.780710813',
                      '3966.914277766',
                      '3965.6076779201',
                      '3963.3297963497',
                      '3955.8858833733',
                      '3949.3558870973',
                      '3960.0491589978',
                      '3959.8623556169',
                      '3958.6003085394',
                      '3953.1787228092',
                      '3949.987624889',
                      '3947.3445427851',
                      '3950.7644375613',
                      '3962.1549448031',
                      '3969.6614283467',
                      '3969.5036762126',
                      '3969.0154253255',
                      '3973.3755110598',
                      '3974.2704880901',
                      '3974.0228334682',
                      '3973.5479490868',
                      '3975.09923042'
                    ],
                    allTimeHigh: {
                      price: '19500.47124838819',
                      timestamp: 1513555200000
                    },
                    penalty: false
                  }]
            }
            component = setUp(props);
        });
    
        it("Should render without errors", () => {        
            const wrapper = findByTestAttr(component, 'coinList');
            expect(wrapper.length).toBe(1);
        });
    })

    describe("Without Props",  () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it("Should return null", () => {        
            expect(component.type()).toEqual(null);
        });

    })
    

   
})