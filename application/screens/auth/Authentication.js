import React from 'react'

import { View, StyleSheet, Text, Animated } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import * as AsyncStorage from 'application/asyncStorage/AsyncStorage';
import { translate } from 'application/i18n'
import { setUser } from 'application/redux/actions/AuthActions'

import ReminditButton from 'application/components/ReminditButton'


class Authentication extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)
        this.animation = new Animated.Value(0.2)
    }

    state = {
        nickName: '',
        nickError: '',
        loadingButton: false
    }

    componentDidMount() {
        Animated.timing(this.animation, {
            toValue: 1,
            duration: 1000
        }).start()
    }

    async submit() {
        this.setState({ loadingButton: true })
        if (this.state.nickName === '' || this.state.nickName === ' ') {
            this.setState({ nickError: translate('introduction.inputError'), loadingButton: false })
            return
        }
        const response = await AsyncStorage.setUserNick(this.state.nickName)
        if (response) {
            this.props.setUser(this.state.nickName)
            this.setState({ nickName: '', loadingButton: false })
            this.props.navigation.navigate("Home")
            return
        }
        alert(response)
        return

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
                        onChangeText={(nickName) => this.setState({ nickName, nickError: '' })}
                        tintColor={COLORS.main_color}
                        fontSize={22}
                        labelFontSize={18}
                        error={this.state.nickError}
                    />
                </View>
                <View style={{ ...styles.content, alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                    <ReminditButton
                        onPress={() => this.submit()}
                        text={translate('buttons.start')}
                        width={140}
                        IconRight={<Icon name='chevron-right' size={20} color={COLORS.white} style={{ marginTop: 1 }} />}
                        loadingButton={this.state.loadingButton}
                    />
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

export default connect(null, { setUser })(Authentication)
