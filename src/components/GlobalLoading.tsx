import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import tw from '../lib/tailwind'

const GlobalLoading = () => {
    return (
        <View style={tw` bg-primaryBg items-center justify-center flex-1`}>
            <ActivityIndicator size="large" color="#0087FF" />
        </View>
    )
}

export default GlobalLoading