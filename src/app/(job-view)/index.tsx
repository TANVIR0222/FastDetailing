import { IconsActiveCompleted, IconsActiveInProgress, IconsActiveShecduled, IconsAdd, IconsCheck, IconsCompleted, IconsInProgress, IconsNotCheck, IconsShecduled, IconsWatch } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import PageWrapper from '@/src/components/PageWrapper'
import ImageGallery from '@/src/components/ui/Home/ImageGallery'
import JobEveryOneCard from '@/src/components/ui/Home/JobEveryOneCard'
import Note from '@/src/components/ui/Home/Note'
import PaymentPendingCard from '@/src/components/ui/Home/PaymentPendingCard'
import RescheduleJob from '@/src/components/ui/Home/RescheduleJob'
import JobCategory from '@/src/components/ui/JobCategory'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useCallback, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const data = [
    { id: 1, props: "Scheduled", icon: IconsShecduled, iconsActive: IconsActiveShecduled },
    { id: 2, props: "In Progress", icon: IconsInProgress, iconsActive: IconsActiveInProgress },
    { id: 3, props: "Completed", icon: IconsCompleted, iconsActive: IconsActiveCompleted },
]

export default function JobView() {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);

    console.log(activeTab);




    const handleSelect = useCallback((serviceId: string) => {
        setSelectedServiceId(prev => prev === serviceId ? null : serviceId);
    }, []);



    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Job Details" subtitle='Execute' route={() => activeTab === 1 && router.push('/execution-upcoming')} />
            <View style={tw` pb-2`}>
                <View style={tw`flex-row justify-evenly border border-gray/30 rounded-xl py-2.5 `}>
                    {data.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => setActiveTab(item.id)}
                                style={tw`items-center `}
                            >
                                <SvgXml xml={isActive ? item.iconsActive : item.icon} />
                                <Text style={tw`${isActive ? "text-primaryColor" : "text-gray"} text-text10 font-sfpro-600 `}>
                                    {item.props}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>

            <KeyboardAvoidingWrapper>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={tw`flex-col gap-4 py-4`}>
                        {/* Job Every One Card */}
                        <JobEveryOneCard />


                        <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>Invoice</Text>
                        {/* Payment Pending and Paid  Card */}
                        <PaymentPendingCard pending={false} />


                        <GlobalAddServices buttonText="Add Service" title="2 Services" onPress={() => router.push({ pathname: '/select-vehicle' })} icon={IconsAdd} bluebg={true} />


                        <View>
                            {
                                [1, 2].map((_, index) => (
                                    <TouchableOpacity onPress={() => router.push('/(select-customer)/select-services')} key={index} style={tw`flex-col gap-4 mb-3 border border-[#999a9a4D] rounded-lg p-4 bg-white`}>
                                        {/* Vehicle Section */}
                                        <JobCategory
                                            customerName="2025 Tesla Model 3"
                                            customerColor="Blue"
                                            vehicleType="Truck"
                                        />


                                        {/* Service Section 2 (same as above, can be reused) */}
                                        {
                                            [1, 2].map((_, index) => (
                                                <View key={index} style={tw`flex-row items-center gap-1.6 p-2.5 border border-borderPrimary rounded-lg`}>
                                                    <TouchableOpacity onPress={() => handleSelect('header')}>
                                                        <SvgXml xml={selectedServiceId ? IconsCheck : IconsNotCheck} width={23} height={23} />
                                                    </TouchableOpacity>
                                                    <View style={tw`flex-1 flex-col gap-0 `}>
                                                        <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>Vacuum interior</Text>
                                                        <View style={tw`flex-row gap-2.5`}>
                                                            {
                                                                ["Pet hair", "Washing", "Cleaning"].map((item, index) => (
                                                                    <Text key={index} style={tw`text-text10 text-gray font-sfpro-400`}>{item}</Text>
                                                                ))
                                                            }
                                                        </View>
                                                    </View>
                                                    <View style={tw`bg-borderPrimary px-2 py-0.5 rounded-full flex-row items-center gap-1`}>
                                                        <SvgXml xml={IconsWatch} />
                                                        <Text style={tw`text-text10 text-gray font-sfpro-400`}>1h 15min</Text>
                                                    </View>
                                                </View>
                                            ))
                                        }

                                        {/* Avatar Section */}
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <Image source={require(`@/assets/images/image.png`)} style={tw`w-6 h-6 rounded-full`} resizeMode="cover" />
                                            <Text style={tw`text-text10 font-sfpro-600 text-gray`}>Kevin Peterson</Text>
                                        </View>

                                    </TouchableOpacity>
                                ))
                            }
                        </View>


                        {/* all node */}
                        <Note />


                        {/* images  */}
                        <ImageGallery />

                        <View style={tw`flex-row gap-3 justify-start`}>
                            <TouchableOpacity onPress={() => setCalendarVisible(true)} style={tw`flex-1 bg-[#0087ff1A] py-3 rounded-lg items-center`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-primaryColor`}>Reschedule</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tw`flex-1 bg-[#e71f2f1A] py-3 rounded-lg items-center`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-[#e71f2f]`}>Cancel</Text>
                            </TouchableOpacity>
                        </View>




                    </View>


                </ScrollView>
                <RescheduleJob
                    visible={isCalendarVisible}
                    onClose={() => setCalendarVisible(false)}
                />
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}