import React from 'react'

import { View, StyleSheet, Text, Animated } from 'react-native'
import { TextField } from 'react-native-material-textfield';

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import { translate } from 'application/i18n'


export default class Initial extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)
        this.animation = new Animated.Value(0.2)
    }

    state = {
        nickName: '',
        nickError: ''
    }

    componentDidMount() {
        Animated.timing(this.animation, {
            toValue: 1,
            duration: 1000
        }).start()
    }

    submit() {
        if (this.state.nickName === '') {
            this.setState({ nickError: translate('') })
        }
    }


    render() {
        return (
            <View style={styles.component} >
                <Animated.View style={{ ...styles.topContent, flex: this.animation }} >
                    <Text style={styles.textWelcome} >{translate('introduction.welcome')}</Text>
                    <Text style={{ ...styles.textWelcome, alignSelf: 'flex-end' }} >{translate('introduction.welcomeToApp')}</Text>
                </Animated.View>
                <View style={styles.content} >
                    <Text style={{ ...styles.textWelcome, fontSize: 22, color: COLORS.black, }} >{translate('introduction.askNickname')}</Text>
                    <TextField
                        label={translate('introduction.nameLabel')}
                        value={this.state.nickName}
                        onChangeText={(nickName) => this.setState({ nickName })}
                        tintColor={COLORS.main_color}
                        fontSize={22}
                        labelFontSize={18}
                        error={this.state.nickError}
                    />
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
        backgroundColor: COLORS.white,
        justifyContent: 'center',
    },
    textWelcome: {
        fontSize: 34,
        fontWeight: 'bold',
        color: COLORS.white_yellow,
        fontFamily: FONTS.BALOOBHAI
    },
    topContent: {
        justifyContent: 'center',
        backgroundColor: COLORS.main_color,
        padding: 30,
        borderBottomStartRadius: 100,
        borderBottomEndRadius: 100,
        elevation: 5,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
})
