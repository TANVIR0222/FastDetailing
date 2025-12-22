import { IconsTruck } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import CustomerDetailsAndCall from '@/src/components/ui/status/CustomerDetailsAndCall'
import InfoCard from '@/src/components/ui/status/InvoiceCard'
import tw from '@/src/lib/tailwind'
import { invoiceCardsData } from '@/src/utils/all-dummy-data'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function Invoice() {
    return (
        <PageWrapper>
            <GlobalTopBar title='Invoice' />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`pb-10`}>
                <View style={tw`  border-gray/30 border overflow-hidden rounded-xl`} >
                    <View style={tw`bg-[#FFB700]   rounded-t-xl overflow-hidden`}>
                        <View style={tw`px-4 py-4 flex-row justify-between items-center `}>
                            <Text style={tw`text-white text-text14 font-sfpro-700 `}>Invoice #123456</Text>
                            <View style={tw` flex-row gap-2 items-center bg-bgWhite px-4 py-2 rounded-lg`}>
                                <Text style={tw` text-[#FFB700] text-text12 font-sfpro-400`}>Pending</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`  p-4 flex-col gap-4`} >

                        {/*  Customer Details */}
                        <CustomerDetailsAndCall />

                        {/* all Metho */}
                        <View style={tw`flex-row flex-wrap justify-between gap-4`}>
                            {invoiceCardsData.map((card, index) => (
                                <InfoCard
                                    key={index}
                                    icon={card.icon}
                                    title={card.title}
                                    value={card.value}
                                />
                            ))}
                        </View>

                        <View style={tw`w-full border border-borderPrimary p-4 rounded-lg bg-white gap-4`}>
                            <View style={tw`flex-col gap-2.5 p-2.5 bg-borderPrimary rounded-lg`}>
                                <View style={tw`flex-row items-center justify-between gap-2`}>
                                    {/* Customer Info */}
                                    <View style={tw`flex-row  items-center gap-2`}>
                                        <View>
                                            <Image source={require(`@/assets/images/Rectangle-34624894.png`)} style={tw`w-8 h-8 rounded-md`} />
                                        </View>
                                        <View style={tw`flex-col gap-0.5 `}>
                                            <Text style={tw`text-headingText text-text10 font-sfpro-600`}>2025 Tesla Model 3</Text>
                                            <View style={tw`flex-row -mt-1.5 items-center gap-0.5`}>
                                                <View style={tw`w-2 h-2 bg-[#1F36E7] rounded-full`} />
                                                <Text style={tw`text-headingText text-text9  font-sfpro-600`}>Blue</Text>
                                            </View>
                                        </View>
                                    </View>

                                    {/* Vehicle Type */}
                                    <View style={tw`flex-row items-center gap-0.5 bg-[#0087FF1A] px-1  rounded-full`}>
                                        {<SvgXml xml={IconsTruck} />}
                                        <Text style={tw` text-primaryColor text-text10 font-sfpro-400`}>Truck</Text>
                                    </View>
                                </View>

                                {/* Services Tags */}
                                <View style={tw`flex-row gap-2 flex-wrap`}>
                                    {["Cleaning", "Sweeping", "Washing"].map((service, idx) => (
                                        <Text
                                            key={idx}
                                            style={tw`px-1.5  py-0.5 rounded-full bg-borderPrimary text-gray text-text9 font-sfpro-600`}
                                        >
                                            {service}
                                        </Text>
                                    ))}
                                </View>
                            </View>


                            <View style={tw`flex-row items-center justify-between`}>
                                <View style={tw`flex-row items-center gap-2`}>
                                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-6 h-6 rounded-full`} resizeMode="cover" />
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>Kevin Peterson</Text>
                                </View>
                                <Text style={tw`text-text16 font-sfpro-700 text-primaryColor`}>$150.00</Text>
                            </View>
                        </View>

                        <View style={tw` `} >

                            <MainButton title='Collect Payment' bm={true} onPress={() => router.push('/payment_request_setting_modal')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
}