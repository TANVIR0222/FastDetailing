import { IconsCla, IconsMPanding, IconsPaid } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const PaymentPendingCard = ({ pending }: { pending?: boolean }) => {
    return (
        <View style={tw`flex-row items-center justify-between border border-borderPrimary p-3 rounded-xl`}>

            <View style={tw`flex-row items-center gap-2`}>
                <SvgXml xml={pending ? IconsMPanding : IconsPaid} />

                <View style={tw`flex-col gap-1`}>
                    <View style={tw`flex-row items-center gap-2`}>
                        <Text style={tw`text-xs font-sfpro-600 text-headingText`}>Alex James</Text>
                        <Text style={tw`text-text9 text-gray capitalize`}>#152182</Text>
                    </View>

                    {/* Date Tag */}
                    <View style={tw` bg-borderPrimary w-[80%] flex-row items-center gap-1 justify-center rounded-lg py-0.5`}>
                        <SvgXml xml={IconsCla} />
                        <Text style={tw`text-text10 text-gray`}>Jun 26 2025</Text>
                    </View>
                </View>
            </View>

            {
                pending ? <View  >
                    <Text style={tw`text-text16 font-sfpro-700 text-primaryColor`}>$330.00</Text>
                    <View style={tw`bg-[#FFB700] px-2 py-0.5 rounded-xl`}>
                        <Text style={tw`text-white text-text10 font-sfpro-600 text-center`}>Pending</Text>
                    </View>
                </View>
                    :
                    <View style={tw`flex-col items-end justify-center gap-1`}>
                        <Text style={tw`text-text14 font-sfpro-700 text-primaryColor`}>$330.00</Text>
                        <View style={tw`bg-bgGreen px-2 py-0.5 rounded-xl`}>
                            <Text style={tw`text-text10 text-white font-sfpro-600`}>Paid</Text>
                        </View>
                    </View>
            }



        </View>
    )
}

export default PaymentPendingCard