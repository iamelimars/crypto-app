import * as actionTypes from './actions/actions';

const initialState = {
    cryptos: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.LOAD:
            return {

            }
            break;
    
        default:
            break;
    }
    return state;
}

export default reducer