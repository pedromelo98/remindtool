import React from 'react'

import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';

import * as COLORS from 'application/constants/colors'
import { setAlert } from 'application/redux/actions/AlertActions'

class ReminditAlert extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    state = {
        dropAlert: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let dropAlert = prevState.dropAlert
        if (nextProps.dropAlert && nextProps.dropAlert !== dropAlert) {
            dropAlert = nextProps.dropAlert
        }
        return {
            dropAlert
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.dropAlert && this.state.dropAlert) {
            this.dropDownAlertRef.alertWithType(this.state.dropAlert.type, this.state.dropAlert.title, this.state.dropAlert.text);
            this.setState({ dropAlert: false })
            this.props.setAlert(false)
        }
    }

    render() {
        return (
            <View />
        )
    }

    styles = StyleSheet.create({

    })
}

const mapStateToProps = state => (
    {
        user: state.AuthReducer.user,
        dropAlert: state.AlertReducer.dropAlert
    }
)

export default connect(mapStateToProps, { setAlert })(ReminditAlert)
