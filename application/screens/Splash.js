import React from 'react'
import { View } from 'react-native'

import remindanimation from 'application/images/remindanimation.json'

import Lottie from 'lottie-react-native'

export default Splash = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <Lottie
                source={remindanimation}
                autoPlay
                resizeMode="contain"
            />
        </View>
    )
}
