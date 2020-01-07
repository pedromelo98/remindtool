import React from 'react'

import { View, StyleSheet } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators'
import AsyncStorage from '@react-native-community/async-storage';

import * as COLORS from 'application/constants/colors'
import * as KEYS from 'application/constants/keys'

import AuthenticationScreen from 'application/screens/auth/Authentication'



export default class Auth extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)

    }

    state = {
        user: false
    }

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem(KEYS.USER_NAME)
            if (value !== null) {
                this.setState({ user: value })
                this.props.navigation.navigate("Home")
            } else {
                this.setState({ user: value })
            }
        } catch (e) {
            this.setState({ user: null })
        }
    }


    render() {
        if (this.state.user === false) {
            return (
                <View style={styles.component} >
                    <UIActivityIndicator
                        color={COLORS.white_yellow}
                        size={40}
                    />
                </View>
            )
        }
        if (this.state.user === null) {
            return (
                <AuthenticationScreen navigation={this.props.navigation} />
            )
        }
        return (
            <View style={styles.component} >
                <UIActivityIndicator
                    color={COLORS.white_yellow}
                    size={40}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: COLORS.main_green,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
