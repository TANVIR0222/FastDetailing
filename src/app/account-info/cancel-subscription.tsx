import { IconsPurpleTick } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const [selected, setSelected] = useState(null);

    const options = [
        "Too Expensive",
        "Not using it enough",
        "Found a better alternative",
        "Technical issues",
    ];

    return (
        <PageWrapper>
            <GlobalTopBar title='Cancel Subscription' />
            <View style={tw`flex-1 flex-col gap-5`} >
                <View style={tw` gap-4 border border-[#999A9A4D] rounded-xl `}>
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
                        </View>
                    </View>
                </View>
                <View style={tw` flex-1 flex-col justify-between`}>
                    <View style={tw``}>
                        <View style={tw` flex-col gap-4`}>
                            {/* Title */}
                            <View>
                                <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                                    Why Are you Cancelling? (Optional)
                                </Text>
                            </View>

                            {/* Options */}
                            <View style={tw`flex-col gap-4`}>
                                {options.map((item, index) => {
                                    const isActive = selected === index;
                                    return (
                                        <Pressable
                                            key={index}
                                            onPress={() => setSelected(index)}
                                            style={tw`flex-row items-center border border-gray/30 rounded-xl px-4 py-3 ${isActive ? "bg-primaryColor" : "bg-white"
                                                }`}
                                        >
                                            <Text
                                                style={tw`text-text12 font-sfpro-600 ${isActive ? "text-white" : "text-[#999A9A]"
                                                    }`}
                                            >
                                                {item}
                                            </Text>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/account-info/cancel_subscription_modal')} style={tw` border-primaryColor border py-3.5 items-center justify-center rounded-xl mb-2`} >
                        <Text style={tw`text-text12  font-sfpro-700 text-primaryColor`} >Cancel Subscription</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </PageWrapper>
    )
}