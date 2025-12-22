import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

const workersData = [
    {
        id: '1',
        name: 'Kevin Peterson',
        status: 'Available',
        tagText: 'All Services',
        tagColor: '#22C55E',
    },
    {
        id: '2',
        name: 'Kevin Peterson',
        status: 'Unavailable',
        tagText: '1/3 Services',
        tagColor: '#FFB700',
    },
    {
        id: '3',
        name: 'Kevin Peterson',
        status: 'Available',
        tagText: 'No Service',
        tagColor: '#E71F2F',
    },
]

export default function Index() {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const renderWorker = ({ item }: any) => {
        const isSelected = selectedId === item.id;
        return (
            <TouchableOpacity
                onPress={() => setSelectedId(item.id)}
                style={tw.style(
                    `bg-white rounded-xl border p-3 flex-row justify-between items-center mb-4`,
                    isSelected ? "border-primaryColor" : "border-gray/30" // 🔹 selected হলে border নীল হবে
                )}
            >
                {/* Worker Info */}
                <View style={tw`flex-row items-center gap-3`}>
                    <Image source={require(`@/assets/images/image.png`)} style={tw`w-8 h-8 rounded-full`} />

                    <View style={tw`flex-col gap-1`}>
                        <Text style={tw`text-black text-sm font-sfpro-500`}>{item.name}</Text>
                        <View style={tw`flex-row items-center justify-center rounded-full bg-borderPrimary gap-1 py-1`} >
                            <View style={[tw`w-2 h-2 rounded-full`, { backgroundColor: item?.tagColor }]} />
                            <Text style={tw`text-gray text-xs`}>{item.tagText}</Text>
                        </View>
                    </View>
                </View>

                {/* Status */}
                <View style={tw`px-3 py-1 rounded-lg`}>
                    <Text
                        style={tw`text-text10 font-sfpro-500 px-2 py-1 rounded-full ${item.status === 'Available'
                            ? 'text-[#22C55E] bg-[#22C55E1A]'
                            : 'text-[#E71F2F] bg-[#E71F2F1A]'
                            }`}
                    >
                        {item.status}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Select worker" />

            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search worker"
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
