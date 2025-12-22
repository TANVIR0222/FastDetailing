import { IconsProcessPayment, IconsShpo, IconsTruck } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import MainButton from '../../MainButton'
import ListView from '../ListView'
import PaymentPendingCard from './PaymentPendingCard'

export default function InCompleted() {
    return (
        <View style={tw` flex-col justify-between flex-1 pt-4`}>
            <View style={tw` flex-col   gap-4`}>
                <ListView
                    name="Alex James"
                    address="12 Apple Ln, Miami, FL"
                    status="Completed"
                    shopStatus="In Shop"
                    time="1h 15min"
                    customerName="2025 Tesla Model 3"
                    customerColor="Blue"
                    vehicleType="Truck"
                    services={["Cleaning", "Washing", "Sweeping", "4+"]}
                    staffName="Kevin Peterson"
                    staffImage={require("@/assets/images/Frame 1707479431.png")}
                    price="$150.00"
                    icons={IconsTruck}
                    shopIcons={IconsShpo}
                    singleImage={true}
                />
                {/* payment request */}
                <PaymentPendingCard pending={true} />
            </View>

            <View style={tw` flex-col gap-4 `}>
                <TouchableOpacity onPress={() => router.push('/payment_request_modal')} style={tw` bg-[#FFB7001A] py-4 rounded-lg  flex-row gap-2 justify-center items-center`}>
                    <SvgXml xml={IconsProcessPayment} />
                    <Text style={tw`text-text12 font-sfpro-600 text-[#FFB700]`}>Process Payment</Text>
                </TouchableOpacity>
                <MainButton title='Job Completed' bm={true} />
            </View>
        </View>
    )
}