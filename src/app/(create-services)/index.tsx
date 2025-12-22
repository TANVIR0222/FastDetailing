
import { IconsDeleted } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ServicesModal from '@/src/components/ui/modal/ServicesModal';
import tw from '@/src/lib/tailwind';
import { Service, SwipeableItemProps } from '@/src/utils/type';
import { DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils';
import React, { useCallback, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';





const SwipeableItem: React.FC<SwipeableItemProps> = ({ item, onDelete }) => {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = (() => {
        Alert.alert('Delete Service', `Delete ${item.name}?`, [
            { text: 'Cancel', style: 'cancel', onPress: resetSwipe },
            {
                text: 'Delete',
                style: 'destructive',
                // onPress: () => runOnJS(onDelete)(item?.id),
            },
        ]);
    });

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
            'clamp' // ← no more Extrapolate
        );
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
                    <View
                        style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl bg-white`}
                    >
                        <Text style={tw`text-headingText text-text12 font-sfpro-600`}>
                            {item.name}
                        </Text>
                        <Text
                            style={tw`text-text12 bg-borderPrimary px-2 py-1 font-sfpro-500 text-gray rounded-xl`}
                        >
                            {item.services}
                        </Text>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

// Example usage
const initialServices: Service[] = [
    { id: 1, name: 'Cleaning', services: '4 Services' },
    { id: 2, name: 'Washing', services: '4 Services' },
    { id: 3, name: 'Sweeping', services: '4 Services' },
    { id: 4, name: 'Car Repair', services: '4 Services' },
    { id: 5, name: 'Sweeping', services: '4 Services' },
    { id: 6, name: 'Tire Alignment', services: '4 Services' },
];

export default function Index() {
    const [services, setServices] = useState<Service[]>(initialServices);
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const handleDelete = useCallback((id: any) => {
        setServices((prev) => prev.filter((service) => service?.id !== id));
    }, []);
    return (
        <PageWrapper>
            <GlobalTopBar title='Select Category' icon={true} addIiocns={true} route={() => setModalVisible(true)} />
            <View style={tw`flex-col justify-between flex-1`}>
                <View style={tw`flex-col gap-5 `}>
                    {services.map((item) => (
                        <SwipeableItem key={item.id} item={item} onDelete={handleDelete} />
                    ))}
                </View>
                <MainButton title='Continue' />
            </View>
            <ServicesModal
                visible={modalVisible}
                setVisible={setModalVisible}
                isExtraService={false}

            />
        </PageWrapper>
    );
}
