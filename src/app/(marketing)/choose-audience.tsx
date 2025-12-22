import { IconChageThis, IconDownArroGray, IconsAdd, IconTopArroGray } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ChooseAudienceModal from '@/src/components/ui/modal/ChooseAudienceModal';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';

const data = [
    {
        id: 1,
        title: "Exclude Recurring Clients",
        subtitle: "Exclude clients with recurring appointments",
    },
    {
        id: 2,
        title: "Exclude Low Spenders",
        subtitle: "Exclude customers below set amount.",
    },
    {
        id: 3,
        title: "Exclude Cancelled Appointments",
        subtitle: "Exclude clients who recently cancelled",
    },
    {
        id: 4,
        title: "Exclude Cancelled Appointments",
        subtitle: "Exclude clients who recently cancelled",
    },
];


export default function Index() {
    const dataOptions = ["1 Year", "6 Months", "3 Months", "4 Weeks"];

    const [dropdowns, setDropdowns] = useState({
        haventBooked: false,
        haveBooked: false
    });

    const [selectedValues, setSelectedValues] = useState({
        haventBooked: "Select Period",
        haveBooked: "Select Period"
    });

    const toggleDropdown = (key: 'haventBooked' | 'haveBooked') => {
        setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSelect = (key: 'haventBooked' | 'haveBooked', item: string) => {
        setSelectedValues(prev => ({ ...prev, [key]: item }));
        setDropdowns(prev => ({ ...prev, [key]: false }));
    };

    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const [switchStates, setSwitchStates] = useState([false, false, false]);

    const toggleSwitch = (index: number) => {
        const updatedStates = [...switchStates];
        updatedStates[index] = !updatedStates[index];
        setSwitchStates(updatedStates);
    };

    return (
        <PageWrapper>
            <GlobalTopBar title='Choose Audience' />
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false} contentContainerStyle={tw`gap-4 pb-10`}>


                {/* 1. Haven't Booked Within */}
                <View style={tw`p-4 rounded-xl flex-col gap-4 border border-[#999a9a4d] bg-white`}>
                    <View style={tw` flex-col gap-2`}>
                        <Text style={tw`text-text12 font-sfpro-500 text-headingText `}>
                            Haven't Booked Within
                        </Text>
                        <Text style={tw`text-text10 font-sfpro-400 text-gray `}>
                            Target clients who haven't visited recently
                        </Text>
                    </View>
                    <View style={tw`relative`}>
                        <TouchableOpacity
                            style={tw`flex-row items-center justify-between px-3 py-3 rounded-xl border border-[#999a9a4d] bg-white`}
                            onPress={() => toggleDropdown('haventBooked')}
                        >
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                {selectedValues.haventBooked}
                            </Text>
                            <SvgXml xml={dropdowns.haventBooked ? IconTopArroGray : IconDownArroGray} />
                        </TouchableOpacity>

                        {dropdowns.haventBooked && (
                            <ScrollView
                                style={[
                                    tw`absolute top-12 left-0 right-0 z-50 rounded-md bg-white py-2.5 pl-2.5`,
                                    {
                                        // iOS shadow
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 10 }, // y-offset = 10
                                        shadowOpacity: 0.1,                     // alpha 0.10
                                        shadowRadius: 30,                       // blur radius
                                        // Android shadow
                                        elevation: 10,                           // approximate equivalent
                                    },
                                ]}
                            >
                                {dataOptions.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={tw`w-full`}
                                        onPress={() => handleSelect('haventBooked', item)}
                                    >
                                        <Text
                                            style={tw`text-text12 font-sfpro-400 text-gray text-start w-full px-3 py-2 ${item === selectedValues.haventBooked ? 'bg-borderPrimary' : ''
                                                }`}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        )}

                    </View>
                </View>

                {/* 2. Have Booked Within */}
                <View style={tw`p-4 rounded-xl flex-col gap-4 border border-[#999a9a4d] bg-white`}>
                    <View style={tw` flex-col gap-2`}>
                        <Text style={tw`text-text12 font-sfpro-500 text-headingText `}>
                            Have Booked Within
                        </Text>
                        <Text style={tw`text-text10 font-sfpro-400 text-gray `}>
                            Target clients who have visited
                        </Text>
                    </View>
                    <View style={tw`relative`}>
                        <TouchableOpacity
                            style={tw`flex-row items-center justify-between px-3 py-3 rounded-xl border border-[#999a9a4d] bg-white`}
                            onPress={() => toggleDropdown('haveBooked')}
                        >
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                {selectedValues.haveBooked}
                            </Text>
                            <SvgXml xml={dropdowns.haveBooked ? IconTopArroGray : IconDownArroGray} />
                        </TouchableOpacity>

                        {dropdowns.haveBooked && (
                            <ScrollView
                                style={[
                                    tw`absolute top-12 left-0 right-0 z-50 rounded-md bg-white py-2.5 pl-2.5`,
                                    {
                                        // iOS shadow
                                        shadowColor: "#000",
                                        shadowOffset: { width: 0, height: 10 }, // y-offset = 10
                                        shadowOpacity: 0.1,                      // alpha 0.10
                                        shadowRadius: 30,                        // blur radius
                                        // Android shadow
                                        elevation: 10,                            // approximate equivalent
                                    },
                                ]}
                            >
                                {dataOptions.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={tw`w-full`}
                                        onPress={() => handleSelect('haveBooked', item)}
                                    >
                                        <Text
                                            style={tw`text-text12 font-sfpro-400 text-gray text-start w-full px-3 py-2 ${item === selectedValues.haveBooked ? 'bg-borderPrimary' : ''}`}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        )}
                    </View>

                </View>




                {/* 3. Zip Code */}
                <View style={tw`p-4 rounded-xl flex-col gap-4 border border-[#999a9a4d] `}>
                    <View style={tw` flex-col gap-2`}>
                        <Text style={tw`text-text12 font-sfpro-500 text-headingText `}>
                            Zip Code
                        </Text>
                        <Text style={tw`text-text10 font-sfpro-400 text-gray `}>
                            Target clients in a specific zip code
                        </Text>
                    </View>
                    <TextInput
                        placeholder="Zip Code"
                        placeholderTextColor="#999a9a"
                        style={tw`flex-1 text-text12 font-sfpro-400 text-gray px-3 py-3 rounded-xl border border-[#999a9a4d] bg-white`}
                    />
                </View>

                {/* 4. Specific Customers */}
                <View style={tw`p-4 rounded-xl flex-col gap-4  border border-[#999a9a4d] `}>
                    <View style={tw` flex-row gap-4 justify-between  `}>
                        <View style={tw` flex-col `}>
                            <Text style={tw`text-text12 font-sfpro-500 text-headingText `}>
                                Specific Customers
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray `}>
                                Target specific customers manually
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => router.push('/(select-customer)')} style={tw`flex-row justify-center gap-1 h-8 items-center px-2 rounded-xl bg-[#0087ff1a]`}>
                            <SvgXml xml={IconsAdd} />
                            <Text style={tw`text-text12 font-sfpro-400 text-primaryColor`}>Add Customer</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <SvgXml xml={IconChageThis} />
                    </View>
                </View>

                <Text style={tw`text-text14 mb-1 font-sfpro-700 text-headingText `}>
                    Choose Filters
                </Text>

                {/*  Haven't Booked Within */}
                {data.map((item, index) => (
                    <View
                        key={index}
                        style={tw`p-4 rounded-xl flex-row items-center justify-between border border-[#999a9a4d] bg-white`}
                    >
                        <View style={tw`flex-col gap-1`}>
                            <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>
                                {item.title}
                            </Text>
                            <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                {item.subtitle}
                            </Text>
                        </View>
                        <Switch
                            onValueChange={() => {
                                toggleSwitch(index);// Toggle state
                                if (item.id === 3) {
                                    setModalVisible(true); // Open modal directly
                                }
                            }}
                            value={switchStates[index]}
                            // onValueChange={() => toggleSwitch(index)}
                            trackColor={{ false: '#ccc', true: '#0087FF' }}
                            thumbColor="white"
                        />
                    </View>
                ))}

            </ScrollView>
            <View style={tw`pt-2`} >
                <MainButton title='Continue to Review & Payment' bm={true} onPress={() => router.push('/review-and-payment')} />
            </View>
            <ChooseAudienceModal visible={modalVisible} setVisible={setModalVisible} />
        </PageWrapper>
    );
}
