import { IconAvailability, IconDeletedAccount, IconHours, IconJobs, IconPermissions, IconReviewsMain, IconsAdd, IconSettingServices, IconsRightArrow, IconsWallet, IconsWatch, IconTimeAndDate } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { handlePress } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
const cards = [
    { icon: IconReviewsMain, title: "Reviews", value: "4.6", nav: '/single-user-rating' },
    { icon: IconJobs, title: "Jobs", value: "323" },
];

const menuItems: any = [
    { id: 1, label: "Services", Icon: IconSettingServices, nav: "/(setting)" },
    { id: 2, label: "Permissions", Icon: IconPermissions, nav: "/(setting)/permissions" },
    { id: 3, label: "Availability", Icon: IconAvailability, nav: "/(setting)/availability" },
    { id: 4, label: "Delete Account", Icon: IconDeletedAccount, nav: "/(setting)/deleted_account_modal" },
]

export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar title='Manage Employee' call={true} route={() => handlePress()} />
            <View style={tw` flex-1`} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`gap-5`}>
                    {/* emp */}
                    <Pressable  >
                        <View style={tw` bg-primaryBg rounded-xl border border-gray/30 p-3 gap-4 `}>
                            <View style={tw`flex-row justify-between gap-1.5 items-center`}>

                                <View style={tw`flex-row items-center gap-2`}>
                                    {/* Profile Image */}
                                    <Image
                                        source={require("@/assets/images/image.png")}
                                        style={tw`w-8 h-8 rounded-full`}
                                    />

                                    {/* Name + Rating */}
                                    <View style={tw`flex-col`}>
                                        <Text
                                            style={[
                                                tw`text-text12 text-black font-sfpro-700`
                                            ]}
                                        >
                                            Alex James
                                        </Text>
                                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>(123) 125-5219</Text>
                                    </View>
                                </View>
                                <View style={tw`flex-row items-center gap-2.5`}>
                                    <View style={tw`bg-[rgba(34,197,94,0.1)] rounded-full`}>
                                        <View style={tw`flex-row items-center justify-center px-3 py-1.5 gap-1.5`}>
                                            <View style={tw`bg-[#22C55E] h-2 w-2 rounded-full`} />
                                            <Text
                                                style={[
                                                    tw`text-text12 text-[#22c55e] font-sfpro-500`,
                                                ]}
                                            >
                                                Active
                                            </Text>
                                        </View>
                                    </View>
                                    {/* <SvgXml xml={IconsPhone} /> */}
                                </View>

                            </View>
                            {/* Stats */}
                            <View style={tw`flex-row gap-5 items-center`}>
                                <View style={tw`flex-row items-center gap-1`}>
                                    <SvgXml xml={IconHours} />
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <Text style={tw`text-text14 font-sfpro-700 text-black`}>65</Text>
                                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>Hours</Text>
                                    </View>
                                </View>


                                <View style={tw`flex-row items-center gap-1`}>
                                    <SvgXml xml={IconsWallet} />
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <Text style={tw`text-text14 font-sfpro-700 text-black`}>$561</Text>
                                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>Pay</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Pressable>

                    <Text style={tw`text-text14 text-black font-sfpro-700`}>
                        Overview
                    </Text>

                    <View style={tw`flex-row flex-wrap justify-between gap-4`}>
                        {cards.map((card, idx) => (
                            <TouchableOpacity
                                onPress={() => card?.nav && router?.push(card?.nav)}
                                key={idx}
                                style={tw`flex-1  bg-white border border-gray/30 rounded-xl p-3 gap-4`}
                            >
                                <View style={tw`flex-row items-center justify-between gap-2.5`}>
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <SvgXml xml={card.icon} />
                                        <Text style={tw`text-text14 font-sfpro-500 text-gray`}>
                                            {card.title}
                                        </Text>
                                    </View>

                                    <View>
                                        <SvgXml xml={IconsRightArrow} />
                                    </View>

                                </View>
                                <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>
                                    {card.value}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={tw`text-text14 text-black font-sfpro-700`}>
                        Settings
                    </Text>

                    <View style={tw`flex-col  justify-between`}>
                        <View style={tw`p-2.5 border border-gray/30 flex-col gap-2 rounded-xl`}>
                            {menuItems.map((item: any, index: any) => (
                                <TouchableOpacity
                                    key={index}
                                    style={tw`flex-row items-center  gap-2.5  rounded-xl p-2.5 `}
                                    onPress={() => router.push(item?.nav)}
                                    activeOpacity={0.7}
                                >
                                    <SvgXml xml={item?.Icon} />
                                    <View style={tw`flex-1 flex-row items-center justify-between `}>
                                        <Text
                                            style={[
                                                tw`text-text12 text-headingText font-sfpro-600`,

                                            ]}
                                        >
                                            {item?.label}
                                        </Text>
                                        <SvgXml xml={IconsRightArrow} />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <GlobalAddServices buttonText="Time off Request" title="Upcoming Time Off" onPress={() => router.push({ pathname: '/new-time-off-request', params: { from: "update_services" } })} icon={IconsAdd} bluebg={true} />

                    <View style={tw`flex-1 bg-[#fefefe]`}>
                        <View style={tw`w-full border border-[rgba(153,154,154,0.1)] p-3 rounded-lg gap-2`}>
                            {/* Title */}
                            <Text style={tw`text-text12 text-headingText font-sfpro-500`}>
                                Home Emergency
                            </Text>

                            {/* Tags */}
                            <View style={tw`flex-row gap-2`}>
                                {/* Time Tag */}
                                <View style={tw`flex-row items-center gap-1 bg-[rgba(153,154,154,0.1)] rounded-full px-2 py-1`}>
                                    <SvgXml xml={IconsWatch} />

                                    <Text style={tw`text-text10 text-gray font-sfpro-400`}>
                                        1h 15min
                                    </Text>
                                </View>

                                {/* Date Tag */}
                                <View style={tw`flex-row items-center gap-1 bg-[rgba(153,154,154,0.1)] rounded-full px-2 py-1`}>
                                    <SvgXml xml={IconTimeAndDate} />
                                    <Text style={tw`text-text10 text-gray font-sfpro-400`}>
                                        2025-01-15
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </PageWrapper>
    )
}