import AsyncStorage from '@react-native-community/async-storage';

import * as KEYS from 'application/constants/keys'

export const setUserNick = async (nick) => {
    try {
        await AsyncStorage.setItem(KEYS.USER_NAME, nick).then(() => true)
        return true
    } catch (e) {
        return false
    }
}

export const getUserNick = async () => {
    try {
        const value = await AsyncStorage.getItem(KEYS.USER_NAME)
        return value
    } catch (e) {
        return { error: e }
    }
}

export const removeUser = async () => {
    await AsyncStorage.removeItem(KEYS.USER_NAME)
}