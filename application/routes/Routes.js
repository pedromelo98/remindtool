import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from 'application/screens/Home'
import AuthScreen from 'application/screens/auth/Auth'

import * as COLORS from 'application/constants/colors'
import * as KEYS from 'application/constants/keys'
import { translate } from 'application/i18n'

const Routes = createAppContainer(
    createStackNavigator({
        Auth: {
            screen: AuthScreen
        },
        Home: {
            screen: HomeScreen,
        },
    }, {
        initialRouteName: "Auth",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: COLORS.main_color
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