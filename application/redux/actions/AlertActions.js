import * as CONSTANTS from 'application/redux/Constants.js'

export function setAlert(dropAlert) {
    return {
        type: CONSTANTS.SET_ALERT,
        dropAlert
    }
}