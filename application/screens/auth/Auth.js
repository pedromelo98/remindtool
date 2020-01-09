import React from 'react'

import { View, StyleSheet } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators'
import { connect } from 'react-redux';

import * as COLORS from 'application/constants/colors'
import * as AsyncStorage from 'application/asyncStorage/AsyncStorage'
import { setUser } from 'application/redux/actions/AuthActions'

import AuthenticationScreen from 'application/screens/auth/Authentication'



class Auth extends React.Component {

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
        //AsyncStorage.removeUser()
        user = await AsyncStorage.getUserNick()
        if (user !== null) {
            this.setState({ user })
            this.props.setUser(user)
            this.props.navigation.navigate("Home")
        } else {
            this.setState({ user })
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
        backgroundColor: COLORS.main_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
    }
)

export default connect(mapStateToProps, { setUser })(Auth)