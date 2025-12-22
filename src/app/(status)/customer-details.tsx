import { IconRecurringss, IconRevenue, IconsAdd, IconsStatusRightArrow } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import JobCategory from '@/src/components/ui/JobCategory'
import AllJobView from '@/src/components/ui/status/AllJobView'
import CustomerDetailsAndCall from '@/src/components/ui/status/CustomerDetailsAndCall'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import AllNote from './AllNote'

export default function CustomerDetails() {


    return (
        <PageWrapper>
            <GlobalTopBar title='Customer Details' threeDot={true} />
            <View style={tw`flex-1`}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-col gap-4 pb-10`}>
                    {/* user email and call  */}
                    <CustomerDetailsAndCall />
                    {/*  */}
                    <View style={tw`flex-col gap-2.5`}>
                        <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>Overview</Text>
                        <View style={tw`flex-row gap-4 justify-between`}>
                            <Pressable
                                style={tw` bg-white border border-gray/30 p-3 rounded-xl gap-3 w-[46%]`}
                                onPress={() => router.push('/status-invoice')}
                            >
                                {/* Top Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <View style={tw`flex-row items-center justify-between  gap-2`}>
                                        <SvgXml xml={IconRevenue} />
                                        <Text style={tw`text-text14 text-gray font-sfpro-500`}>Spent</Text>
                                    </View>
                                    <SvgXml xml={IconsStatusRightArrow} />

                                </View>

                                {/* Bottom Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>$351.53</Text>

                                </View>
                            </Pressable>
                            <Pressable
                                style={tw` bg-white border border-gray/30 p-3 rounded-xl gap-3 w-[46%]`}
                                onPress={() => router.push('/recurring-jobs')}
                            >
                                {/* Top Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <View style={tw`flex-row items-center justify-between  gap-2`}>
                                        <SvgXml xml={IconRecurringss} />
                                        <Text style={tw`text-text14 text-gray font-sfpro-500`}>Recurring</Text>
                                    </View>
                                    <SvgXml xml={IconsStatusRightArrow} />

                                </View>

                                {/* Bottom Row */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>323</Text>

                                </View>
                            </Pressable>
                        </View>
                    </View>
                    {/* Upcoming Jobs */}
                    <View style={tw`flex-col gap-2.5`}>
                        <GlobalAddServices buttonText="New Job" title="0 Upcoming Jobs" onPress={() => router.push('/(select-customer)/add-services')} icon={IconsAdd} bluebg={true} />
                        {/* emp */}
                        <TouchableOpacity style={tw` bg-borderPrimary  text-text12 font-sfpro-400  items-center py-2.5  rounded-full   w-full `}>
                            <Text style={tw` text-gray text-text12 font-sfpro-400 self-center  `} >No Scheduled Jobs</Text>
                        </TouchableOpacity>
                    </View>


                    {/* all  Notes  */}
                    <AllNote />

                    {/* 14 Vehicles */}
                    <View style={tw`flex-col gap-2.5`}>
                        {/* Vehicles */}
                        <GlobalAddServices buttonText="Add Vehicle" title="14 Vehicles" onPress={() => router.push('/(select-customer)/create-new-vehicle')} icon={IconsAdd} bluebg={true} />
                        {/* text center  */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={tw`gap-3`} //  gap horizontally
                        >
                            {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                                <TouchableOpacity
                                    onPress={() => router.push("/job-view-select-service")}
                                    key={index}
                                    style={tw`border border-gray/30 py-2.5 px-2.5 bg-white rounded-xl w-72`} // card width fix
                                >
                                    <JobCategory customerName="2025 Tesla Model 3" customerColor={'Blue'} vehicleType="Truck" />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* past Jobs */}
                    <AllJobView />

                </ScrollView>

                <View style={tw`pt-2`}>
                    <MainButton title='Book Now' bm={true} />
                </View>

            </View>
        </PageWrapper>
    )
}