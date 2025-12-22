import { IconsShpo, IconsTruck } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ListView from '../ListView'

const AllJobView = () => {
    return (
        <View style={tw`flex-col gap-2.5`}>
            <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                    12 Past Jobs
                </Text>
                <TouchableOpacity
                    onPress={() => router.push('/post-jobs')}
                    style={tw`bg-[#0087FF1A] flex-row gap-2 items-center px-2 py-1 rounded-md`}
                >
                    <Text style={tw`text-primaryColor text-text12 font-sfpro-600`}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            <ListView
                name="Interior & Exterior Wash"
                address="Network US abd City Street 123"
                status="Completed"
                shopStatus="In Shop"
                time="Jan 15, 2025"
                date={true}
                customerName="2025 Tesla Model 3"
                customerColor="Blue"
                vehicleType="Truck"
                services={["Cleaning", "Washing", "Sweeping", "4+"]}
                staffName="Kevin Peterson"
                staffImage={require("@/assets/images/single-image.png")}
                price="$150.00"
                icons={IconsTruck}
                shopIcons={IconsShpo}
                singleImage={true}
            />

        </View>
    )
}

export default AllJobView