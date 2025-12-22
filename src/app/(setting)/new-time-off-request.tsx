import { IconTimeAndDate } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function Index() {


    return (
        <PageWrapper>
            <GlobalTopBar title='New Time Off Request' />
            <KeyboardAvoidingWrapper>
                <View style={tw` flex-1  flex-col gap-4`} >

                    <View style={tw`  gap-4`}>
                        <View style={tw`  gap-4`}>

                            {/* Title + AI Tag */}
                            <View style={tw`w-full gap-2.5`}>
                                <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                    Write Message
                                </Text>

                                <View
                                    style={tw`flex-row items-center relative  rounded-xl border border-[#999a9a4d] `}
                                >

                                    <TextInput
                                        style={tw`flex-1 h-42 text-text12 font-sfpro-400 text-headingText px-2 `}
                                        placeholderTextColor="#999a9a"
                                        textAlign='left'
                                        textAlignVertical='top'
                                        multiline
                                    />

                                </View>


                            </View>



                            <View style={tw`flex-row gap-3`}>
                                {/* Start Date */}
                                <View style={tw`flex-1 gap-2.5`}>
                                    <Text style={tw`text-text12 font-sfpro-400 text-gray`}>Start Date</Text>

                                    <TouchableOpacity
                                        onPress={() => router.push('/new_time_off_request_modal')}
                                        style={tw`flex-row items-center h-12 px-3 rounded-xl border border-[#999a9a4d] bg-white`}
                                    >
                                        <Text style={tw`flex-1 text12 font-sfpro-400 text-gray`}>

                                            MM/DD/YY

                                        </Text>
                                        <SvgXml xml={IconTimeAndDate} height={17} width={17} />
                                    </TouchableOpacity>
                                </View>

                                {/* End Date */}
                                <View style={tw`flex-1 gap-2.5`}>
                                    <Text style={tw`text-text12 font-sfpro-400 text-gray`}>End Date</Text>

                                    <TouchableOpacity
                                        onPress={() => router.push('/new_time_off_request_modal')}

                                        style={tw`flex-row items-center h-12 px-3 rounded-xl border border-[#999a9a4d] bg-white`}
                                    >
                                        <Text style={tw`flex-1 text12 font-sfpro-400 text-gray`}>
                                            MM/DD/YY
                                        </Text>
                                        <SvgXml xml={IconTimeAndDate} height={17} width={17} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>


                </View>
                <MainButton title='Sent Request' bm={true} />
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}