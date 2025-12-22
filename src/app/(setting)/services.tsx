import { IconsAdd, IconsCheck, IconsGray, IconsNotCheck, IconsWatch } from '@/assets/Icons'
import FilterTabBar from '@/src/components/FilterTabBar'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { ServiceItem } from '../(select-plan)/choose-service'

export default function ConfigureServices() {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('All');

    // Sample service data (replace with actual data source)
    const services: ServiceItem[] = Array.from({ length: 11 }, (_, index) => ({
        id: `service-${index}`,
        name: 'Pressure Wash',
        duration: '1h 15min',
        price: 556.00,
    }));

    // Memoized callback for handling selection
    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => prev === serviceId ? null : serviceId);
    }, []);
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Configure Services' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw`flex-col gap-4 pb-6 `}
            >

                <GlobalSearch
                    placeholder="Search Services"
                    value={searchText}
                    onChangeText={setSearchText}
                    onClear={() => setSearchText('')}
                />

                <GlobalAddServices
                    buttonText="Add Service"
                    onPress={() => router.push('/(create-services)/[services_id]')}
                    title="28 Services"
                    icon={IconsAdd}
                    bluebg={true}
                />

                <FilterTabBar
                    initialFilter="All"
                    onFilterChange={setActiveFilter}
                    filters={["All", "Cleaning", "Sweeping", "Washing", "Drying"]}
                />

                <View style={tw`flex-row items-center gap-2`}>
                    <Text style={tw`text-headingText text-text16 font-sfpro-700`}>
                        {activeFilter}
                    </Text>
                </View>

                {services.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => handleSelect(item.id)}
                    >
                        <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl`}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconsGray} />
                                <View style={tw`flex-col gap-1.5`}>
                                    <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                                        {item.name}
                                    </Text>
                                    <View style={tw`bg-borderPrimary w-[70%] flex-row items-center gap-1 px-2 py-1 rounded-full`}>
                                        <SvgXml xml={IconsWatch} />
                                        <Text style={tw`text-gray text-text9 font-sfpro-400`}>
                                            {item.duration}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`flex-col gap-1.5 items-end`}>
                                <SvgXml xml={selectedServiceId === item.id ? IconsCheck : IconsNotCheck} />
                                <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
                                    ${item.price.toFixed(2)}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}


            </ScrollView>
            <View style={tw`pt-2`}>
                <MainButton
                    title="Next"
                    onPress={() => router.push('/invite-employee')}
                />
            </View>
        </PageWrapper>

    )
}