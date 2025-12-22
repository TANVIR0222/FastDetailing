import {
    IconDelivery,
    IconDeliveryBlue,
    IconOpenRate,
    IconsAdd,
    IconsDeleted,
    IconSendGreen,
    IconTimeAndDate,
} from "@/assets/Icons";
import GlobalAddServices from "@/src/components/GlobalAddServies";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import PageWrapper from "@/src/components/PageWrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";

const DELETE_THRESHOLD = -60;
const SWIPE_RESET_DURATION = 250;
const SWIPE_DELETE_DISTANCE = -70;

const initialFlows = [
    {
        id: 1,
        name: "New Customer Welcome",
        type: "Customer Sign up",
        date: "2025-01-15",
        sent: "1,243",
        opened: "1,243",
    },
    {
        id: 2,
        name: "Promo Campaign",
        type: "Email Blast",
        date: "2025-02-05",
        sent: "800",
        opened: "600",
    },
    {
        id: 3,
        name: "Abandoned Cart",
        type: "Reminder",
        date: "2025-02-10",
        sent: "450",
        opened: "300",
    },
];

const cards = [
    { icon: IconDeliveryBlue, title: "Delivered", value: "1,422" },
    { icon: IconOpenRate, title: "Open Rate", value: "65%" },
];

function SwipeableItem({ item, onDelete }: { item: any; onDelete: (id: number) => void }) {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert("Delete Flow", `Delete ${item.name}?`, [
            { text: "Cancel", style: "cancel", onPress: () => resetSwipe() },
            { text: "Delete", style: "destructive", onPress: () => onDelete(item.id) },
        ]);
    };

    const pan = Gesture.Pan()
        .onUpdate((event) => {
            translateX.value = Math.max(event.translationX, SWIPE_DELETE_DISTANCE);
            if (translateX.value > 0) translateX.value = 0;
        })
        .onEnd(() => {
            if (translateX.value < DELETE_THRESHOLD) {
                translateX.value = withTiming(SWIPE_DELETE_DISTANCE, {
                    duration: SWIPE_RESET_DURATION,
                });
            } else {
                runOnJS(resetSwipe)();
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const deleteButtonStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            [0, DELETE_THRESHOLD],
            [0, 1],
            "clamp"
        );
        return { opacity };
    });

    return (
        <View style={tw`relative `}>
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
                    <View style={tw`bg-white border border-borderPrimary rounded-xl p-4 gap-4`}>
                        {/* Title */}
                        <View style={tw`flex-row justify-between items-center`}>
                            <View style={tw`flex-1`}>
                                <Text style={tw`text-text12 font-sfpro-600 text-headingText`}>
                                    {item.name}
                                </Text>
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    {item.type}
                                </Text>
                            </View>
                            <View style={tw`flex-row items-center rounded-xl gap-1 bg-borderPrimary px-1.5 py-1`}>
                                <SvgXml xml={IconTimeAndDate} />
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>

                        {/* Stats */}
                        <View style={tw`flex-row items-center justify-between gap-3`}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconSendGreen} />
                                <View style={tw`flex-row gap-1`}>
                                    <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                                        {item.sent}
                                    </Text>
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                        Sent
                                    </Text>
                                </View>
                            </View>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconDelivery} />
                                <View style={tw`flex-row gap-1`}>
                                    <Text style={tw`text-text14 font-sfpro-700 text-headingText`}>
                                        {item.opened}
                                    </Text>
                                    <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
                                        Opened
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
}

export default function AnalyticsScreen() {
    const [flows, setFlows] = useState(initialFlows);

    const handleDelete = (id: number) => {
        setFlows((prev) => prev.filter((f) => f.id !== id));
    };

    return (
        <PageWrapper>
            <GlobalTopBar title="Marketing Flows" />
            <View style={tw`flex-1`} >
                <ScrollView style={tw`pb-10 `}>
                    <View style={tw` flex-col gap-4 `} >
                        <View style={tw`flex-row flex-wrap justify-between gap-4`}>
                            {cards.map((card, idx) => (
                                <View
                                    key={idx}
                                    style={tw`flex-1  bg-white border border-gray/30 rounded-xl p-3 gap-4`}
                                >
                                    <View style={tw`flex-row items-center gap-2.5`}>
                                        <SvgXml xml={card.icon} />
                                        <Text style={tw`text-text14 font-sfpro-500 text-gray`}>
                                            {card.title}
                                        </Text>
                                    </View>
                                    <Text style={tw`text-text16 font-sfpro-600 text-headingText`}>
                                        {card.value}
                                    </Text>
                                </View>
                            ))}
                        </View>
                        <GlobalAddServices buttonText="Your Flows" title="Your Flows" onPress={() => router.push({ pathname: '/create-marketing-flow', params: { from: "update_services" } })} icon={IconsAdd} bluebg={true} />

                        {flows.map((flow) => (
                            <SwipeableItem key={flow.id} item={flow} onDelete={handleDelete} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </PageWrapper>
    );
}
