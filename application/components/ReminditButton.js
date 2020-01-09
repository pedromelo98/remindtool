import React from 'react'

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators'

import * as COLORS from 'application/constants/colors'

export default class ReminditButton extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const { text, IconRight, IconLeft, onPress, loadingButton, loadingColor } = this.props
        if (loadingButton) {
            return (
                <View style={{ ...this.styles.button, backgroundColor: '' }} >
                    <UIActivityIndicator
                        color={loadingColor ? loadingColor : COLORS.main_color}
                        size={25}
                    />
                </View>
            )
        }
        return (
            <TouchableOpacity style={this.styles.button} onPress={onPress} >
                {IconLeft && IconLeft}
                <Text style={this.styles.text} >{text.toUpperCase()}</Text>
                {IconRight && IconRight}
            </TouchableOpacity>
        )
    }

    styles = StyleSheet.create({
        button: {
            width: this.props.width ? this.props.width : 100,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 10,
            backgroundColor: this.props.color ? this.props.color : COLORS.main_color,
            borderRadius: 10,
            elevation: 4,
            shadowColor: COLORS.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            color: this.props.textColor ? this.props.textColor : COLORS.white,
        },
    })
}
