import { IconsCla, IconsShpo } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const JobEveryOneCard = () => {
    return (
        <View style={tw`w-full border border-borderPrimary p-4 rounded-lg bg-white gap-4`}>
            {/* Row 1 */}
            <View style={tw`flex-row justify-between items-center`}>
                <View style={tw``}>
                    <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>Alex James</Text>
                    <Text style={tw`text-text10 text-gray font-sfpro-400`}>12 Apple Ln, Miami, FL</Text>
                </View>

                <View style={tw`px-2 py-1 rounded-full bg-[#0087ff1A] justify-center`}>
                    <Text style={tw`text-text10 text-primaryColor font-sfpro-400`}>Every 2 Weeks</Text>
                </View>
            </View>

            {/* Row 2 */}
            <View style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row items-center gap-2`}>
                    <SvgXml xml={IconsShpo} />
                    <Text style={tw`text-text10 text-headingText font-sfpro-600`}>In Shop</Text>
                </View>

                <View style={tw`flex-row items-center gap-1 px-2 h-6 rounded-full bg-borderPrimary justify-center`}>
                    <SvgXml xml={IconsCla} />
                    <Text style={tw`text-text10 text-gray font-sfpro-400`}>
                        Jan 15, 2025, 2:00 AM - 4:00 PM
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default JobEveryOneCard