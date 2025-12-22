import { IconsDates, IconsPaid, IconTimeAndDate } from '@/assets/Icons'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'


const workersData = [
    {
        id: '#1521821',
        name: 'Kevin Peterson',
        status: 'Paid',
        tagText: 'Jun 26 2025',
        tagColor: '#fff',
        bgColor: '#22C55E',
        icons: IconsPaid,
        price: "$330.00"
    },
    {
        id: '#1521822',
        name: 'Kevin Peterson',
        status: 'Pending',
        tagText: 'Jun 26 2025',
        tagColor: '#FFB700',
        bgColor: '#FFB700',
        icons: IconsDates,
        price: "$330.00"
    },
    {
        id: '#1521823',
        name: 'Kevin Peterson',
        status: 'Cancelled',
        tagText: 'Jun 26 2025',
        tagColor: '#E71F2F',
        bgColor: '#E71F2F',
        icons: IconsDates,
        price: "$330.00"
    },
]

export default function Index() {
    const [search, setSearch] = useState("");


    const renderWorker = ({ item }: any) => (
        <TouchableOpacity onPress={() => router.push('/(job-view)/invoice')} style={tw` rounded-xl border border-borderPrimary p-3 flex-row justify-between items-center mb-4`}>
            {/* Worker Info */}
            <View style={tw`flex-row items-center gap-3`}>
                <SvgXml xml={item.icons} />


                <View style={tw`flex-col gap-1`}>
                    <View style={tw`flex-row gap-1 items-center `}>
                        <Text style={tw`text-black text-sm font-sfpro-600`}>{item.name}</Text>
                        <Text style={tw`text-gray text-text9 font-sfpro-500`}>{item.id}</Text>
                    </View>

                    <View style={tw`flex-row items-center w-[70%] justify-center rounded-full bg-borderPrimary gap-1  py-1`} >
                        <SvgXml xml={IconTimeAndDate} />
                        <Text style={tw`text-gray text-xs`}>{item.tagText}</Text>
                    </View>
                </View>
            </View>

            {/* Status */}
            <View style={tw`flex-col  items-center`}>
                <Text style={tw`text-text14  font-sfpro-700  text-primaryColor px-2 py-1 rounded-full `}>
                    {item.price}
                </Text>
                <View style={[tw`px-1.5 py-0.5 rounded-full`, { backgroundColor: item?.bgColor }]}>
                    <Text style={tw`text-text10  font-sfpro-500  text-bgWhite px-1  rounded-full `}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );


    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Invoices" />

            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search Invoices"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />
                <FlatList
                    data={workersData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderWorker}
                    contentContainerStyle={tw`pb-10`}
                />
            </View>
        </PageWrapper>
    )
}