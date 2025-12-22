import GlobalButtonSheetClose from '@/src/components/GlobalButtonSheetClose'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

export default function Insert_placeholder_modal() {
    const tags = [
        "Customer Name",
        "Detailer Name",
        "Business Name",
        "Service Name",
        "Vehicle Name",
        "Job Time",
    ];
    return (
        <KeyboardAvoidingWrapper>
            <Pressable
                onPress={() => router.back()}
                style={tw`flex-1 items-end justify-end bg-black/30`}
            >
                <View
                    style={tw`w-full  rounded-t-3xl bg-bgWhite p-3.5`}
                >
                    <View style={tw`flex-col gap-4`}>
                        <GlobalButtonSheetClose title='Select Placeholder' />
                        <View style={tw`flex-row flex-wrap gap-3`}>
                            {tags.map((tag, index) => (
                                <View
                                    key={index}
                                    style={tw`px-3 py-1.5 bg-[#0087FF1A] rounded-full justify-center items-center`}
                                >
                                    <Text style={tw`text-text12 font-sfpro-500 text-primaryColor`}>
                                        {tag}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </Pressable>
        </KeyboardAvoidingWrapper>
    )
}