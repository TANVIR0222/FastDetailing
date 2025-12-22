import { IconsPurpleTick, IconsRightArrow } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function ManageSubscription() {
    const items = [
        { id: 1, label: "Change Subscription", nav: '/account-info/change-subscription' },
        { id: 2, label: "Change Payment Method", nav: '/account-info/change-payment-method' },
    ];
    return (
        <PageWrapper>
            <GlobalTopBar title='Manage Subscription' />
            <View style={tw` flex-col flex-1  justify-between  `}>
                <View style={tw` flex-col gap-5 `}>
                    <ScrollView contentContainerStyle={tw` gap-4 border border-[#999A9A4D] rounded-xl `}>
                        {/* Billing Summary */}
                        <View style={tw`bg-[#523BE4]  overflow-hidden rounded-xl`}>
                            <View style={tw`px-4 py-4 flex-row justify-between items-center `}>
                                <Text style={tw`text-white text-text14 font-sfpro-700 `}>Billing Summary</Text>
                                <View style={tw` flex-row gap-2 items-center bg-bgWhite p-3 rounded-xl`}>
                                    <SvgXml xml={IconsPurpleTick} />
                                    <Text style={tw` text-[#523BE4] text-text12 font-sfpro-400`}>Premium Monthly</Text>
                                </View>
                            </View>
                            <View style={tw`bg-white px-4 py-3`}>
                                <View style={tw`flex-row justify-between py-4`}>
                                    <Text style={tw` text-gray text-text12 font-sfpro-600`}>Amount</Text>
                                    <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>$45.55</Text>
                                </View>
                                <View style={tw`border-t border-gray/30  `} />
                                <View style={tw`flex-row justify-between py-4 `}>
                                    <Text style={tw` text-gray text-text12 font-sfpro-600`}>Billing Cycle</Text>
                                    <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>Renew every month</Text>
                                </View>
                                <View style={tw`border-t border-gray/30 `} />
                                <View style={tw`flex-row justify-between py-4 `}>
                                    <Text style={tw` text-gray text-text12 font-sfpro-600`}>Next Renewal</Text>
                                    <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>Aug 8, 2025</Text>
                                </View>
                                <View style={tw`border-t border-gray/30 `} />
                                <View style={tw`flex-row justify-between py-4 `}>
                                    <Text style={tw` text-gray text-text12 font-sfpro-600`}>Billing Cycle</Text>
                                    <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>Renew every month</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <View
                        style={tw`w-full border border-[#999A9A4D] rounded-xl p-2.5 gap-2`}
                    >
                        {items.map((item) => (
                            <Pressable
                                key={item.id}
                                onPress={() => router.push(item?.nav)}
                                style={tw`flex-row items-center justify-between rounded-xl p-3 gap-3`}
                            >
                                <View style={tw`flex-1`}>
                                    <Text
                                        style={tw`text-text12 font-sfpro-600 text-headingText`}
                                    >
                                        {item.label}
                                    </Text>
                                </View>

                                <SvgXml xml={IconsRightArrow} />
                            </Pressable>
                        ))}
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.push('/account-info/cancel-subscription')} style={tw` border-primaryColor border py-3.5 items-center justify-center rounded-xl mb-2`} >
                    <Text style={tw`text-text12  font-sfpro-700 text-primaryColor`} >Cancel Subscription</Text>
                </TouchableOpacity>
            </View>
        </PageWrapper>
    )
}