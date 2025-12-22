import { IconSheet, IconsRadioActive, IconsRadioInActive, IconsRightArrow, IconsRoundedBlueTick } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Pressable, TextInput } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    const [activeStep, setActiveStep] = useState(0); // 0 = first step active

    const options = ["Email", "Phone"];
    const [selected, setSelected] = useState("Email");
    const steps = ["Arrived at Job", "Before Job", "Job Completed", "After Job"];
    return (
        <PageWrapper>
            <GlobalTopBar title='Add New Reminder' />
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 w-full  gap-4`}>
                    <View style={tw`flex-1 w-full  gap-4`}>

                        {/* Title + AI Tag */}
                        <View style={tw`w-full gap-2.5`}>
                            <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                Message Temlates
                            </Text>

                            <View
                                style={tw`flex-row items-center relative  rounded-xl border border-[#999a9a4d] `}
                            >

                                <TextInput
                                    style={tw`flex-1 h-42 text-text12 font-sfpro-400 text-headingText px-2 `}
                                    placeholderTextColor="#999a9a"
                                    textAlign='left'
                                    textAlignVertical='top'
                                />

                            </View>

                            <TouchableOpacity onPress={() => router.push('/insert_placeholder_modal')} style={tw`flex-row items-center gap-2 border p-2 absolute bottom-2.5 left-2.5 border-gray/40 w-[39%] px-2.5 rounded-full`}>
                                <SvgXml xml={IconSheet} />
                                <Text style={tw`text-text10 font-sfpro-400  text-headingText`}>
                                    Insert Placeholder
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={tw`flex-col gap-4`}>
                            {steps.map((step, index) => {
                                const isActive = activeStep === index;
                                return (
                                    <Pressable
                                        key={index}
                                        onPress={() => setActiveStep(index)}
                                        style={tw`flex-row items-center gap-2 border border-gray/30 rounded-xl px-3 py-3 `}
                                    >
                                        {isActive && <SvgXml xml={IconsRoundedBlueTick} width={24} height={24} />}
                                        {/* {!isActive && <View style={tw`w-6`} />} */}

                                        <View style={tw`flex-1 flex-row items-center`}>
                                            <Text style={tw`text12 font-sfpro-600 text-headingText text-center`}>
                                                {step}
                                            </Text>
                                        </View>

                                        <SvgXml xml={IconsRightArrow} />
                                    </Pressable>
                                );
                            })}
                        </View>
                        <View style={tw`flex-col gap-2 `}>
                            <Text style={tw`text-text12 font-sfpro-400  text-gray`}>
                                Insert Placeholder
                            </Text>
                            <View style={tw`flex-row gap-3 items-center justify-between`}>

                                {options.map((option) => {
                                    const isSelected = selected === option;
                                    return (
                                        <TouchableOpacity
                                            key={option}
                                            onPress={() => setSelected(option)}
                                            style={tw.style(
                                                "flex-row gap-2  items-center w-[48%] rounded-xl py-3 px-3 border",
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
                        </View>

                    </View>

                    <MainButton title='Save' bm={true} onPress={() => router.push('/choose-audience')} />
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}