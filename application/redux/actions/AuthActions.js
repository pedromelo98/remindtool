import * as CONSTANTS from 'application/redux/Constants.js'

export function setUser(user) {

    return {
        type: CONSTANTS.SET_USER,
        user
    }
}