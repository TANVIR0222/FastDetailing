
import { IconsAddServic, IconsCheck, IconsGray, IconsNotCheck, IconsWatch } from '@/assets/Icons';
import FilterTabBar from '@/src/components/FilterTabBar';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ProgressBar from '@/src/components/ProgressBar';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

// Define types for service items
export interface ServiceItem {
    id: string;
    name: string;
    duration: string;
    price: number;
}

export default function ChooseService() {
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
            <GlobalTopBar
                title="Choose Service"
                route={() => router.push('/(tabs)')}
            />
            <View style={tw` pt-1 pb-5`}>
                <ProgressBar height={10} progress={100} />
            </View>

            <View style={tw`flex-col flex-1 gap-2 `}>

                <GlobalSearch
                    placeholder="Search Services"
                    value={searchText}
                    onChangeText={setSearchText}
                    onClear={() => setSearchText('')}
                />
                <View>
                    <FilterTabBar
                        initialFilter="All"
                        onFilterChange={setActiveFilter}
                        filters={["All", "Cleaning", "Sweeping", "Washing", "Drying"]}
                    />
                </View>
                <View style={tw`flex-row items-center gap-2`}>
                    <TouchableOpacity onPress={() => handleSelect('header')}>
                        <SvgXml xml={selectedServiceId ? IconsCheck : IconsNotCheck} />
                    </TouchableOpacity>
                    <Text style={tw`text-headingText text-text18 font-sfpro-700`}>{activeFilter}</Text>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={tw`gap-3 pb-4`}
                >
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
                                        <View style={tw`bg-borderPrimary flex-row items-center gap-1 px-1 py-1 rounded-full`}>
                                            <SvgXml xml={IconsWatch} />
                                            <Text style={tw`text-gray text-text9 font-sfpro-400`}>
                                                {item.duration}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={tw`flex-col gap-1.5 items-end`}>
                                    <SvgXml xml={selectedServiceId === item.id ? IconsCheck : IconsNotCheck} />
                                    <Text style={tw`text-primaryColor text-[18px] font-sfpro-700`}>
                                        ${item.price.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={tw`flex-col gap-4`} >
                    <TouchableOpacity
                        style={tw` bg-[#22C55E1A] flex-row items-center justify-center gap-1 p-3 rounded-xl`}
                        onPress={() => router.push('/(create-services)/[services_id]')}
                    >
                        <SvgXml xml={IconsAddServic} />
                        <Text style={tw`text-bgGreen text-[12px] text-center font-sfpro-700`}>
                            Add More Services
                        </Text>
                    </TouchableOpacity>
                    <MainButton
                        title="Next"
                        onPress={() => router.push('/(tabs)')}
                    />
                </View>
            </View>
        </PageWrapper>
    );
}