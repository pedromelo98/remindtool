import React from 'react'
import 'react-native-gesture-handler';

import { SafeAreaView, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'

import Routes from 'application/routes/Routes'
import SplashScreen from 'application/screens/Splash'
import Store from 'application/redux/Store'

import * as COLORS from 'application/constants/colors.js'

export default class Main extends React.Component {
  constructor(props) {
    super(props)

  }
  state = {
    splash: false
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: true })
    }, 3000)
  }
  render() {

    const { splash } = this.state;

    return (
      <Provider store={Store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.main_color }}>
          <StatusBar barStyle="light-content" />
          {splash
            ? <Routes />
            : <SplashScreen />
          }
        </SafeAreaView >
      </Provider>
    )

  }
}
