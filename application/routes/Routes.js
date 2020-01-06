import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from 'application/screens/Home'

import * as COLORS from 'application/constants/colors'
import { translate } from 'application/i18n'

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                title: translate("generalSettings.application_name"),
            }),
        }
    }, {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: COLORS.main_green
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
                color: COLORS.white
            }
        }
    })
);


export default Routes