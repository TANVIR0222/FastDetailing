import { IconTemplate } from '@/assets/Icons';
import MainButton from '@/src/components/MainButton';
import tw from '@/src/lib/tailwind';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Cancel_subscription_modal() {

    const { t } = useLocalSearchParams<{ t: string }>();
    console.log(t);


    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            style={tw`flex-1 bg-black/30 items-center justify-center`}
        >
            <View
                style={tw`w-[90%]  bg-bgWhite rounded-3xl overflow-hidden items-center justify-center  p-5`}
            >


                <View style={tw`  gap-4 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        {t === 'template' ? <SvgXml xml={IconTemplate} /> : <Image source={require('@/assets/images/payment-status 2.png')} style={{ width: 100, height: 100 }} />}
                    </View>

                    <View style={tw` w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            {t === 'template' ? 'Template Saved' : 'Payment method Successfully'}
                        </Text>
                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            {t === 'template' ? 'Template has been saved for future use.' : "Payment method added successfully. You're all set to make payments."}
                        </Text>
                    </View>


                    <MainButton title='Go Back' bm={true} onPress={() => router.back()} />

                </View>
            </View>
        </Pressable>
    )
}