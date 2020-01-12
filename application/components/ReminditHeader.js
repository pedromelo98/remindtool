import React from 'react'

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import * as COLORS from 'application/constants/colors'
import * as FONTS from 'application/constants/fonts'

export default class ReminditHeader extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const { onPress } = this.props
        return (
            <View style={this.styles.header} >
                <TouchableOpacity onPress={onPress} >
                    <Icon name='bars' size={32} color={COLORS.white} />
                </TouchableOpacity>
                <Text style={this.styles.text} >Remindit</Text>
            </View>
        )
    }

    styles = StyleSheet.create({
        header: {
            backgroundColor: COLORS.main_color,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
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
            color: COLORS.white,
            fontFamily: FONTS.BALOOBHAI,
            textAlign: 'center',
        }
    })
}
