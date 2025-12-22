import { IconsActiveCompleted, IconsActiveInProgress, IconsActiveInRoute, IconsActiveShecduled, IconsCompleted, IconsInProgress, IconsInRoute, IconsShecduled } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import InCompleted from '@/src/components/ui/Home/InCompleted'
import InProgress from '@/src/components/ui/Home/InProgress'
import InRoute from '@/src/components/ui/Home/InRoute'
import UpComeing from '@/src/components/ui/Home/UpComeing'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const data = [
    { id: 1, props: "Upcoming", icon: IconsShecduled, iconsActive: IconsActiveShecduled },
    { id: 2, props: "In Route ", icon: IconsInRoute, iconsActive: IconsActiveInRoute },
    { id: 3, props: "In Progress", icon: IconsInProgress, iconsActive: IconsActiveInProgress },
    { id: 4, props: "Completed", icon: IconsCompleted, iconsActive: IconsActiveCompleted },
]

export default function Index() {
    const [activeTab, setActiveTab] = useState<number>(1);


    let tabTitle;

    switch (activeTab) {
        case 1:
            tabTitle = "Upcoming job";
            break;
        case 2:
            tabTitle = "In Route";
            break;
        case 3:
            tabTitle = "In Progress";
            break;
        default:
            tabTitle = "Completed";
            break;
    }



    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title={tabTitle} subtitle='Exit' route={() => router.back()} />
            <View style={tw`flex-1`} >
                <View style={tw`flex-row justify-evenly border border-gray/30 rounded-xl py-2.5`}>
                    {data.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => setActiveTab(item.id)}
                                style={tw`items-center `}
                            >
                                <SvgXml xml={isActive ? item.iconsActive : item.icon} />
                                <Text style={tw`${isActive ? "text-primaryColor" : "text-gray"} text-text10 font-sfpro-400 `}>
                                    {item.props}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={tw`flex-1`}>
                    {activeTab === 1 && <UpComeing setNextTabs={setActiveTab} />}
                    {activeTab === 2 && <InRoute setNextTabs={setActiveTab} />}
                    {activeTab === 3 && <InProgress setNextTabs={setActiveTab} />}
                    {activeTab === 4 && <InCompleted setNextTabs={setActiveTab} />}
                </View>
            </View>
        </PageWrapper>
    )
}