import { IconsDeleted, IconSFullSms } from '@/assets/Icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { SvgXml } from 'react-native-svg'

const DELETE_THRESHOLD = -60;
const SWIPE_RESET_DURATION = 250;
const SWIPE_DELETE_DISTANCE = -70;

function SwipeableItem({ item, onDelete }: { item: any; onDelete: (id: number) => void }) {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Reminder', 'Are you sure?', [
            { text: 'Cancel', style: 'cancel', onPress: () => resetSwipe() },
            { text: 'Delete', style: 'destructive', onPress: () => onDelete(item.id) },
        ]);
    };

    const pan = Gesture.Pan()
        .activeOffsetX([-10, 10])
        .failOffsetY([-10, 10])
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

    const deleteButtonStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, DELETE_THRESHOLD], [0, 1], 'clamp');
        return { opacity };
    });

    return (
        <View style={tw`relative mb-3`}>
            {/* Delete Button */}
            <Animated.View
                style={[
                    tw`absolute right-0 top-0 bottom-0 w-10 flex-row items-center justify-center rounded-xl`,
                    deleteButtonStyle,
                ]}
            >
                <TouchableOpacity onPress={handleDelete}>
                    <SvgXml xml={IconsDeleted} />
                </TouchableOpacity>
            </Animated.View>

            {/* Foreground */}
            <GestureDetector gesture={pan}>
                <Animated.View style={animatedStyle}>
                    <TouchableOpacity
                        // onPress={() => router.push('/tip-configuration')}
                        style={tw`flex-row items-center justify-between border border-borderPrimary  rounded-xl p-3  bg-white`}
                    >
                        <View style={tw`flex-row gap-2 items-center flex-1`}>
                            <SvgXml xml={IconSFullSms} />
                            <View>
                                <Text style={tw`text-text12 font-sfpro-600 text-black`}>
                                    {item.title}
                                </Text>
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    {item.message}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </GestureDetector>
        </View>
    );
}

export default function Reminder() {
    const [data, setData] = useState([
        { id: 1, title: "2 Hours Before Job", message: "Your appointment is tomorrow at 2 PM. Please confirm." },
        { id: 2, title: "1 Day Before Job", message: "Don't forget, you have a job scheduled tomorrow." },
        { id: 3, title: "30 Min Before Job", message: "Your job starts soon. Get ready!" },
    ]);

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <PageWrapper>
            <GlobalTopBar title='Reminder' addIiocns={true} route={() => router.push('/add-new-reminder')} />
            <View style={tw``}>
                {data.map((item) => (
                    <SwipeableItem key={item.id} item={item} onDelete={handleDelete} />
                ))}
            </View>
        </PageWrapper>
    );
}
