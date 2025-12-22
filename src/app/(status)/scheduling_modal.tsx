import { IconTimeAndDate } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Scheduling_modal() {
    return (
        <Pressable
            onPress={() => router.back()}
            style={tw`flex-1 items-center justify-center bg-black/30`}
        >
            {/* White Popup Container */}
            <View style={tw` w-[90%]  justify-center  bg-white rounded-xl p-5 gap-4`}>

                {/* Title + Details */}
                <View style={tw`w-full items-center gap-4`}>
                    <View style={tw`w-full items-center gap-2.5`}>

                        {/* Icon */}
                        <View style={tw`items-center`}>
                            <Image source={require('@/assets/images/payment-status 2.png')} style={tw`h-24 w-24`} />
                        </View>

                        {/* Title */}
                        <Text style={tw`text-[#E71F2F] font-sfpro-700 text-text16 text-center capitalize`}>
                            Scheduling Conflict Detected
                        </Text>

                        {/* Description */}
                        <Text style={tw`text-text10 text-gray font-sfpro-400 text-center leading-5`}>
                            {`This recurring job conflicts with another\n scheduled appointment:`}
                        </Text>

                        {/* Date Tag */}
                        <View style={tw`flex-row items-center gap-2 px-2 py-2 rounded-full bg-borderPrimary`}>
                            <SvgXml xml={IconTimeAndDate} />
                            <Text style={tw`text-gray font-sfpro-400 text-text10`}>
                                Jan 15, 2025, 2:00 AM - 4:00 PM
                            </Text>
                        </View>
                    </View>

                    {/* Conflict Box */}
                    <View style={tw`w-full bg-gray-100/50 rounded-xl border border-gray p-4 gap-4`}>
                        {/* Job Info */}
                        <View style={tw`w-full gap-2.5`}>
                            <Text style={tw`text-text12 text-gray font-sfpro-500`}>Conflicting Job</Text>
                            <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>
                                Interior Detailing - Mercedes S-Class
                            </Text>
                        </View>

                        <View style={tw`border-t border-gray`} />

                        {/* Client Info */}
                        <View style={tw`w-full gap-2.5`}>
                            <Text style={tw`text-text12 text-gray font-sfpro-500`}>Client</Text>
                            <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                Sarah Johnson
                            </Text>
                        </View>

                        <View style={tw`border-t border-gray`} />

                        {/* Note */}
                        <Text style={tw`text-text12 text-gray font-sfpro-500 leading-5`}>
                            To resolve this conflict, you can reschedule this recurring job or the conflicting
                            appointment.
                        </Text>
                    </View>
                </View>

                {/* Buttons */}
                <View style={tw`w-full flex-row gap-4`}>
                    <TouchableOpacity style={tw`flex-1 bg-blue-500 rounded-xl py-2.5 items-center`}>
                        <Text style={tw`text-white text-text14 font-sfpro-700`}>Reschedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-1 border border-[#E71F2F] rounded-xl py-2.5 items-center`}>
                        <Text style={tw`text-[#E71F2F] text-text14 font-sfpro-700`}>View Conflict</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => router.back()}
                    style={tw`border border-primaryColor rounded-xl py-2.5 items-center`}
                >
                    <Text style={tw`text-primaryColor text-text14 font-sfpro-700`}>Close</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}