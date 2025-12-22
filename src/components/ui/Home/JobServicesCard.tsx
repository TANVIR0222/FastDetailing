import { IconsResetBlue, IconsWatch } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import JobCategory from '../JobCategory'

const JobServicesCard = () => {
    return (
        <View style={tw`flex-col gap-4 mb-3 border border-[#999a9a4D] rounded-lg p-4 bg-white`}>


            {/* Vehicle Section */}
            <JobCategory
                customerName="2025 Tesla Model 3"
                customerColor="Blue"
                vehicleType="Truck"
            />

            {/* Service Section 2 (same as above, can be reused) */}
            <View style={tw`flex-row items-center gap-3 p-3 border border-borderPrimary rounded-lg`}>
                <View style={tw` flex-col flex-1 gap-2`}>
                    <View style={tw` flex-row items-center justify-between`}>
                        <Text style={tw`text-text12 font-medium text-headingText`}>Vacuum interior</Text>
                        <View style={tw`bg-borderPrimary px-2 py-0.5 rounded-full flex-row items-center gap-0.5`}>
                            <SvgXml xml={IconsWatch} />
                            <Text style={tw`text-text10 text-gray`}>1h 15min</Text>
                        </View>
                    </View>
                    <View style={tw`flex-row gap-3`}>
                        {["Interior", "Washing", "Cleaning"].map((item, index) => (
                            <View key={index} style={tw`bg-borderPrimary px-2 py-0.5 rounded-full flex-row items-center gap-0.5`} >
                                <Text style={tw`text-text10 text-gray`}>{item}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>

            {/* Avatar Section */}
            <View style={tw`flex-row items-center justify-between gap-2`}>
                <View style={tw`flex-row items-center gap-2`}>
                    <SvgXml xml={IconsResetBlue} />
                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-6 h-6 rounded-full`} resizeMode="cover" />
                    <Text style={tw`text-text10 font-medium text-gray`}>Kevin Peterson</Text>
                </View>
                <Text style={tw`text-text16 text-primaryColor font-sfpro-700`}>$150.00</Text>
            </View>
        </View>
    )
}

export default JobServicesCard