import { IconsJobs, IconsMessage, IconsPhone, IconsRadioActive, IconsRadioInActive, IconsVehicles, IconsWallet, IconsWatch, IconTimeAndDate } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import ServiceItem from '@/src/components/ui/Home/ServiceItem'
import JobCategory from '@/src/components/ui/JobCategory'
import tw from '@/src/lib/tailwind'
import { services } from '@/src/utils/all-dummy-data'
import { handlePress } from '@/src/utils/utils'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const options = ["In Shop", "Mobile"];
    const [selected, setSelected] = useState("Email");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (event, date) => {
        if (date) setSelectedDate(date);
        setShowPicker(false); // close picker after selection
    };
    return (
        <PageWrapper>
            <GlobalTopBar title='New Job' />
            <View style={tw`flex-1 flex-col gap-4`} >
                <TouchableOpacity  >
                    {/* <View style={tw` bg-primaryBg rounded-xl border border-gray/30 p-3 gap-4`}> */}
                    <View style={tw`rounded-xl border p-3 gap-4 border-borderPrimary`}>
                        <View style={tw`flex-row gap-1.5 items-center`}>

                            <View style={tw`flex-1 justify-center gap-0.5`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText `}>Alex James</Text>
                                <Text style={tw`text-text10 text-gray font-sfpro-400`}>123 Apple St, Westchester, New York</Text>
                            </View>
                            <View style={tw`flex-row items-center gap-2.5`}>
                                <TouchableOpacity onPress={() => router.push("/common")} >
                                    <SvgXml xml={IconsMessage} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handlePress()}>
                                    <SvgXml xml={IconsPhone} />
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


                <View style={tw``}>
                    {/* Main Container */}
                    <View style={tw` border border-[#999a9a4d] rounded-xl bg-white p-4 gap-4`}>

                        {/* Vehicle with service */}
                        <JobCategory customerColor='Blue' vehicleType='Truck' customerName='2025 Tesla Model 3' />

                        {/* Service Section */}
                        <View style={tw`border border-[#999a9a4d] rounded-xl bg-white p-3 gap-4`}>
                            {/* Service Item */}
                            <View style={tw`flex-row items-center gap-3`}>
                                <View style={tw`w-12 h-12 bg-[#d9d9d9] rounded`} />
                                <View style={tw`flex-1 gap-1`}>
                                    <Text style={tw`text-text14 font-sfpro-500 text-headingText`}>
                                        Interior Detail
                                    </Text>
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View style={tw`flex-row items-center gap-1 bg-borderPrimary rounded-full px-2 py-0.5`}>
                                            <SvgXml xml={IconsWatch} />
                                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                                1h 15min
                                            </Text>
                                        </View>
                                        <Text style={tw`text-text16 font-sfpro-700 text-primaryColor`}>$540.00</Text>
                                    </View>
                                </View>
                            </View>

                            {/* Extra Service - Pet Hair */}
                            <View style={tw`flex-col  gap-3`}>
                                {services.map((service, index) => (
                                    <ServiceItem
                                        key={index}
                                        title={service.title}
                                        duration={service.duration}
                                        price={service.price}
                                    />
                                ))}
                            </View>

                        </View>
                    </View>
                </View>

                {/*  */}
                {/* Set Date */}

                <View style={tw`w-full gap-2.5`}>
                    <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                        Time & Date
                    </Text>
                    <View style={tw`flex-row items-center h-12 px-3 rounded-xl border border-[#999a9a4d] bg-white`}>
                        <Text
                            style={tw`flex-1 text-text14 font-sfpro-400 text-headingText`}
                            onPress={() => setShowPicker(true)}
                        >
                            {selectedDate ? selectedDate.toLocaleDateString() : "MM/DD/YY"}
                        </Text>
                        {!showPicker && <SvgXml xml={IconTimeAndDate} height={20} width={20} />}
                        {showPicker && (
                            <RNDateTimePicker
                                value={selectedDate || new Date()}
                                mode="date"
                                display="default"
                                onChange={handleChange}
                            />
                        )}
                    </View>
                </View>

                {/*  */}
                <View style={tw` flex-col gap-1 `}>
                    <Text style={tw` text-text12 font-sfpro-400 text-gray `} >Location</Text>
                    <View style={tw`flex-row gap-4 items-center justify-between`}>
                        {options.map((option) => {
                            const isSelected = selected === option;
                            return (
                                <TouchableOpacity
                                    key={option}
                                    onPress={() => setSelected(option)}
                                    style={tw.style(
                                        "flex-row gap-2  items-center w-[45%] rounded-xl py-3 px-3 border",
                                        isSelected ? "border-primaryColor" : "border-gray/30"
                                    )}
                                    activeOpacity={0.7}
                                >
                                    <SvgXml
                                        xml={isSelected ? IconsRadioActive : IconsRadioInActive}
                                        width={20}
                                        height={20}
                                    />
                                    <Text
                                        style={tw.style(
                                            "text-text10 font-sfpro-400",
                                            isSelected ? "text-primaryColor" : "text-gray"
                                        )}
                                    >
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                </View>
            </View>
            <MainButton title='Book Job' />
        </PageWrapper>
    )
}