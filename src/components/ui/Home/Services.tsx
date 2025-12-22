import { IconsGray, IconsWatch } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const Services = () => {
    return (
        <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl mt-3`}>
            <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={IconsGray} />
                <View style={tw`flex-col gap-1.5`}>
                    <Text style={tw`text-headingText text-text14 font-sfpro-600`}>
                        Interior Details
                    </Text>
                    <View style={tw`bg-borderPrimary flex-row items-center justify-center gap-1 w-[70%] px-1 py-0.5 rounded-full`}>
                        <SvgXml xml={IconsWatch} />
                        <Text style={tw`text-gray text-text9 font-sfpro-400`}>
                            1h 15min
                        </Text>
                    </View>
                </View>
            </View>
            <View style={tw`flex-col gap-1.5 items-end`}>
                <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
                    $500.00
                </Text>
            </View>
        </View>
    )
}

export default Services