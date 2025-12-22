import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import ProgressBar from '@/src/components/ProgressBar'
import SubscriptionPlans from '@/src/components/ui/SubscriptionPlans'
import { tabs } from '@/src/lib/all-tabs'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function SelectPlan() {
    const [activeTab, setActiveTab] = useState<string>('Monthly');


    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Select Your Plan' />


            <View style={tw`flex-1 flex-col gap-5 pt-1`}>
                <ProgressBar height={10} progress={20} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`  gap-5 flex-1`} >

                    {/* Tabs Header */}
                    <View style={tw`flex-row border p-2 border-borderPrimary rounded-xl overflow-hidden`}>
                        {tabs.map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setActiveTab(tab)}
                                style={tw`flex-1 py-2  ${activeTab === tab ? 'bg-primaryColor rounded-md' : 'bg-white'
                                    }`}
                            >
                                <Text
                                    style={tw`text-center ${activeTab === tab ? 'text-white ' : 'font-sfpro-700 text-text12 text-primaryColor'
                                        }`}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Tab Content */}
                    {
                        activeTab === 'Monthly' && <SubscriptionPlans ch={false} />

                    }
                    {
                        activeTab === 'Yearly' && <SubscriptionPlans ch={false} />

                    }
                </ScrollView>
            </View>

        </PageWrapper>
    )
}