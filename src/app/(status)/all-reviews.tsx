import { IconsShpo, IconStar, IconsTruck, IconTimeAndDate } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import ListView from '@/src/components/ui/ListView'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar title='All Reviews' />
            <View style={tw` flex-1  `}>
                <ScrollView
                    contentContainerStyle={tw`pb-10`}
                    showsVerticalScrollIndicator={false}
                >
                    {/* ⭐ Total Reviews */}
                    <View style={tw`flex-col  flex-1 gap-4 `}>
                        <View style={tw`flex-row justify-between items-center border border-gray/30 rounded-xl bg-white p-4`}>
                            <View style={tw`flex-row items-center gap-1.5 `}>
                                <SvgXml xml={IconStar} />
                                <SvgXml xml={IconStar} />
                                <SvgXml xml={IconStar} />
                                <SvgXml xml={IconStar} />
                                <SvgXml xml={IconStar} />
                                <Text style={tw`text-text10 text-gray font-sfpro-400 ml-2`}>
                                    44 Reviews
                                </Text>
                            </View>
                            <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-full`}>
                                <SvgXml xml={IconStar} width={10} height={10} />
                                <Text style={tw`text-text10 font-sfpro-600 text-[#FFB700]`}>4.6</Text>
                            </View>
                        </View>

                        {/*  Single Review Card */}
                        <View style={tw`border border-gray/30 rounded-xl bg-white p-4 gap-3`}>
                            {/* Header */}
                            <View style={tw`flex-row justify-between items-center`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    Robert Brown
                                </Text>
                                <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconStar} width={10} height={10} />
                                    <Text style={tw`text-text10 font-sfpro-600 text-[#FFB700]`}>4.6</Text>
                                </View>
                            </View>

                            {/* Review Text */}
                            <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>
                                I recently had my car detailed and couldn’t be happier with the results.
                                The team was professional, punctual, and paid attention to every detail —
                                inside and out. The exterior now has a deep, glossy shine, and the interior
                                feels like new again. Even tough stains and odors were completely removed.
                            </Text>

                            {/* Footer */}
                            <View style={tw`flex-row justify-between items-center`}>
                                <View style={tw`flex-row items-center gap-2`}>
                                    <Image
                                        source={require('@/assets/images/Frame 1707479431.png')}
                                        style={tw`w-8 h-8 rounded-full`}
                                    />
                                    <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                        Kevin F James P
                                    </Text>
                                </View>
                                <View style={tw`flex-row items-center gap-1  bg-borderPrimary px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconTimeAndDate} />
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>2025-01-15</Text>
                                </View>
                            </View>
                        </View>
                        {/*  Single Review Card */}
                        <View style={tw`border border-gray/30 rounded-xl bg-white p-4 gap-3`}>
                            {/* Header */}
                            <View style={tw`flex-row justify-between items-center`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    Robert Brown
                                </Text>
                                <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconStar} width={10} height={10} />
                                    <Text style={tw`text-text10 font-sfpro-600 text-[#FFB700]`}>4.6</Text>
                                </View>
                            </View>

                            {/* Review Text */}
                            <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>
                                I recently had my car detailed and couldn’t be happier with the results.
                                The team was professional, punctual, and paid attention to every detail —
                                inside and out. The exterior now has a deep, glossy shine, and the interior
                                feels like new again. Even tough stains and odors were completely removed.
                            </Text>

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
                                singleImage={false}
                                statusUndefined={true}
                            />



                        </View>





                        {/*  Single Review Card */}
                        <View style={tw`border border-gray/30 rounded-xl bg-white p-4 gap-3`}>
                            {/* Header */}
                            <View style={tw`flex-row justify-between items-center`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    Robert Brown
                                </Text>
                                <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconStar} width={10} height={10} />
                                    <Text style={tw`text-text10 font-sfpro-600 text-[#FFB700]`}>4.6</Text>
                                </View>
                            </View>

                            {/* Review Text */}
                            <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>
                                I recently had my car detailed and couldn’t be happier with the results.
                                The team was professional, punctual, and paid attention to every detail —
                                inside and out. The exterior now has a deep, glossy shine, and the interior
                                feels like new again. Even tough stains and odors were completely removed.
                            </Text>

                            {/* Footer */}
                            <View style={tw`flex-row justify-between items-center`}>
                                <View style={tw`flex-row items-center gap-2`}>
                                    <Image
                                        source={require('@/assets/images/Frame 1707479431.png')}
                                        style={tw`w-8 h-8 rounded-full`}
                                    />
                                    <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                        Kevin F James P
                                    </Text>
                                </View>
                                <View style={tw`flex-row items-center gap-1  bg-borderPrimary px-2 py-1 rounded-full`}>
                                    <SvgXml xml={IconTimeAndDate} />
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>2025-01-15</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        </PageWrapper>
    )
}