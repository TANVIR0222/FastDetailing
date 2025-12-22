import { IconLink, IconQR, IconsModalClose } from '@/assets/Icons';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import RecentScan from '@/src/components/ui/marketing/RecentScan';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Landing_page_qr_modal = () => {
    return (
        <KeyboardAvoidingWrapper>
            <Pressable
                style={tw`flex-1 items-end justify-end bg-black/30`}
            >
                <View
                    style={tw`w-full sm:h-[45%] md:h-[35%] rounded-t-3xl bg-bgWhite p-5`}
                >
                    <View style={tw`flex-row items-center justify-between mb-4`}>
                        <Text style={tw`text-text14 text-headingText font-sfpro-700`}>Landing page QR Code</Text>
                        <TouchableOpacity onPress={() => router.back()}>
                            <SvgXml xml={IconsModalClose} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw` flex-col gap-4 `}>
                        <View style={tw` flex-col items-center gap-4 `}>
                            <SvgXml xml={IconQR} />
                            <View style={tw`flex-row items-center gap-1 bg-[#0087FF12]  px-2 py-1 rounded-xl`}>
                                <SvgXml xml={IconLink} />
                                <Text style={tw`text-text10 font-sfpro-500 text-primaryColor`}>
                                    urlgoeastopage.com/in/page
                                </Text>
                            </View>
                        </View>
                        <View style={tw` flex-col gap-1 `}>
                            <MainButton title='Save to Camera Roll' bm={true} />
                        </View>
                        <RecentScan />
                    </View>
                </View>
            </Pressable>
        </KeyboardAvoidingWrapper>
    )
}

export default Landing_page_qr_modal