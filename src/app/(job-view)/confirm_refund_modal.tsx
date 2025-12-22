
import { IconsConfirmRefund } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";



export default function Confirm_refund_modal() {




    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            style={tw`flex-1 bg-black/30 items-center justify-center`}
        >
            <View
                style={tw`w-[90%] h-[70%] bg-bgWhite rounded-3xl overflow-hidden items-center justify-center p-4`}
            >


                <View style={tw`  gap-6 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        <SvgXml xml={IconsConfirmRefund} />
                    </View>

                    <View style={tw`gap-2 w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            Refund Invoice
                        </Text>

                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            Are you sure you want to refund this invoice? This action cannot be undone.
                        </Text>
                    </View>


                    <View style={tw`gap-4 w-full flex-col items-center p-4 rounded-xl border-gray/30 border justify-between `}>

                        <View style={tw`gap-2 w-full flex-row  justify-between `}>
                            <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Invoice Number</Text>
                            <Text style={tw`text-headingText text-text12 font-sfpro-500 `}>#124354</Text>
                        </View>
                        <View style={tw`border-gray/30  w-full border-[.5px]`} />
                        <View style={tw`gap-2 w-full flex-row  justify-between `}>
                            <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Customer:</Text>
                            <Text style={tw`text-headingText text-text12 font-sfpro-500 `}>Alex James </Text>
                        </View>
                        <View style={tw`border-gray/30  w-full border-[.5px]`} />
                        <View style={tw`gap-2 w-full flex-row  justify-between `}>
                            <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Refund Amount</Text>
                            <Text style={tw`text-bgGreen text-text12 font-sfpro-500 `}>$150 </Text>
                        </View>
                    </View>


                    <View style={tw`flex-col items-center gap-5`}>
                        <TouchableOpacity onPress={() => {
                            router.back();
                        }} style={tw`bg-[#E71F2F] w-full p-4 rounded-xl`}>
                            <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`}>
                                Confirm Refund
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.back();
                        }} style={tw`border border-gray w-full p-4 rounded-xl`}>
                            <Text style={tw`text-gray text-text14 text-center font-sfpro-700`}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        </Pressable>
    );
};

