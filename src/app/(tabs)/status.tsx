import { IconCustomer, IconDecreaseing, IconIncreaseing, IconRecurring, IconRevenue, IconReviews, IconsStatusRightArrow } from '@/assets/Icons'
import PageWrapper from '@/src/components/PageWrapper'
import DateSlider from '@/src/components/ui/status/DateSlider'
import LinearChart from '@/src/components/ui/status/LinearChart'
import { statusTabs } from '@/src/lib/all-tabs'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Status() {
    const [activeTab, setActiveTab] = useState<string>('Today');
    const employees = [
        {
            id: 1,
            name: "Alex James",
            jobs: "12 Jobs",
            amount: "$150",
            percent: "42%",
            percentColor: "text-green-500",
            bgColor: "bg-green-100",
            icon: IconIncreaseing,
        },
        {
            id: 2,
            name: "Alex James",
            jobs: "12 Jobs",
            amount: "$150",
            percent: "22%",
            percentColor: "text-red-500",
            bgColor: "bg-red-100",
            icon: IconDecreaseing,
        },
        {
            id: 3,
            name: "Alex James",
            jobs: "12 Jobs",
            amount: "$150",
            percent: "22%",
            percentColor: "text-red-500",
            bgColor: "bg-red-100",
            icon: IconDecreaseing,
        },
    ];

    return (
        <PageWrapper>
            <View style={tw` flex-1`}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw` flex-col gap-4 pb-10`} >
                    <View style={tw`flex-col gap-1`}>
                        <Text style={tw`text-headingText text-text18 font-sfpro-900`}>
                            Statistics
                        </Text>
                    </View>
                    <View style={tw`border p-4 border-gray/30 rounded-xl`}>
                        <View style={tw`flex-row border-b border-borderPrimary`}>
                            {statusTabs.map((tab) => {
                                const isActive = activeTab === tab
                                return (
                                    <TouchableOpacity
                                        key={tab}
                                        onPress={() => setActiveTab(tab)}
                                        style={tw.style(
                                            "flex-1 py-2 rounded-md mb-3",
                                            isActive ? "bg-primaryColor" : "bg-white"
                                        )}
                                    >
                                        <Text
                                            style={tw.style(
                                                "text-center font-sfpro-700 text-text12",
                                                isActive ? "text-white" : "text-primaryColor"
                                            )}
                                        >
                                            {tab}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        {/*  */}
                        <DateSlider />
                    </View>


                    <View style={tw`flex-row flex-1 flex-wrap items-center justify-between gap-4`}>
                        {[
                            {
                                id: 1,
                                title: 'Customers',
                                icon: IconCustomer,
                                value: '27',
                                percent: '12.1%',
                                percentColor: 'text-bgGreen',
                                percentBg: 'bg-[#22C55E1A]',
                                arrow: IconIncreaseing,
                                link: '/(status)',
                            },
                            {
                                id: 2,
                                title: 'Recurring',
                                icon: IconRecurring,
                                value: '323',
                                percent: '42%',
                                percentColor: 'text-bgGreen',
                                percentBg: 'bg-[#22C55E1A]',
                                arrow: IconIncreaseing,
                                link: '/recurring-jobs',
                            },
                            {
                                id: 3,
                                title: 'Revenue',
                                icon: IconRevenue,
                                value: '$1,323',
                                percent: '22%',
                                percentColor: 'text-[#E71F2F]',
                                percentBg: 'bg-[#E71F2F1A]',
                                arrow: IconDecreaseing,
                                link: '/status-invoice',
                            },
                            {
                                id: 4,
                                title: 'Reviews',
                                icon: IconReviews,
                                value: '4.6',
                                percent: '12.1%',
                                percentColor: 'text-[#E71F2F]',
                                percentBg: 'bg-[#E71F2F1A]',
                                arrow: IconDecreaseing,
                                link: '/all-reviews',
                            },
                        ].map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                style={tw`bg-white border border-gray/30 p-2.5 rounded-xl gap-3 w-[47%]`}
                                onPress={() => router.push(item.link)}
                            >
                                {/* Top Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <SvgXml xml={item.icon} />
                                        <Text style={tw`text-text14 text-gray font-sfpro-600`}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <SvgXml xml={IconsStatusRightArrow} />
                                </View>

                                {/* Bottom Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>
                                        {item.value}
                                    </Text>
                                    <View
                                        style={tw`flex-row items-center ${item.percentBg} rounded-[10px] px-2 py-2 gap-1`}
                                    >
                                        <Text
                                            style={tw`text-text10 leading-3 ${item.percentColor} font-sfpro-600`}
                                        >
                                            {item.percent}
                                        </Text>
                                        <SvgXml xml={item.arrow} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>


                    < View style={tw` `} ><LinearChart /></View>
                    {/* Revenue */}
                    <View style={tw`flex-1 `}>
                        <View style={tw`flex-1 flex-col gap-4 border border-gray/30 rounded-xl bg-white p-3`}>
                            {/* Title */}
                            <Text style={tw`text-headingText text-text16 font-sfpro-700`}>
                                Revenue Trend
                            </Text>

                            {/* Employee Cards */}
                            <View style={tw`gap-4`}>
                                {employees.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={tw`flex-row items-center justify-between border border-gray/30 rounded-xl bg-white p-2.5`}
                                            onPress={() => router.push('/(status)/customer-details')}
                                        >
                                            {/* Left: Profile */}
                                            <View style={tw`flex-row items-center gap-2`}>
                                                <Image
                                                    source={require("@/assets/images/image.png")}
                                                    style={tw`w-9 h-9 rounded-full`}
                                                />
                                                <View>
                                                    <Text style={tw`text-text12  font-sfpro-700 text-headingText`}>
                                                        {item.name}
                                                    </Text>
                                                    <Text style={tw`text-text10 font-sfpro-400  text-gray`}>
                                                        {item.jobs}
                                                    </Text>
                                                </View>
                                            </View>

                                            {/* Right: Amount + Percent */}
                                            <View style={tw`items-end gap-1`}>
                                                <Text style={tw`text-text12  font-sfpro-700 text-headingText`}>
                                                    {item.amount}
                                                </Text>
                                                <View
                                                    style={tw`flex-row items-center gap-1 rounded-full px-2 py-0.5 ${item.bgColor}`}
                                                >
                                                    <Text style={tw`text-text10 font-sfpro-400  ${item.percentColor}`}>
                                                        {item.percent}
                                                    </Text>
                                                    <SvgXml xml={item?.icon} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>



        </PageWrapper>
    )
}