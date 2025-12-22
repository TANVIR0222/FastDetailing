import { IconsCash, IconsModalClose, IconsRadioActive, IconsRadioInActive } from "@/assets/Icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";


export default function ChangePassModal() {


    const options = ["Email", "Phone"];
    const [selected, setSelected] = useState("Email");




    return (
        <KeyboardAvoidingWrapper>
            <Pressable
                onPress={() => router.back()}
                style={tw`flex-1 items-end justify-end bg-black/30`}
            >
                <View
                    style={tw`w-full sm:h-[45%] md:h-[35%] rounded-t-3xl bg-bgWhite p-5`}
                >
                    <View style={tw`flex-row items-center justify-between mb-4`}>
                        <Text style={tw`text-text16 text-headingText font-sfpro-700`}>Filters</Text>
                        <TouchableOpacity onPress={() => router.back()}>
                            <SvgXml xml={IconsModalClose} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw` flex-col gap-4 `}>
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
                        <View style={tw` flex-col gap-1 `}>
                            <MainButton title='Send Invoice' bm={true} onPress={() => router.back()} />

                            <View style={tw` flex-col gap-3 `}>
                                <TouchableOpacity onPress={() => router.push('/(job-view)/charge-customer')} style={tw` border border-primaryColor py-3 rounded-lg  flex-row gap-2 justify-center items-center`}>
                                    <Text style={tw`text-text12 font-sfpro-700 text-primaryColor `}>Enter Card information</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.push('/(job-view)/invoice')} style={tw` bg-[#22C55E1A] py-3 rounded-lg  flex-row gap-2 justify-center items-center`}>
                                    <SvgXml xml={IconsCash} />
                                    <Text style={tw`text-text12 font-sfpro-700 text-bgGreen`}>Accept Cash</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </KeyboardAvoidingWrapper>
    );
}
