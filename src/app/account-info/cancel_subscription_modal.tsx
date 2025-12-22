import { IconSubcriptions } from '@/assets/Icons';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Cancel_subscription_modal() {
    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            style={tw`flex-1 bg-black/30 items-center justify-center`}
        >
            <View
                style={tw`w-[90%]  bg-bgWhite rounded-3xl overflow-hidden items-center justify-center p-5`}
            >


                <View style={tw`  gap-6 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        <SvgXml xml={IconSubcriptions} />
                    </View>

                    <View style={tw`gap-2 w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            Are you sure you want to cancel?
                        </Text>

                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            You’ll retain access until the end of your billing cycle. After that, all workers will be signed out and customer interactions will stop.
                        </Text>
                    </View>





                    <View style={tw`flex-row gap-5`}>
                        {/* Cancel */}
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={tw`flex-1 border border-primaryColor p-4 rounded-xl`}
                        >
                            <Text style={tw`text-primaryColor text-text14 text-center font-sfpro-700`}>
                                No
                            </Text>
                        </TouchableOpacity>
                        {/* Confirm Change */}
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={tw`flex-1 bg-primaryColor p-4 rounded-xl`}
                        >
                            <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`}>
                                Yes
                            </Text>
                        </TouchableOpacity>


                    </View>



                </View>
            </View>
        </Pressable>
    )
}