import * as CONSTANTS from 'application/redux/Constants.js'

const INITIAL_STATE = {
    dropAlert: false,
}

function alert(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CONSTANTS.SET_ALERT:
            return {
                ...state,
                dropAlert: action.dropAlert
            }
        default:
            return state;
    }
}


export default alert;
