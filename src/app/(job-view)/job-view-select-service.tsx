

import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { SectionList, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { IconsAdd, IconsCheck, IconsGray, IconsNotCheck, IconsWatch } from '@/assets/Icons';
import FilterTabBar from '@/src/components/FilterTabBar';
import GlobalAddServices from '@/src/components/GlobalAddServies';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';

const servicesData = [
    {
        category: 'Cleaning',
        items: [
            { id: 'clean-1', name: 'Pressure Wash', duration: '1h 15min', price: 556.0, checked: true },
            { id: 'clean-2', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
            { id: 'clean-3', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
        ],
    },
    {
        category: 'Sweeping',
        items: [
            { id: 'sweep-1', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
            { id: 'sweep-2', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
        ],
    },
    {
        category: 'Washing',
        items: [
            { id: 'wash-1', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
            { id: 'wash-2', name: 'Pressure Wash', duration: '1h 15min', price: 556.0 },
        ],
    },
];

export default function Index() {
    const [search, setSearch] = useState('');
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => (prev === serviceId ? null : serviceId));
    }, []);

    const ServiceCard = ({ item }: { item: any }) => (
        <TouchableOpacity
            onPress={() => {
                handleSelect(item.id);
                router.push('/(select-customer)/configure-service');
            }}
        >
            <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl mb-4`}>
                <View style={tw`flex-row items-center gap-2`}>
                    <SvgXml xml={IconsGray} />
                    <View style={tw`flex-col gap-1.5`}>
                        <Text style={tw`text-headingText text-text14 font-sfpro-700`}>{item.name}</Text>
                        <View style={tw`bg-borderPrimary flex-row items-center gap-1 w-18 px-2 py-0.5 rounded-full`}>
                            <SvgXml xml={IconsWatch} />
                            <Text style={tw`text-gray text-text9 font-sfpro-400`}>{item.duration}</Text>
                        </View>
                    </View>
                </View>
                <View style={tw`flex-col gap-1.5 items-end`}>
                    <SvgXml xml={selectedServiceId === item.id ? IconsCheck : IconsNotCheck} />
                    <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>${item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <PageWrapper>
            <View style={tw`flex-1 flex-col gap-4`}>
                {/* Top Bar */}
                <GlobalTopBar icon={true} title="Select Service" />

                {/* Search */}
                <GlobalSearch
                    placeholder="Search Customers"
                    value={search}
                    onChangeText={text => setSearch(text)}
                    onClear={() => setSearch('')}
                />

                {/* Add Services Button */}
                <GlobalAddServices buttonText="Add Service" title="Services" icon={IconsAdd} bluebg={true} onPress={() => router.push('/(create-services)/[services_id]')} />

                {/* Filter Tabs */}
                <View>
                    <FilterTabBar
                        initialFilter="All"
                        onFilterChange={setActiveFilter}
                        filters={['All', 'Cleaning', 'Sweeping', 'Washing', 'Drying']}
                    />
                </View>

                {/* Services List */}
                <SectionList
                    sections={servicesData.map(section => ({
                        title: section.category,
                        data: section.items,
                    }))}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ServiceCard item={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={tw`text-text16 font-sfpro-700 text-headingText mb-2`}>{title}</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={tw`pb-4`}
                    style={tw`flex-1`}
                />

                {/* Next Button */}
                <MainButton title="Done" onPress={() => router.push('/(tabs)')} bm={true} />
            </View>
        </PageWrapper>
    );
}
