import { IconsAdd, IconsCheck, IconsGray, IconsNotCheck, IconsWatch } from '@/assets/Icons'
import FilterTabBar from '@/src/components/FilterTabBar'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import JobCategory from '@/src/components/ui/JobCategory'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { ServiceItem } from '../(select-plan)/choose-service'

export default function SelectServices() {
    const [search, setSearch] = useState("");
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

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
            <GlobalTopBar icon={true} title="Select Services" />

            <View style={tw`flex-1 flex-col gap-4`} >
                <View style={tw`gap-2.5`}>
                    <TouchableOpacity style={tw`w-full border border-gray/30 p-2.5 bg-white rounded-xl`}>
                        <JobCategory
                            customerName="2025 Tesla Model 3"
                            customerColor="Blue"
                            vehicleType="Truck"
                        />
                    </TouchableOpacity>
                </View>
                <GlobalSearch
                    placeholder="Search Services "
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />
                <GlobalAddServices title="Services" buttonText="Add Services" icon={IconsAdd} bluebg={true} onPress={() => router.push('/(create-services)/[services_id]')} />


                <View>
                    <FilterTabBar
                        initialFilter="All"
                        onFilterChange={setActiveFilter}
                        filters={["All", "Cleaning", "Sweeping", "Washing", "Drying"]}
                    />
                </View>




                <View style={tw`flex-1 flex-col gap-4`} >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={tw`gap-3 pb-4`}
                    >
                        {services.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => { handleSelect(item.id); router.push('/configure-service') }}
                            >
                                <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl`}>
                                    <View style={tw`flex-row items-center gap-2`}>
                                        <SvgXml xml={IconsGray} />
                                        <View style={tw`flex-col gap-1.5`}>
                                            <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                                                {item.name}
                                            </Text>
                                            <View style={tw`bg-borderPrimary flex-row items-center w-[70%] justify-center gap-1  px-1 py-0.5 rounded-full`}>
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
                </View>
                {/* <TouchableOpacity
                    style={tw` bg-[#22C55E1A] flex-row items-center justify-center gap-1 p-3 rounded-xl`}
                    onPress={() => router.push('/(create-services)/[services_id]')}
                >
                    <SvgXml xml={IconsAddServic} />
                    <Text style={tw`text-bgGreen text-[12px] text-center font-sfpro-700`}>
                        Add More Services
                    </Text>
                </TouchableOpacity> */}
                <MainButton
                    title="Done"
                    onPress={() => router.push('/(tabs)')}
                    bm={true}
                />
            </View>
        </PageWrapper>
    )
}