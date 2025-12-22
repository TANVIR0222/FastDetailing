import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import JobCategory from '@/src/components/ui/JobCategory';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function Index() {
    const [search, setSearch] = useState("");
    // console.log(search);
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Select vehicle' addIiocns={true} route={() => router.push('/(select-customer)/create-new-vehicle')} />
            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search Vehicle"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />


                <View style={tw`gap-5`}>
                    {
                        [1, 2, 3].map((_, index) => (
                            <TouchableOpacity onPress={() => router.push('/job-view-select-service')} key={index} style={tw`w-full border border-gray/30 p-2.5 bg-white rounded-xl`}>
                                <JobCategory
                                    customerName="2025 Tesla Model 3"
                                    customerColor="Blue"
                                    vehicleType="Truck"
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </PageWrapper>
    )
}