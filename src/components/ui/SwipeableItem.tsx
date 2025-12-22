import { IconsDeleted, IconsGray, IconsWatch } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { SvgXml } from "react-native-svg";


interface Service {
    id: string;
    name: string;
    duration: string;
    price: number;
}

interface SwipeableItemProps {
    item: Service;
    onDelete: (id: string) => void;
}

const DELETE_THRESHOLD = -60;
const SWIPE_RESET_DURATION = 250;
const SWIPE_DELETE_DISTANCE = -100;
const SwipeableItem: React.FC<SwipeableItemProps> = ({ item, onDelete }) => {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Service', `Delete ${item.name}?`, [
            { text: 'Cancel', style: 'cancel', onPress: resetSwipe },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => runOnJS(onDelete)(item.id),
            },
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

    const deleteButtonStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, DELETE_THRESHOLD], [0, 1], 'clamp');
        return { opacity };
    });

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
                    <View style={tw`flex-row items-center justify-between p-2.5 border border-borderPrimary rounded-xl`}>
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconsGray} />
                            <View style={tw`flex-col gap-1`}>
                                <Text style={tw`text-headingText text-text12 font-sfpro-600`}>{item.name}</Text>
                                <View style={tw`bg-borderPrimary w-[70%] flex-row items-center justify-center gap-1 px-1 py-0.5 rounded-full`}>
                                    <SvgXml xml={IconsWatch} />
                                    <Text style={tw`text-gray text-text9 font-sfpro-400`}>{item.duration}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
                            ${item.price.toFixed(2)}
                        </Text>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

export default SwipeableItem;