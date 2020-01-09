import React from 'react'

import { View, StyleSheet, Animated, Text } from 'react-native'

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import { translate } from 'application/i18n'


export default class Home extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
        this.fontSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5],
            outputRange: [20, 30]
        })
    }

    componentDidMount() {
        this.animate()
    }

    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start()
    }

    render() {
        const fontSize = this.fontSize
        return (
            <View style={styles.component} >
                <Animated.Text style={{ ...styles.textWelcome, fontSize }} >{translate("introduction.welcome")}</Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: COLORS.main_color,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textWelcome: {
        fontWeight: 'bold',
        color: COLORS.white_yellow,
        fontFamily: FONTS.PACIFICO
    }
})
