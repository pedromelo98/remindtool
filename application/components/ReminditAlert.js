import React from 'react'

import { StyleSheet, View, Dimensions, Animated, Text } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native'

import successanimation from 'application/assets/images/successanimation.json'
import erroranimation from 'application/assets/images/erroranimation.json'
import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'
import { setAlert } from 'application/redux/actions/AlertActions'

class ReminditAlert extends React.Component {

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
    }

    state = {
        dropAlert: false,
        alertColor: COLORS.successColor,
        alertSource: successanimation
    }

    animate() {
        Animated.timing(this.animatedValue, {
            toValue: 120,
            timing: 2000,
        }).start()
        setTimeout(() => {
            Animated.timing(this.animatedValue, {
                toValue: 0,
                timing: 2000,
            }).start()
            this.setState({ dropAlert: false })
        }, 4000)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let dropAlert = prevState.dropAlert
        if (nextProps.dropAlert && nextProps.dropAlert !== dropAlert) {
            dropAlert = nextProps.dropAlert
        }
        return {
            dropAlert,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.dropAlert && prevState.dropAlert !== this.state.dropAlert) {
            this.newAlert()
            this.animate()
            this.props.setAlert(false)
        }
    }

    animatedStyle = {
        height: this.animatedValue
    }

    newAlert() {
        if (this.state.dropAlert) {
            switch (this.state.dropAlert.type) {
                case 'success':
                    this.setState({ alertColor: COLORS.successColor, alertSource: successanimation })
                    break
                case 'error':
                    this.setState({ alertColor: COLORS.errorColor, alertSource: erroranimation })
                    break
            }
        }
    }

    render() {
        return (
            <Animated.View style={{ ...this.styles.alert, height: this.animatedValue, backgroundColor: this.state.alertColor }}>
                {this.state.dropAlert &&
                    <Lottie
                        source={this.state.alertSource}
                        autoPlay
                        loop={false}
                        resizeMode="contain"
                        style={{ width: 80, height: 80 }}
                    />
                }
                <View>
                    <Text style={{ ...this.styles.text, fontSize: 24, marginBottom: 0 }} >{this.state.dropAlert && this.state.dropAlert.title}</Text>
                    <Text style={{ ...this.styles.text }} >{this.state.dropAlert && this.state.dropAlert.text}</Text>
                </View>
            </Animated.View>
        )
    }

    screenWidth = Math.round(Dimensions.get('window').width);

    styles = StyleSheet.create({
        alert: {
            top: 0,
            paddingLeft: 50,
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: this.screenWidth,
            zIndex: 10,
        },
        text: {
            fontSize: 16,
            paddingLeft: 10,
            color: COLORS.white,
            fontFamily: FONTS.ALATSI,
            marginBottom: 15,
        }
    })
}

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
        dropAlert: state.AlertReducer.dropAlert
    }
)

export default connect(mapStateToProps, { setAlert })(ReminditAlert)
