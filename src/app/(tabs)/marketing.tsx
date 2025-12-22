import { IconEmailBlast, IconFlows, IconQRCodest, IconSMSBlast, IconsRightArrow } from '@/assets/Icons'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const cardData = [
    {
        id: 1, title: "Email Blast", value: "100", icon: IconEmailBlast, router: "/(marketing)"
    },
    {
        id: 2, title: "SMS Blast", value: "40", icon: IconSMSBlast, router: "/(marketing)/sms-blast"
    },
    {
        id: 3, title: "QR Codes", value: "60", icon: IconQRCodest, router: "/(marketing)/qr-code"
    },
    {
        id: 4, title: "Flows", value: "60", icon: IconFlows, router: "/(marketing)/marketing-flows"
    },
];

const data = [
    {
        title: "New Customer Sign up",
        subtitle: "Custom email sent to 123 customer",
    },
    {
        title: "Customer Infection",
        subtitle: "Custom email sent to 1,424 customers",

    },
    {
        title: "New Customer Sign up",
        subtitle: "Custom email sent to 1,424 customers",

    },
];


export default function marketing() {
    return (
        <PageWrapper>
            <View style={tw`flex-1 w-full  gap-4 pt-4`}>
                {/* Title */}
                <Text style={tw`text-text18 font-sfpro-900 text-headingText`}>Marketing</Text>

                {/* First Row */}
                <View style={tw`gap-4`}>
                    {/**  */}
                    {cardData.reduce((rows: any[], item, index) => {
                        if (index % 2 === 0) rows.push([item]);
                        else rows[rows.length - 1].push(item);
                        return rows;
                    }, []).map((row, rowIndex) => (
                        <View key={rowIndex} style={tw`flex-row gap-4`}>
                            {row.map((card: any) => (
                                <TouchableOpacity
                                    key={card.id}
                                    style={tw`flex-1 rounded-2xl border border-gray/30 bg-white p-2.5 gap-3`}
                                    onPress={() => router.push(card?.router)}
                                >
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <SvgXml xml={card.icon} />
                                        <Text style={tw`text-text14 font-sfpro-500 text-gray`}>
                                            {card.title}
                                        </Text>
                                    </View>
                                    <View style={tw`flex-row items-center justify-between`}>
                                        <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>
                                            {card.value}
                                        </Text>
                                        <SvgXml xml={IconsRightArrow} />
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>

                {/* Recent Activity */}
                <View style={tw`gap-4`}>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                            Recent Activity
                        </Text>
                        <Pressable style={tw`rounded-md bg-[#0087FF1A] px-2 py-1`}>
                            <Text style={tw`text-text12 font-sfpro-600 text-primaryColor`}>
                                View All
                            </Text>
                        </Pressable>
                    </View>

                    <View style={tw`gap-3`}>
                        {data.map((item, index) => (
                            <View
                                key={index}
                                style={tw`rounded-xl border border-gray/30 bg-white px-4 py-3`}
                            >
                                <Text style={tw`text-text14 font-sfpro-600 text-headingText`}>
                                    {item.title}
                                </Text>
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    {item.subtitle}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </PageWrapper>
        // <View>
        //     <Text>marketing</Text>
        // </View>
    )
}