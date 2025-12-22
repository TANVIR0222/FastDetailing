import { IconsGreenAdd } from '@/assets/Icons';
import GlobalAddServices from '@/src/components/GlobalAddServies';
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
            <GlobalTopBar icon={true} title={'Add Services'} subtitle='Next' route={() => router.push('/(job-view)/new-job')} />
            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search Vehicle"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />

                <GlobalAddServices buttonText="Create New" title="7 Vehicles" onPress={() => router.push('/(select-customer)/create-new-vehicle')} icon={IconsGreenAdd} bluebg={false} />


                <View style={tw`gap-4`}>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                            // <TouchableOpacity onPress={() => router.push('/job-view-select-service')} key={index} style={tw`w-full border border-gray/30 p-4 bg-white rounded-xl`}>
                            <TouchableOpacity onPress={() => router.push('/(select-customer)/select-services')} key={index} style={tw`w-full border border-gray/30 p-2.5 bg-white rounded-xl`}>
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