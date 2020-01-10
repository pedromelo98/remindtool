import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators'
import { connect } from 'react-redux';

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import { translate } from 'application/i18n'
import { setAlert } from 'application/redux/actions/AlertActions'


class Home extends React.Component {

    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)

    }

    state = {
        loading: true,
        nickName: ''
    }

    componentDidMount() {
        this.setState({ nickName: this.props.user, loading: false })
        this.props.setAlert({
            type: 'error',
            title: 'Errao',
            text: 'lorem epsum dolorem set amet'
        })

    }

    render() {
        if (this.state.loading) {
            return (
                <UIActivityIndicator
                    color={COLORS.white_yellow}
                    size={25}
                />
            )
        }
        return (
            <View style={styles.component} >
                <Text style={styles.textWelcome} >{`${translate("home.welcome")} ${this.state.nickName}!`}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    textWelcome: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontFamily: FONTS.BALOOBHAI,
        fontSize: 25,
    }
})

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
    }
)

export default connect(mapStateToProps, { setAlert })(Home)
