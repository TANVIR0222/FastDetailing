// import { IconsAdd, IconTips } from '@/assets/Icons'
// import GlobalAddServices from '@/src/components/GlobalAddServies'
// import GlobalTopBar from '@/src/components/GlobalTopBar'
// import PageWrapper from '@/src/components/PageWrapper'
// import TipConfigurationModal from '@/src/components/ui/modal/TipConfiguration'
// import tw from '@/src/lib/tailwind'
// import React, { useState } from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'
// import { SvgXml } from 'react-native-svg'

// export default function Index() {
//     const [modalVisible, setModalVisible] = useState<boolean>(false)

//     return (
//         <PageWrapper>
//             <GlobalTopBar title='Tip Configuration' />
//             <View style={tw`flex-1`}>
//                 <View style={tw` gap-5 `}>

//                     {/* Tip Info */}
//                     <View style={tw`flex-row items-center justify-center p-2.5 border border-dashed border-[#22C55E] rounded-xl bg-[#22C55E1A]`}>
//                         <Text style={tw`text-text10 font-sfpro-600 text-[#22C55E] text-center`}>
//                             Set up to 6 tip presets for customer invoices.
//                         </Text>
//                     </View>

//                     <View style={tw``} >
//                         <GlobalAddServices buttonText={'Add More Tip'} title='Tip Presets' icon={IconsAdd} bluebg={true} onPress={() => setModalVisible(true)} />
//                     </View>


//                     {/* Tip Presets */}
//                     <View style={tw`flex-col items-start justify-start gap-4`}>
//                         {/* Tip Percentages */}
//                         {[{ Icon: IconTips, value: "15%" }, { Icon: IconTips, value: "25%" }, { Icon: IconTips, value: "55%" }].map((item, index) => (
//                             <TouchableOpacity
//                                 key={index}
//                                 style={tw`flex-row gap-2.5  w-full  items-center  p-2.5 border border-gray/30 rounded-xl bg-white`}
//                             >
//                                 <SvgXml xml={item?.Icon} />
//                                 <Text style={tw`text-text12 font-sfpro-600 text-black `}>
//                                     {item.value}
//                                 </Text>
//                             </TouchableOpacity>
//                         ))}

//                     </View>
//                 </View>
//             </View>
//             <TipConfigurationModal visible={modalVisible} setVisible={setModalVisible} />
//         </PageWrapper>
//     )
// }



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

import { IconsAdd, IconsDeleted, IconTips } from '@/assets/Icons';
import GlobalAddServices from '@/src/components/GlobalAddServies';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import TipConfigurationModal from '@/src/components/ui/modal/TipConfiguration';
import tw from '@/src/lib/tailwind';
import { DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils';

type TipPreset = {
    Icon: string;
    value: string;
};

type SwipeableItemProps = {
    item: TipPreset;
    onDelete: (value: string) => void;
};

const SwipeableItem: React.FC<SwipeableItemProps> = ({ item, onDelete }) => {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Tip', `Delete ${item.value}?`, [
            { text: 'Cancel', style: 'cancel', onPress: resetSwipe },
            { text: 'Delete', style: 'destructive', onPress: () => runOnJS(onDelete)(item.value) },
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
                    tw`absolute right-0 top-0 bottom-0 w-20 items-center justify-center`,
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
                    <TouchableOpacity
                        style={tw`flex-row gap-2.5 w-full items-center p-2.5 border border-gray/30 rounded-xl bg-white`}
                    >
                        <SvgXml xml={item.Icon} />
                        <Text style={tw`text-text12 font-sfpro-600 text-black`}>{item.value}</Text>
                    </TouchableOpacity>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

export default function Index() {
    const [tips, setTips] = useState<TipPreset[]>([
        { Icon: IconTips, value: '15%' },
        { Icon: IconTips, value: '25%' },
        { Icon: IconTips, value: '55%' },
    ]);

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleDelete = useCallback((value: string) => {
        setTips((prev) => prev.filter((tip) => tip.value !== value));
    }, []);

    return (
        <PageWrapper>
            <GlobalTopBar title='Tip Configuration' />

            <View style={tw`flex-1 flex-col gap-4 mt-4`} >
                {/* Tip Info */}
                <View style={tw`flex-row items-center justify-center p-2.5 border border-dashed border-[#22C55E] rounded-xl bg-[#22C55E1A]`}>
                    <Text style={tw`text-text10 font-sfpro-600 text-[#22C55E] text-center`}>
                        Set up to 6 tip presets for customer invoices.
                    </Text>
                </View>

                <View style={tw``} >
                    <GlobalAddServices buttonText={'Add More Tip'} title='Tip Presets' icon={IconsAdd} bluebg={true} onPress={() => setModalVisible(true)} />
                </View>

                <View style={tw`flex-col justify-between flex-1`}>
                    <View style={tw`flex-col gap-5`}>
                        {tips.map((tip) => (
                            <SwipeableItem key={tip.value} item={tip} onDelete={handleDelete} />
                        ))}
                    </View>

                </View>
            </View>

            <TipConfigurationModal visible={modalVisible} setVisible={setModalVisible} />
        </PageWrapper>
    );
}
