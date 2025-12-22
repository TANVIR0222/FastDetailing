import { IconsWelcome } from '@/assets/Icons'
import AuthHeading from '@/src/components/AuthHeading'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function EmployeWelcome() {
    return (
        <PageWrapper>
            <AuthHeading icon={true} />
            <View style={tw` gap-4 w-full  flex-1 items-center justify-center relative `}>
                {/* <SvgXml xml={Icon.check} /> */}

                <View style={tw` items-center`}>
                    <SvgXml xml={IconsWelcome} />
                </View>

                <View style={tw`gap-4 w-full items-center`}>
                    <View style={tw`gap-2 flex-col`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            Welcome!
                        </Text>
                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            You&apos;ve successfully verified your account. Let&apos;s get started with managing your business!
                        </Text>
                    </View>
                    {/* emain view */}
                    <View style={tw`gap-4 w-full flex-col items-center p-4 rounded-xl border-gray/30 border justify-between `}>

                        <View style={tw`gap-2 w-full flex-row  justify-between `}>
                            <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Manager name</Text>
                            <Text style={tw`text-primaryColor text-text12 font-sfpro-500 `}>Sarah Johnson</Text>
                        </View>
                        <View style={tw`border-gray/30  w-full border-[.5px]`} />
                        <View style={tw`gap-2 w-full flex-row  justify-between `}>
                            <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Business name</Text>
                            <Text style={tw`text-bgGreen text-text12 font-sfpro-500 `}> Elite Cleaning Services</Text>
                        </View>
                    </View>

                </View>


                <View style={tw`absolute bottom-0 w-full`}>
                    <MainButton title="Got it" onPress={() => router.push('/(tabs)')} />
                </View>


            </View>
        </PageWrapper>
    )
}