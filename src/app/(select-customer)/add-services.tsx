import { IconsGreenAdd } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import JobCategory from '@/src/components/ui/JobCategory'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

export default function AddServices() {
    const [search, setSearch] = useState("");
    // console.log(search);
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Add Services' />
            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search Customers"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />

                <GlobalAddServices title='Create New Vehicle' icon={IconsGreenAdd} buttonText='Create New' bluebg={false} onPress={() => router.push("/create-new-vehicle")} />

                <View style={tw`gap-2.5`}>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                            <TouchableOpacity onPress={() => router.push('/select-services')} key={index} style={tw`w-full border border-gray/30 p-2.5 bg-white rounded-xl`}>
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