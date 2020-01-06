import React from 'react'
import 'react-native-gesture-handler';

import { SafeAreaView, StatusBar } from 'react-native'

import Routes from 'application/routes/Routes'
import SplashScreen from 'application/screens/Splash'

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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.main_green }}>
        <StatusBar barStyle="light-content" />
        {splash
          ? <Routes />
          : <SplashScreen />

        }
      </SafeAreaView >
    )

  }
}
