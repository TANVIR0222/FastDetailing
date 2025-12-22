import { IconDelivery, IconResponse, IconSMS, IconSendE } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Array of cards
const cards = [
    {
        title: "New Customer Welcome",
        subtitle: "2 days ago",
        status: "Completed",
        statusColor: "#22C55E",
        stats: [
            { icon: IconSendE, value: "1,243", label: "Sent" },
            { icon: IconDelivery, value: "44%", label: "Delivery" },
            { icon: IconResponse, value: "14%", label: "Response" },
            { icon: IconSMS, value: "SMS", label: "Type" },
        ],
    },
    {
        title: "New Customer Welcome",
        subtitle: "5 days ago",
        status: "In Progress",
        statusColor: "#0087FF",
        stats: [
            { icon: IconSendE, value: "2,000", label: "Sent" },
            { icon: IconDelivery, value: "50%", label: "Delivery" },
            { icon: IconResponse, value: "20%", label: "Response" },
            { icon: IconSMS, value: "SMS", label: "Type" },
        ],
    },
    {
        title: "New Customer Welcome",
        subtitle: "10 days ago",
        status: "In Progress",
        statusColor: "#0087FF",
        stats: [
            { icon: IconSendE, value: "800", label: "Sent" },
            { icon: IconDelivery, value: "30%", label: "Delivery" },
            { icon: IconResponse, value: "5%", label: "Response" },
            { icon: IconSMS, value: "SMS", label: "Type" },
        ],
    },
];

export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar title='SMS Blast' addIiocns={true} route={() => router.push('/sms-campaigns')} />
            <ScrollView style={tw`flex-1`} contentContainerStyle={tw`gap-4`}>
                {cards.map((card, idx) => (
                    <View key={idx} style={tw`border flex-col gap-4 border-gray/30 p-4 rounded-xl`}>
                        {/* Header */}
                        <View style={tw`flex-row  justify-between items-start`}>
                            <View style={tw` `}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    {card.title}
                                </Text>
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    {card.subtitle}
                                </Text>
                            </View>
                            <View
                                style={[tw`rounded-[10px] px-2 py-1 justify-center items-center `, { backgroundColor: card.statusColor }]}
                            >
                                <Text style={tw`text-text10 font-sfpro-600 text-white`}>
                                    {card.status}
                                </Text>
                            </View>
                        </View>

                        {/* Stats Row */}
                        <View style={tw`flex-row flex-wrap justify-between  gap-4 `}>
                            {card.stats.map((item, index) => (
                                <View
                                    key={index}
                                    style={tw`w-[45%] flex-row items-center gap-2`} // 48% width for 2 per row with some gap
                                >
                                    <SvgXml xml={item.icon} width={20} height={20} />
                                    <View style={tw`gap-1 flex-row`}>
                                        <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                                            {item.value}
                                        </Text>
                                        <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                            {item.label}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                    </View>
                ))}
            </ScrollView>
        </PageWrapper>
    );
}
