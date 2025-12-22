import { IconsRightArrow } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Account() {
    const items = [
        { id: 1, label: "Change Business Information", nav: '/account-info' },
        { id: 2, label: "Change Account Info", nav: '/account-info/account-update-info' },
        { id: 3, label: "Manage Subscription", nav: '/account-info/manage-subscription' },
    ];
    return (
        <PageWrapper>
            <GlobalTopBar title='Account' />
            <View style={tw`flex-1 `}>
                <View
                    style={tw`w-full border border-[#999A9A4D] rounded-xl p-2.5 gap-2`}
                >
                    {items.map((item) => (
                        <Pressable
                            key={item.id}
                            onPress={() => router.push(item?.nav)}
                            style={tw`flex-row items-center justify-between rounded-xl p-3 gap-3`}
                        >
                            <View style={tw`flex-1`}>
                                <Text
                                    style={tw`text-text12 font-sfpro-600 text-headingText`}
                                >
                                    {item.label}
                                </Text>
                            </View>

                            <SvgXml xml={IconsRightArrow} />
                        </Pressable>
                    ))}
                </View>
            </View>
        </PageWrapper>
    )
}