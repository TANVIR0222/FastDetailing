import { IconHours, IconsJobs, IconsPhone, IconStar, IconsWallet } from '@/assets/Icons'
import GlobalSearch from '@/src/components/GlobalSearch'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { handlePress } from '@/src/utils/utils'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const [activeTab, setActiveTab] = useState<string>('All');
    const [search, setSearch] = useState("");

    return (
        <PageWrapper>
            <GlobalTopBar title='Employee' addIiocns={true} route={() => router.push('/(select-plan)/add-employee-to-invite')} />
            <View style={tw`flex-col gap-4`} >
                <View style={tw`border p-4 border-borderPrimary rounded-xl`}>
                    <View style={tw`flex-row border-b border-borderPrimary`}>
                        {["All", "Active", "On Leave"].map((tab) => {
                            const isActive = activeTab === tab
                            return (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => setActiveTab(tab)}
                                    style={tw.style(
                                        "flex-1 py-2 rounded-md mb-3",
                                        isActive ? "bg-primaryColor" : "bg-white"
                                    )}
                                >
                                    <Text
                                        style={tw.style(
                                            "text-center font-sfpro-700 text-text12",
                                            isActive ? "text-white" : "text-primaryColor"
                                        )}
                                    >
                                        {tab}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    {/* Search */}
                    <View style={tw`mt-2.5`}>

                        <GlobalSearch
                            placeholder="Search Customers"
                            value={search}
                            onChangeText={text => setSearch(text)}
                            onClear={() => setSearch('')}
                        />
                    </View>

                </View>

                <View>
                    {
                        [1, 2, 3, 4].map(item => (
                            <TouchableOpacity onPress={() => router.push('/manage-employee')} key={item}>
                                <View style={tw` bg-primaryBg rounded-xl border border-borderPrimary p-3 gap-4 mb-4`}>
                                    <View style={tw`flex-row justify-between gap-1.5 items-center`}>

                                        <View style={tw`flex-row items-center gap-2`}>
                                            {/* Profile Image */}
                                            <Image
                                                source={require("@/assets/images/image.png")}
                                                style={tw`w-8 h-8 rounded-full`}
                                            />

                                            {/* Name + Rating */}
                                            <View style={tw`flex-col gap-1`}>
                                                <Text
                                                    style={[
                                                        tw`text-text12 text-black font-sfpro-700`
                                                    ]}
                                                >
                                                    Alex James
                                                </Text>

                                                <View
                                                    style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-.5 w-[75%] rounded-xl `}
                                                >
                                                    <SvgXml xml={IconStar} width={10} height={10} />
                                                    <Text
                                                        style={[
                                                            tw`text-text10 text-[#FFB700] font-sfpro-500`
                                                        ]}
                                                    >
                                                        4.6
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={tw`flex-row items-center gap-2.5`}>
                                            <View style={tw`bg-[rgba(34,197,94,0.1)] rounded-full`}>
                                                <View style={tw`flex-row items-center justify-center px-3 py-1.5 gap-1.5`}>
                                                    <View style={tw`bg-[#22C55E] h-2 w-2 rounded-full`} />
                                                    <Text
                                                        style={[
                                                            tw`text-text12 text-[#22c55e] font-sfpro-500`,
                                                        ]}
                                                    >
                                                        Active
                                                    </Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => handlePress()} >
                                                <SvgXml xml={IconsPhone} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                    {/* Stats */}
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <SvgXml xml={IconHours} />
                                            <View style={tw`flex-row items-center gap-1`}>
                                                <Text style={tw`text-text14 font-sfpro-700 text-black`}>65</Text>
                                                <Text style={tw`text-text10 text-gray font-sfpro-400`}>Hours</Text>
                                            </View>
                                        </View>


                                        <View style={tw`flex-row items-center gap-1`}>
                                            <SvgXml xml={IconsWallet} />
                                            <View style={tw`flex-row items-center gap-1`}>
                                                <Text style={tw`text-text14 font-sfpro-700 text-black`}>$561</Text>
                                                <Text style={tw`text-text10 text-gray font-sfpro-400`}>Pay</Text>
                                            </View>
                                        </View>

                                        <View style={tw`flex-row items-center gap-1`}>
                                            <SvgXml xml={IconsJobs} />
                                            <View style={tw`flex-row items-center gap-1`}>
                                                <Text style={tw`text-text14 font-sfpro-700 text-black`}>32</Text>
                                                <Text style={tw`text-text10 text-gray font-sfpro-400`}>Jobs</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </PageWrapper>
    )
}