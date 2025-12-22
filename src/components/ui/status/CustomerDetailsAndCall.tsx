import { IconsEmail, IconsMessage, IconsPhone } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { handlePress } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const CustomerDetailsAndCall = () => {
    return (
        <View style={tw` bg-primaryBg rounded-xl border border-gray/30 p-2.5 gap-3`}>
            <View style={tw`flex-row gap-1.5 items-center justify-between`}>
                <View style={tw` flex-row gap-2 items-center `}>
                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-8 h-8 rounded-full`} resizeMode="cover" />
                    <View>

                        <Text style={tw`text-text12 font-sfpro-700 text-black`}>Alex James</Text>
                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>+92378868732468</Text>
                    </View>
                </View>
                <View style={tw`flex-row items-center gap-2.5`}>
                    <TouchableOpacity onPress={() => router.push('/common')} >
                        <SvgXml xml={IconsMessage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress()}>
                        <SvgXml xml={IconsPhone} width={24} height={24} />
                    </TouchableOpacity>
                </View>

            </View>
            {/* Stats */}
            <View style={tw`flex-row justify-between items-center  `}>
                <View style={tw`flex-row items-center gap-1 px-2 py-1 bg-borderPrimary rounded-xl`}>
                    <SvgXml xml={IconsEmail} />
                    <View style={tw`flex-row items-center gap-1`}>
                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>youremail@gmail.com</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default CustomerDetailsAndCall