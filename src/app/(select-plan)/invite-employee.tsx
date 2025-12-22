import { IconsAdd, IconsDeleted } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import ProgressBar from '@/src/components/ProgressBar'
import tw from '@/src/lib/tailwind'
import { DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { SvgXml } from 'react-native-svg'

type ServiceItem = {
    id: string;
    name: string;
    phonenumber: string;
};

type SwipeableItemProps = {
    item: ServiceItem;
    onDelete: (id: string) => void;
};

const SwipeableItem: React.FC<SwipeableItemProps> = ({ item, onDelete }) => {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Service', `Delete ${item.name}?`, [
            { text: 'Cancel', style: 'cancel', onPress: resetSwipe },
            { text: 'Delete', style: 'destructive', onPress: () => runOnJS(onDelete)(item.id) },
        ]);
    };

    const pan = Gesture.Pan()
        .onUpdate((event) => {
            translateX.value = Math.max(event.translationX, SWIPE_DELETE_DISTANCE);
            if (translateX.value > 0) translateX.value = 0;
        })
        .onEnd(() => {
            if (translateX.value < DELETE_THRESHOLD) {
                translateX.value = withTiming(SWIPE_DELETE_DISTANCE, { duration: SWIPE_RESET_DURATION });
            } else {
                runOnJS(resetSwipe)();
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const deleteButtonStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, DELETE_THRESHOLD], [0, 1], 'clamp'),
    }));

    return (
        <View style={tw`relative`}>
            {/* Delete Button */}
            <Animated.View
                style={[
                    tw`absolute right-0 top-0 bottom-0 w-20 flex-row items-center justify-center rounded-xl`,
                    deleteButtonStyle,
                ]}
            >
                <TouchableOpacity onPress={handleDelete}>
                    <SvgXml xml={IconsDeleted} />
                </TouchableOpacity>
            </Animated.View>

            {/* Swipeable Foreground */}
            <GestureDetector gesture={pan}>
                <Animated.View style={animatedStyle}>
                    <View style={tw` items-center justify-between flex-row p-2.5 border-border border  rounded-xl`}>
                        <View style={tw` items-center gap-2 flex-row`}>
                            <Image style={tw`w-7 h-7 rounded-full`} source={require(`@/assets/images/image.png`)} />
                            <View style={tw` flex-col `} >
                                <Text style={tw` text-headingText text-text12 font-sfpro-700`}>{item?.name}</Text>
                                <Text style={tw` text-gray -mt-0.5 text-text10 font-sfpro-400`}>{item?.phonenumber}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => router.push({
                            pathname: '/auth_alert_modal',
                            params: { from: 'invite' }
                        })} style={tw` bg-primaryColor flex-row gap-2 items-center  py-1.5 px-2.5 rounded-md`}>
                            <Text style={tw` text-white text-text10 font-sfpro-600`}>Invited</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};



export default function InviteEmployee() {
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Invite Employee' subtitle='Skip' />

            <View style={tw`flex-1 flex-col gap-5 pt-1`} >
                <ProgressBar height={10} progress={100} />

                <GlobalAddServices buttonText="Add Employee" onPress={() => router.push('/(select-plan)/add-employee-to-invite')} title="9 Employees" icon={IconsAdd} bluebg={true} />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`gap-2.5`} >
                    {
                        Array.from({ length: 5 }, (_, index) => (
                            <SwipeableItem
                                key={index}
                                item={{
                                    id: index.toString(),
                                    name: 'Alex James',
                                    phonenumber: '+923208078379',
                                }}
                                onDelete={() => { }}
                            />
                        ))
                    }
                </ScrollView>
                <MainButton title="Complete Signup" onPress={() => router.push('/(tabs)')} />

            </View>
        </PageWrapper>
    )
}