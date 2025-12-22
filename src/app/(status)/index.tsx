import { IconsJobs, IconsMessage, IconsPhone, IconsVehicles, IconsWallet } from '@/assets/Icons'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const [search, setSearch] = useState("");
    // console.log(search);
    const phoneNumber = '+8801234567890'; // 

    const handlePress = () => {
        Linking.openURL(`tel:${phoneNumber}`)
            .catch(err => console.log('Error opening dialer', err));
    };

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Customers' addIiocns={true} />
            <View style={tw`flex-col gap-4`}>
                <GlobalSearch
                    placeholder="Search Services"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    onClear={() => setSearch("")}
                />

                {
                    [1, 2, 3, 4].map(item => (
                        <TouchableOpacity onPress={() => router.push('/customer-details')} key={item}>
                            <View style={tw` bg-primaryBg rounded-xl border border-gray/30 p-3 gap-4`}>
                                <View style={tw`flex-row gap-1.5 items-center`}>

                                    <View style={tw`flex-1 justify-center gap-0.5`}>
                                        <Text style={tw`text-text12  font-sfpro-600 text-black`}>Alex James</Text>
                                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>123 Apple St, Westchester, New York</Text>
                                    </View>
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <TouchableOpacity onPress={() => router.push('/common')} >
                                            <SvgXml xml={IconsMessage} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handlePress}>
                                            <SvgXml xml={IconsPhone} width={24} height={24} />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                {/* Stats */}
                                <View style={tw`flex-row justify-between items-center`}>
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <SvgXml xml={IconsWallet} />
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <Text style={tw`text-text14 font-sfpro-700 text-black`}>$1,243</Text>
                                            <Text style={tw`text-text10 text-gray font-sfpro-400`}>Sent</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row items-center gap-1`}>
                                        <SvgXml xml={IconsJobs} />
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <Text style={tw`text-text14 font-sfpro-700 text-black`}>43</Text>
                                            <Text style={tw`text-text10 text-gray font-sfpro-400`}>Jobs</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row items-center gap-1`}>
                                        <SvgXml xml={IconsVehicles} />
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <Text style={tw`text-text14 font-sfpro-700 text-black`}>3</Text>
                                            <Text style={tw`text-text10 text-gray font-sfpro-400`}>Vehicles</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }



            </View>
        </PageWrapper>
    )
}