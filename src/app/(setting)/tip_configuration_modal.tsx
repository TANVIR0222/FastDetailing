import GlobalButtonSheetClose from '@/src/components/GlobalButtonSheetClose'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

export default function TipCon() {
    const [percentage, setPercentage] = useState("")



    return (
        <Pressable
            onPress={() => router.back()}
            style={tw`flex-1 bg-black/30 items-start justify-end`}
        >
            <View style={tw`w-full  h-[25%] bg-bgWhite rounded-t-[20px] overflow-hidden px-5 pt-5`}>
                <KeyboardAvoidingWrapper>
                    <GlobalButtonSheetClose title="Tip Percentage" />

                    <View style={tw`flex-col justify-between gap-4 w-full`}>

                        {/* Input Field */}
                        <View style={tw`w-full gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                Set Percentage
                            </Text>

                            <View style={tw`flex-row items-center rounded-xl border border-[#999a9a4d]`}>
                                <TextInput
                                    style={tw`flex-1 h-12 text-text12 font-sfpro-400 text-headingText px-2`}
                                    placeholder="15%"
                                    placeholderTextColor="#999a9a"
                                    keyboardType="numeric"
                                    value={percentage}
                                    onChangeText={setPercentage}
                                />
                            </View>
                        </View>



                        {/* Submit */}
                        <View style={tw`w-full`}>
                            <MainButton
                                title="Send Request"
                                bm={true}
                                onPress={() =>

                                    router.back()
                                }
                            />
                        </View>
                    </View>
                </KeyboardAvoidingWrapper>
            </View>
        </Pressable>
    )
}
