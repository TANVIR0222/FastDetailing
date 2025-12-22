import { IconsShpo, IconsTruck } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import ListView from '@/src/components/ui/ListView'
import CustomerDetailsAndCall from '@/src/components/ui/status/CustomerDetailsAndCall'
import InfoCard from '@/src/components/ui/status/InvoiceCard'
import tw from '@/src/lib/tailwind'
import { invoiceCardsData } from '@/src/utils/all-dummy-data'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Invoice() {
    return (
        <PageWrapper>
            <GlobalTopBar title='Invoice' />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`pb-10`}>
                <View style={tw`  border-gray/30 border overflow-hidden rounded-xl`} >
                    <View style={tw`bg-bgGreen   rounded-t-xl overflow-hidden`}>
                        <View style={tw`px-4 py-4 flex-row justify-between items-center `}>
                            <Text style={tw`text-white text-text14 font-sfpro-700 `}>Invoice #123456</Text>
                            <View style={tw` flex-row gap-2 items-center bg-bgWhite px-3 py-2 rounded-xl`}>
                                <Text style={tw` text-bgGreen text-text12 font-sfpro-400`}>Paid</Text>
                            </View>
                        </View>
                    </View>
                    <View style={tw`  p-4 flex-col gap-4`} >

                        <CustomerDetailsAndCall />

                        {/* all Metho */}
                        <View style={tw`flex-row flex-wrap justify-between gap-4`}>
                            {invoiceCardsData.map((card, index) => (
                                <InfoCard
                                    key={index}
                                    icon={card.icon}
                                    title={card.title}
                                    value={card.value}
                                />
                            ))}
                        </View>

                        {/*  new list */}
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
                            staffImage={require("@/assets/images/image.png")}
                            price="$150.00"
                            icons={IconsTruck}
                            shopIcons={IconsShpo}
                            singleImage={true}
                        />

                        <View style={tw`py-3`} >
                            <TouchableOpacity onPress={() => router.push('/confirm_refund_modal')} style={tw`  border border-primaryColor py-3 rounded-lg  flex-row gap-2 justify-center items-center`}>
                                <Text style={tw`text-text14 font-sfpro-700 text-primaryColor `}>Refunds Invoice</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
}