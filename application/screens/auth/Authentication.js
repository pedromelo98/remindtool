import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import { translate } from 'application/i18n'


export default class Initial extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)

    }


    render() {
        return (
            <View style={styles.component} >
                <View style={styles.topContent} >
                    <Text style={styles.textWelcome} >Seja Bem-Vindo</Text>
                    <Text style={{ ...styles.textWelcome, alignSelf: 'flex-end' }} >ao app Reminds!</Text>
                </View>
                <View style={styles.content} >
                    <Text style={{ ...styles.textWelcome, fontSize: 22 }} >Como podemos te chamar?</Text>
                </View>
                <View style={styles.content} >
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: COLORS.main_green,
        justifyContent: 'center',
    },
    textWelcome: {
        fontSize: 34,
        fontWeight: 'bold',
        color: COLORS.white_yellow,
        fontFamily: FONTS.BALOOBHAI
    },
    topContent: {
        flex: 1,
        padding: 30
    },
    content: {
        flex: 1,
        padding: 10
    },
})
