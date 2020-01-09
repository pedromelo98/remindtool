import React from 'react'

import { View, StyleSheet, Animated } from 'react-native'
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
        this.animatedValue = new Animated.Value(0)
        this.fontSize = this.animatedValue.interpolate({
            inputRange: [0, 0.5],
            outputRange: [20, 30]
        })
    }

    state = {
        loading: true,
        nickName: ''
    }

    componentDidMount() {
        this.animate()
        this.setState({ nickName: this.props.user, loading: false })
        this.props.setAlert({ title: 'Sucesso!', iconName: 'check-circle', text: 'Usuário cadastrado com sucesso.' })
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
                <Animated.Text style={{ ...styles.textWelcome, fontSize }} >{`${translate("home.welcome")} ${this.state.nickName}!`}</Animated.Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    component: {
        flex: 1,
        backgroundColor: COLORS.main_color,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
    },
    textWelcome: {
        fontWeight: 'bold',
        color: COLORS.white_yellow,
        fontFamily: FONTS.BALOOBHAI
    }
})

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
    }
)

export default connect(mapStateToProps, { setAlert })(Home)
