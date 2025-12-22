import {
    IconAlex,
    IconBlueLeftArrow,
    IconCasPayment,
    IconsPaid,
    IconTimeAndDate,
    IconTips,
    IconUserCard
} from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Switch, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const workersData = [
    {
        id: '#1521821',
        name: 'Alex James',
        status: 'Paid',
        tagText: 'Jun 26 2025',
        bgColor: '#22C55E',
        icons: IconsPaid,
        price: "$330.00"
    },
    {
        id: '#1521822',
        name: 'Alex James',
        status: 'Pending',
        tagText: 'Jun 26 2025',
        bgColor: '#FFB700',
        icons: IconAlex,
        price: "$330.00"
    },
    {
        id: '#1521823',
        name: 'Alex James',
        status: 'Cancelled',
        tagText: 'Jun 26 2025',
        bgColor: '#E71F2F',
        icons: IconAlex,
        price: "$330.00"
    },
]

export default function Payments() {
    const [isCashEnabled, setIsCashEnabled] = useState(false)

    const renderWorker = ({ item }: any) => (
        <TouchableOpacity
            onPress={() => router.push('/setting-invoice')}
            style={tw`bg-white rounded-xl border border-borderPrimary p-3 flex-row justify-between mb-4`}
        >
            {/* Left side: Worker Info */}
            <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={item.icons} />
                <View style={tw`flex-col gap-1`}>
                    <View style={tw`flex-row gap-1.5 items-center`}>
                        <Text style={tw`text-black text-text12 font-sfpro-600`}>
                            {item.name}
                        </Text>
                        <Text style={tw`text-gray text-text10 font-sfpro-600`}>
                            {item.id}
                        </Text>
                    </View>
                    <View style={tw`flex-row items-center w-[70%] rounded-full bg-borderPrimary gap-1.5 px-2 py-0.5`}>
                        <SvgXml xml={IconTimeAndDate} width={14} height={14} />
                        <Text style={tw`text-gray text-text10`}>{item.tagText}</Text>
                    </View>
                </View>
            </View>

            {/* Right side: Status */}
            <View style={tw`items-end `}>
                <Text style={tw`text-text14 font-sfpro-700 text-primaryColor`}>
                    {item.price}
                </Text>
                <View style={[tw`px-2 py-0.5 rounded-full`, { backgroundColor: item.bgColor }]}>
                    <Text style={tw`text-text10 font-sfpro-600 text-bgWhite`}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <PageWrapper>
            <GlobalTopBar title='Payments' addIiocns={true} />

            <View style={tw`flex-1 flex-col gap-4`}>
                {/* Card Info */}
                <View style={tw`flex-row items-center bg-white border border-borderPrimary p-3 gap-3 rounded-md`}>
                    <SvgXml xml={IconUserCard} />
                    <Text style={tw`flex-1 text-headingText font-sfpro-600 text-text12`}>
                        **** **** **** 4820
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push('/common/add-bank-account')}
                        style={tw`px-3 py-1.5 border border-primaryColor rounded-md`}
                    >
                        <Text style={tw`text-primaryColor font-sfpro-600 text-text10`}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Cash Payment Switch */}
                <View style={tw`flex-row items-center justify-between border border-borderPrimary p-3 rounded-md`}>
                    <View style={tw`flex-row gap-2 items-center flex-1`}>
                        <SvgXml xml={IconCasPayment} />
                        <View>
                            <Text style={tw`text-text12 font-sfpro-600 text-black`}>
                                Accept Cash payment
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                Allow customers to pay with cash
                            </Text>
                        </View>
                    </View>
                    <Switch
                        trackColor={{ false: "#ccc", true: "#0087ff" }}
                        thumbColor="#fff"
                        ios_backgroundColor="#ccc"
                        onValueChange={() => setIsCashEnabled(!isCashEnabled)}
                        value={isCashEnabled}
                    />
                </View>

                {/* Tip Config */}
                <TouchableOpacity
                    onPress={() => router.push('/tip-configuration')}
                    style={tw`flex-row items-center justify-between border border-borderPrimary p-3 rounded-md`}
                >
                    <View style={tw`flex-row gap-2 items-center flex-1`}>
                        <SvgXml xml={IconTips} />
                        <View>
                            <Text style={tw`text-text12 font-sfpro-600 text-black`}>
                                Tip Configuration
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                Manage tip presets for invoice
                            </Text>
                        </View>
                    </View>
                    <SvgXml xml={IconBlueLeftArrow} />
                </TouchableOpacity>

                {/* Payment History */}
                <View style={tw`flex-row items-center justify-between`}>
                    <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                        Payment History
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push('/(status)/status-invoice')}
                        style={tw`bg-[#0087FF1A] px-3 py-1.5 rounded-lg`}
                    >
                        <Text style={tw`text-text12 font-sfpro-600 text-primaryColor`}>
                            View All
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Worker List */}
                <FlatList
                    data={workersData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderWorker}
                    contentContainerStyle={tw`pb-10`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </PageWrapper>
    )
}
