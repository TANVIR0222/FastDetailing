import { IconTAiMessage, IconTimeAndDate } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { bothPlatform } from '@/src/utils/utils'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (event, date) => {
        if (date) setSelectedDate(date);
        setShowPicker(false); // close picker after selection
    };

    return (
        <PageWrapper>
            <GlobalTopBar title='SMS Campaigns' />
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 w-full gap-4`}>
                    <View style={tw`flex-1 w-full gap-4`}>

                        {/* Write Message */}
                        <View style={tw`w-full gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                Write Message
                            </Text>

                            <View style={tw`flex-row items-start relative rounded-xl border border-[#999a9a4d] bg-white`}>
                                <TextInput
                                    style={tw`flex-1 h-42 text-text12 font-sfpro-400 text-headingText px-2`}
                                    placeholderTextColor="#999a9a"
                                    textAlign='left'
                                    textAlignVertical='top'
                                    multiline
                                />
                                {/* AI Button */}
                                <TouchableOpacity
                                    style={tw`flex-row items-center gap-2 border p-2.5 absolute bottom-2.5 left-2.5 border-gray/40 w-[47%] px-2.5 rounded-xl`}
                                >
                                    <SvgXml xml={IconTAiMessage} />
                                    <Text style={tw`text-text10 font-sfpro-400 text-headingText`}>
                                        Uses AI to write message
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Choose Template */}
                        <TouchableOpacity
                            onPress={() => router.push('/choose-template')}
                            style={tw`flex-row items-center justify-center p-3 rounded-xl bg-[#0087ff1a]`}
                        >
                            <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                Choose Template
                            </Text>
                        </TouchableOpacity>

                        {/* Set Date */}
                        {/* Set Date */}
                        <TouchableOpacity
                            onPress={() => setShowPicker(!showPicker)}
                            style={tw`w-full gap-2.5`}
                        >
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>Set Date</Text>

                            <View
                                style={tw`flex-row items-center h-12 px-3 rounded-xl border border-[#999a9a4d] bg-white`}
                            >
                                <Text
                                    style={tw`flex-1 text-text14 font-sfpro-400 text-headingText`}
                                    onPress={() => setShowPicker(true)}
                                >
                                    {selectedDate ? selectedDate.toLocaleDateString() : "MM/DD/YY"}
                                </Text>

                                {!showPicker && <SvgXml xml={IconTimeAndDate} height={17} width={17} />}
                            </View>

                            {/* Date Picker for Both Platforms */}
                            {showPicker && (
                                bothPlatform === "ios" ? (
                                    <Modal
                                        transparent={true}
                                        animationType="slide"
                                        visible={showPicker}
                                        onRequestClose={() => setShowPicker(false)}
                                    >
                                        <View style={tw`flex-1 justify-end bg-black/40`}>
                                            <View style={tw`bg-white rounded-t-2xl p-4`}>
                                                <View style={tw`flex-row justify-end mb-2`}>
                                                    <TouchableOpacity onPress={() => setShowPicker(false)}>
                                                        <Text style={tw`text-primaryColor font-sfpro-700`}>Done</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <RNDateTimePicker
                                                    value={selectedDate || new Date()}
                                                    mode="date"
                                                    display="spinner"
                                                    onChange={(event, date) => {
                                                        if (event.type === "set" && date) {
                                                            handleChange(event, date);
                                                        }
                                                    }}
                                                    style={tw`bg-white`}
                                                />
                                            </View>
                                        </View>
                                    </Modal>
                                ) : (
                                    <RNDateTimePicker
                                        value={selectedDate || new Date()}
                                        mode="date"
                                        display="default"
                                        onChange={handleChange}
                                    />
                                )
                            )}
                        </TouchableOpacity>




                    </View>
                    {/* Continue Button */}
                    <MainButton
                        title='Continue to Audience'
                        bm={true}
                        onPress={() => router.push('/choose-audience')}
                    />
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}
