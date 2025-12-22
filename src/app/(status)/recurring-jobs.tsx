import { IconConflict, IconsShpo, IconsTruck, IconsWatch } from '@/assets/Icons';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import JobCategory from '@/src/components/ui/JobCategory';
import ListView from '@/src/components/ui/ListView';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function RecurringJobs() {
    const [search, setSearch] = useState("");

    return (
        <PageWrapper>
            <GlobalTopBar title='Recurring Jobs' />
            <View style={tw`flex-1`} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-col items-center gap-4`} >
                    <GlobalSearch
                        placeholder="Search Job"
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        onClear={() => setSearch("")}
                    />
                    <TouchableOpacity onPress={() => router.push('/scheduling_modal')} style={tw`w-full bg-white border border-borderPrimary rounded-xl p-4 gap-4`} >
                        {/* Top section */}
                        <View style={tw`flex-col gap-4`}>
                            <View style={tw`flex-row justify-between items-start w-full`}>
                                <View style={tw` gap-1`}>
                                    <Text style={tw`text-text14 font-sfpro-600 text-headingText`}>Alex James</Text>
                                    <Text style={tw`text-text10 text-gray`}>12 Apple Ln, Miami, FL</Text>
                                </View>

                                <View style={tw`flex-row gap-2`}>
                                    <View style={tw` px-2 rounded-full bg-[#0087ff1a] items-center justify-center`}>
                                        <Text style={tw`text-text10 text-primaryColor`}>Every 2 Weeks</Text>
                                    </View>

                                    <View style={tw` px-2 py-1 rounded-full bg-[#e71f2f1a] flex-row items-center gap-1`}>
                                        {/* <Materialsymbolserror width={14} height={14} /> */}
                                        <SvgXml xml={IconConflict} />
                                        <Text style={tw`text-text10 text-[#e71f2f]`}>Conflict</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={tw`flex-row justify-between items-center w-full`}>
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsShpo} />

                                    <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>In Shop</Text>
                                </View>

                                <View style={tw`bg-borderPrimary flex-row items-center justify-center gap-0.5  px-2 py-0.5 rounded-full`}>
                                    <SvgXml xml={IconsWatch} />
                                    <Text style={tw`text-gray text-text9 font-sfpro-400`}>
                                        1h 15min
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Vehicle with service */}
                        {
                            [1, 2].map((_, index) => (
                                <View key={index} style={tw`bg-[#999a9a0d] p-2 rounded-lg gap-2 `}>
                                    <JobCategory
                                        customerName="2025 Tesla Model 3"
                                        customerColor="Blue"
                                        vehicleType="Truck"
                                        services={["Cleaning", "Washing", "Sweeping", "4+"]}
                                    />
                                </View>
                            ))
                        }

                        {/* Footer avatars */}
                        <View style={tw`flex-row items-center justify-between gap-2`}>
                            <View style={tw`flex-row `}>
                                <Image source={require('@/assets/images/Frame 1707479431.png')} style={tw` border-1 h-10 w-10 border-white rounded-full`} />

                            </View>
                            <Text style={tw`text-text10 font-sfpro-600 text-gray flex-1`}>Kevin Peterson</Text>
                            <Text style={tw`text-text16 font-sfpro-700 text-primaryColor text-right`}>$150.00</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/scheduling_modal')} style={tw` w-full`}>
                        {/* Top section */}
                        <ListView
                            name="Alex James"
                            address="12 Apple Ln, Miami, FL"
                            status="Completed"
                            shopStatus="In Shop"
                            time="1h 15min"
                            customerName="2025 Tesla Model 3"
                            customerColor="Blue"
                            vehicleType="Truck"
                            services={["Cleaning", "Washing", "Sweeping", "4+"]}
                            staffName="Kevin Peterson"
                            staffImage={require("@/assets/images/Frame 1707479431.png")}
                            price="$150.00"
                            icons={IconsTruck}
                            shopIcons={IconsShpo}
                            singleImage={true}
                            statusUndefined={true}
                        />

                    </TouchableOpacity>
                </ScrollView>
            </View>

        </PageWrapper>
    )
}