import { IconCampaignOverview, IconCost, IconGroup, IconNewPayment, IconPaymentMethod, IconUpdate } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar title='Review & pay' />
            <View style={tw`flex-1`} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`gap-4 pb-10`} >
                    <View style={tw` p-4 gap-4 border border-[#999a9a4d] rounded-xl`}>
                        {/* Campaign Overview */}
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconCampaignOverview} />

                            <Text style={tw`flex-1 text-text12 font-sfpro-500 text-gray`}>
                                Campaign Overview
                            </Text>
                        </View>

                        {/* Message */}
                        <View style={tw`flex-col gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-headingText`}>
                                Message
                            </Text>
                            <View style={tw`flex-row flex-wrap gap-1 items-center`}>
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>Hi </Text>

                                {/* Name tag + exclamation */}
                                <View style={tw`flex-row items-center gap-0.5`}>
                                    <View style={tw`bg-[#0087FF1A] px-1 border border-primaryColor rounded`}>
                                        <Text style={tw`text-text10 font-sfpro-400 text-textBlue`}>Name</Text>
                                    </View>
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>!</Text>
                                </View>

                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    Don't forget your appointment tomorrow at{' '}
                                </Text>

                                {/* Time tag */}
                                <View style={tw`bg-[#0087FF1A] px-1 border border-primaryColor rounded`}>
                                    <Text style={tw`text-text10 font-sfpro-400 text-textBlue`}>Time</Text>
                                </View>

                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    We can't wait to see you!
                                </Text>
                            </View>
                        </View>

                        {/* Button */}
                        <View
                            style={tw`bg-[#0087FF1A] rounded-xl py-3 px-4 text-start`}
                        >
                            <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                Schedule - <Text style={tw`text-text12 font-sfpro-400`}>Send immediately</Text>
                            </Text>
                        </View>
                    </View>

                    {/* group */}
                    <View style={tw` p-4 gap-4 border border-[#999a9a4d] rounded-xl`}>
                        {/* Campaign Overview */}
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconGroup} />

                            <Text style={tw`flex-1 text-text12 font-sfpro-500 text-gray`}>
                                Campaign Overview
                            </Text>
                        </View>

                        {/* Message */}
                        <View style={tw`flex-col gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-headingText`}>
                                Targeting
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                Haven't booked within 4weeks, Have booked within 1week, Booked haircut
                            </Text>
                        </View>
                        <View style={tw`flex-col gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-headingText`}>
                                Exclusions
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                Spenders under $0, Recent cancellation
                            </Text>
                        </View>

                        {/* Button */}
                        <View
                            style={tw`bg-[#0087FF1A] rounded-xl py-3 px-4 text-start`}
                        >
                            <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                Estimated Recipients: <Text style={tw`text-text12 font-sfpro-400`}>142</Text>
                            </Text>
                        </View>
                    </View>

                    {/* Cost Breakdown */}
                    <View style={tw` p-4 gap-4 border border-[#999a9a4d] rounded-xl`}>
                        {/* Campaign Overview */}
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconCost} />

                            <Text style={tw`flex-1 text-text12 font-sfpro-500 text-gray`}>
                                Cost Breakdown
                            </Text>
                        </View>

                        {/* Message */}
                        <View style={tw`flex-row items-center justify-between gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-headingText`}>
                                Recipients: 142
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-primaryColor`}>
                                $0.05 each
                            </Text>
                        </View>
                        <View
                            style={[
                                tw``,
                                {
                                    borderTopWidth: 1,
                                    borderTopColor: "#DBE1E4",
                                    borderStyle: "dashed",
                                },
                            ]}
                        />
                        <View style={tw`flex-row items-center justify-between gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-headingText`}>
                                Total Cost
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-primaryColor`}>
                                $7.10
                            </Text>
                        </View>

                    </View>

                    {/* payment */}
                    <View style={tw`p-4 border flex-col gap-4 border-[#999a9a4d]  rounded-xl`}>
                        {/* Campaign Overview */}
                        <View style={tw`flex-row  items-center justify-between`}>
                            <View style={tw`flex-row items-center gap-2 `}>
                                <SvgXml xml={IconPaymentMethod} />
                                <Text style={tw`text-text12 font-sfpro-500 text-gray`}>
                                    Payment Method
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => router.push('/account-info/change-payment-method')}
                                style={tw`rounded-md px-2 py-1 gap-1 flex-row items-center justify-center bg-[#0087FF1A] `}
                            >
                                <SvgXml xml={IconUpdate} />
                                <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                    Update
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={tw`flex-row items-center bg-white border border-borderPrimary p-3  gap-1.5 rounded-xl`}
                        >
                            <SvgXml xml={IconNewPayment} />
                            <View>
                                <Text style={tw`text-headingText font-sfpro-600 text-text12`}>
                                    Method
                                </Text>
                                <Text style={tw`text-gray font-sfpro-400 text-text10`}>
                                    **** **** **** 5478
                                </Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View>
                    <View style={tw`pt-2`}>
                        <View style={tw``}>
                            <TouchableOpacity
                                onPress={() => router.push({
                                    pathname: '/payment_and_teplate_modal',
                                    params: { t: 'template' }
                                })}
                                style={tw`bg-[#0087FF1A]  rounded-xl py-4 gap-2.5 flex-row items-center justify-center`}
                            >
                                <Text style={tw`text-text12 font-sfpro-600 text-primaryColor`}>
                                    Save Template
                                </Text>
                            </TouchableOpacity>

                        </View>
                        {/* MainButton */}
                        <View style={tw`mt-4`}>
                            <MainButton title="Track Delivery Status" bm={true} onPress={() => router.push('/payment_and_teplate_modal')} />
                        </View>
                    </View>
                </View>
            </View>
        </PageWrapper>
    )
}