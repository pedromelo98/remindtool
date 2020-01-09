import * as CONSTANTS from 'application/redux/Constants.js'

const INITIAL_STATE = {
    user: {},
}

function auth(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANTS.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}


export default auth;
