import { IconAccount, IconEmployees, IconLogout, IconPaymentMethod, IconReminders, IconServices, IconsRightArrow } from '@/assets/Icons'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
const menuItems: any = [
    { id: 1, label: "Employees", Icon: IconEmployees, nav: "/(setting)" },
    { id: 2, label: "Services", Icon: IconServices, nav: "/(setting)/services" },
    { id: 3, label: "Payments", Icon: IconPaymentMethod, nav: "/(setting)/payments" },
    { id: 4, label: "Reminders", Icon: IconReminders, nav: "/(setting)/reminder" },
    { id: 5, label: "Account", Icon: IconAccount, nav: "/(setting)/account" },
]

export default function setting() {

    return (
        <PageWrapper>
            <View style={tw`flex-1 w-full  gap-4 pt-4`}>
                <Text style={tw`text-text18 font-sfpro-900 text-headingText`}>Setting</Text>

                <View style={tw`flex-col flex-1 justify-between`}>
                    <View style={tw`p-2.5 border border-gray/30 flex-col gap-2 rounded-xl`}>
                        {menuItems.map((item: any, index: any) => (
                            <TouchableOpacity
                                key={index}
                                style={tw`flex-row items-center  gap-2.5  rounded-xl p-2.5 `}
                                onPress={() => router.push(item?.nav)}
                                activeOpacity={0.7}
                            >
                                <SvgXml xml={item?.Icon} />
                                <View style={tw`flex-1 flex-row items-center justify-between `}>
                                    <Text
                                        style={[
                                            tw`text-text12 text-headingText font-sfpro-600`,

                                        ]}
                                    >
                                        {item?.label}
                                    </Text>
                                    <SvgXml xml={IconsRightArrow} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={tw`p-2.5 border  border-gray/30  rounded-xl mb-5.5`} >
                        <View style={tw`flex-row items-center  gap-2.5  rounded-xl p-2 `}>
                            <SvgXml xml={IconLogout} />
                            <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>Logout</Text>
                        </View>
                    </View>
                </View>
            </View>
        </PageWrapper>
    )
}