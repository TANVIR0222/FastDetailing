// import { IconsDeleted, IconsShpo, IconStar, IconsTruck, IconsWatch, IconTimeAndDate } from '@/assets/Icons'
// import GlobalTopBar from '@/src/components/GlobalTopBar'
// import PageWrapper from '@/src/components/PageWrapper'
// import tw from '@/src/lib/tailwind'
// import React, { useState } from 'react'
// import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
// import { Gesture, GestureDetector } from 'react-native-gesture-handler'
// import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
// import { SvgXml } from 'react-native-svg'

// const DELETE_THRESHOLD = -60;
// const SWIPE_RESET_DURATION = 250;
// const SWIPE_DELETE_DISTANCE = -70;

// function SwipeableItem({ item, onDelete }: { item: any, onDelete: (id: number) => void }) {
//     const translateX = useSharedValue(0);

//     const resetSwipe = () => {
//         translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
//     };

//     const handleDelete = () => {
//         Alert.alert("Delete Review", "Are you sure?", [
//             { text: "Cancel", style: "cancel", onPress: () => resetSwipe() },
//             { text: "Delete", style: "destructive", onPress: () => onDelete(item.id) },
//         ]);
//     };

//     const pan = Gesture.Pan()
//         .onUpdate((event) => {
//             translateX.value = Math.max(event.translationX, SWIPE_DELETE_DISTANCE);
//             if (translateX.value > 0) translateX.value = 0;
//         })
//         .onEnd(() => {
//             if (translateX.value < DELETE_THRESHOLD) {
//                 translateX.value = withTiming(SWIPE_DELETE_DISTANCE, {
//                     duration: SWIPE_RESET_DURATION,
//                 });
//             } else {
//                 runOnJS(resetSwipe)();
//             }
//         });

//     const animatedStyle = useAnimatedStyle(() => ({
//         transform: [{ translateX: translateX.value }],
//     }));

//     const deleteButtonStyle = useAnimatedStyle(() => {
//         const opacity = interpolate(
//             translateX.value,
//             [0, DELETE_THRESHOLD],
//             [0, 1],
//             "clamp"
//         );
//         return { opacity };
//     });

//     return (
//         <View style={tw`relative`}>
//             {/* Delete Button */}
//             <Animated.View
//                 style={[
//                     tw`absolute right-0 top-0 bottom-0 w-10 flex-row items-center justify-center rounded-xl`,
//                     deleteButtonStyle,
//                 ]}
//             >
//                 <TouchableOpacity onPress={handleDelete}>
//                     <SvgXml xml={IconsDeleted} />
//                 </TouchableOpacity>
//             </Animated.View>

//             {/* Foreground */}
//             <GestureDetector gesture={pan}>
//                 <Animated.View style={animatedStyle}>
//                     {/*  */}
//                     <View style={tw`border border-gray/30 rounded-xl bg-white p-4 gap-3`}>
//                         {/* Header */}
//                         <View style={tw`flex-row justify-between items-center`}>
//                             <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>
//                                 {item.reviewer}
//                             </Text>
//                             <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-lg`}>
//                                 <SvgXml xml={IconStar} width={10} height={10} />
//                                 <Text style={tw`text-text10 font-sfpro-500 text-[#FFB700]`}>
//                                     {item.rating}
//                                 </Text>
//                             </View>
//                         </View>

//                         {/* Review Text */}
//                         <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>
//                             {item.text}
//                         </Text>

//                         {
//                             item.id === 2 && (
//                                 <View style={tw`w-full bg-white border border-gray/30 rounded-xl p-4 gap-4`}>
//                                     {/* Top section */}
//                                     <View style={tw`flex-col gap-4`}>
//                                         <View style={tw`flex-row justify-between items-start w-full`}>
//                                             <View style={tw` gap-1`}>
//                                                 <Text style={tw`text-text14 font-sfpro-600 text-headingText`}>Alex James</Text>
//                                                 <Text style={tw`text-text10 text-gray`}>12 Apple Ln, Miami, FL</Text>
//                                             </View>
//                                         </View>

//                                         <View style={tw`flex-row justify-between items-center w-full`}>
//                                             <View style={tw`flex-row items-center gap-2`}>
//                                                 <SvgXml xml={IconsShpo} />

//                                                 <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>In Shop</Text>
//                                             </View>

//                                             <View style={tw`bg-borderPrimary flex-row items-center justify-center gap-0.5  px-2 py-1 rounded-full`}>
//                                                 <SvgXml xml={IconsWatch} />
//                                                 <Text style={tw`text-gray text-text9 font-sfpro-400`}>
//                                                     1h 15min
//                                                 </Text>
//                                             </View>
//                                         </View>
//                                     </View>

//                                     {/* Vehicle with service */}
//                                     <View style={tw`bg-[#999a9a0d] p-2 rounded-lg gap-2 `}>
//                                         <View style={tw`flex-row justify-between items-center`}>
//                                             <View style={tw`flex-row items-center gap-2`}>
//                                                 <Image source={require("@/assets/images/Rectangle-34624894.png")} style={tw`w-8 h-8 rounded-md`} />
//                                                 <View style={tw`justify-center gap-1`}>
//                                                     <Text style={tw`text-text10 font-sfpro-600 text-headingText`}>2025 Tesla Model 3</Text>
//                                                     <View style={tw`flex-row items-center gap-1`}>
//                                                         <View style={tw`bg-[#1F36E7] w-2 h-2 rounded-full `} />
//                                                         <Text style={tw`text-text9 font-sfpro-500 text-headingText`}>Blue</Text>
//                                                     </View>
//                                                 </View>
//                                             </View>

//                                             <View style={tw`items-end`}>
//                                                 <View style={tw`flex-row items-center justify-center gap-1  px-2 py-0.5  rounded-full bg-[#0087ff1a]`}>
//                                                     <SvgXml xml={IconsTruck} />
//                                                     <Text style={tw`text-text10 text-primaryColor`}>Truck</Text>
//                                                 </View>
//                                             </View>
//                                         </View>

//                                         <View style={tw`flex-row items-center gap-2`}>
//                                             {["Cleaning", "Washing", "Sweeping", "4+"].map((tag, i) => (
//                                                 <View key={i} style={tw`px-2 py-1 rounded-full bg-borderPrimary`}>
//                                                     <Text style={tw`text-text10 text-gray font-sfpro-500`}>{tag}</Text>
//                                                 </View>
//                                             ))}
//                                         </View>
//                                     </View>

//                                     {/* Footer avatars */}
//                                     <View style={tw`flex-row items-center justify-between gap-2`}>
//                                         <View style={tw`flex-row `}>
//                                             <Image source={require('@/assets/images/Frame 1707479431.png')} style={tw` border-1 h-10 w-10 border-white rounded-full`} />

//                                         </View>
//                                         <Text style={tw`text-text10 font-sfpro-500 text-gray flex-1`}>Kevin Peterson</Text>
//                                         <Text style={tw`text-text16 font-sfpro-700 text-primaryColor text-right`}>$150.00</Text>
//                                     </View>

//                                 </View>
//                             )
//                         }


//                         {/* Footer */}
//                         <View style={tw`flex-row justify-between items-center`}>
//                             <View style={tw`flex-row items-center gap-2`}>
//                                 <Image
//                                     source={require('@/assets/images/Frame 1707479431.png')}
//                                     style={tw`w-8 h-8 rounded-full`}
//                                 />
//                                 <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>
//                                     {item.author}
//                                 </Text>
//                             </View>
//                             <View style={tw`flex-row items-center gap-1  bg-borderPrimary px-2 py-1 rounded-full`}>
//                                 <SvgXml xml={IconTimeAndDate} />
//                                 <Text style={tw`text-text10 font-sfpro-400 text-gray`}>
//                                     {item.date}
//                                 </Text>
//                             </View>
//                         </View>
//                     </View>
//                 </Animated.View>
//             </GestureDetector>
//         </View>
//     );
// }


// export default function Index() {
//     const [reviews, setReviews] = useState([
//         {
//             id: 1,
//             reviewer: "Robert Brown",
//             rating: 4.6,
//             text: "I recently had my car detailed and couldn’t be happier with the results. The team was professional, punctual, and paid attention to every detail — inside and out. The exterior now has a deep, glossy shine, and the interior feels like new again. Even tough stains and odors were completely removed..",
//             author: "Kevin F James P",
//             date: "2025-01-15",
//         },
//         {
//             id: 2,
//             reviewer: "Alex James",
//             rating: 4.8,
//             text: "I recently had my car detailed and couldn’t be happier with the results. The team was professional, punctual, and paid attention to every detail — inside and out. The exterior now has a deep, glossy shine, and the interior feels like new again. Even tough stains and odors were completely removed.",
//             author: "Kevin Peterson",
//             date: "2025-01-10",
//         },

//     ]);

//     const handleDelete = (id: number) => {
//         setReviews((prev) => prev.filter((item) => item.id !== id));
//     };
//     return (
//         <PageWrapper>
//             <GlobalTopBar title='All Reviews' />
//             <View style={tw`flex-1`}>
//                 <ScrollView
//                     contentContainerStyle={tw`pb-10 gap-4`}
//                     showsVerticalScrollIndicator={false}
//                 >
//                     {/* Top Summary */}
//                     <View style={tw`flex-row justify-between items-center border border-gray/30 rounded-xl bg-white p-4`}>
//                         <View style={tw`flex-row items-center gap-1.5`}>
//                             {[...Array(5)].map((_, i) => (
//                                 <SvgXml key={i} xml={IconStar} />
//                             ))}
//                             <Text style={tw`text-text10 text-gray font-sfpro-400 ml-2`}>
//                                 {reviews.length} Reviews
//                             </Text>
//                         </View>
//                         <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-lg`}>
//                             <SvgXml xml={IconStar} width={10} height={10} />
//                             <Text style={tw`text-text10 font-sfpro-500 text-[#FFB700]`}>4.6</Text>
//                         </View>
//                     </View>

//                     {/* Reviews */}
//                     {reviews.map((item) => (
//                         <SwipeableItem key={item.id} item={item} onDelete={handleDelete} />
//                     ))}
//                 </ScrollView>
//             </View>
//         </PageWrapper>
//     )
// }


import { IconsDeleted, IconsShpo, IconStar, IconsTruck, IconsWatch, IconTimeAndDate } from '@/assets/Icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

const DELETE_THRESHOLD = -60;
const SWIPE_RESET_DURATION = 250;
const SWIPE_DELETE_DISTANCE = -70;

function SwipeableItem({ item, onDelete }: { item: any; onDelete: (id: number) => void }) {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Review', 'Are you sure?', [
            { text: 'Cancel', style: 'cancel', onPress: () => resetSwipe() },
            { text: 'Delete', style: 'destructive', onPress: () => onDelete(item.id) },
        ]);
    };

    const pan = Gesture.Pan()
        .activeOffsetX([-10, 10]) // detect horizontal swipe only
        .failOffsetY([-10, 10])   // vertical swipe fails → allows ScrollView
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
                    {/* Review Card */}
                    <View style={tw`border border-gray/30 rounded-xl bg-white p-4 gap-3`}>
                        {/* Header */}
                        <View style={tw`flex-row justify-between items-center`}>
                            <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>{item.reviewer}</Text>
                            <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-lg`}>
                                <SvgXml xml={IconStar} width={10} height={10} />
                                <Text style={tw`text-text10 font-sfpro-500 text-[#FFB700]`}>{item.rating}</Text>
                            </View>
                        </View>

                        {/* Review Text */}
                        <Text style={tw`text-text10 font-sfpro-400 text-gray leading-5`}>{item.text}</Text>

                        {/* Extra content for id === 2 */}
                        {item.id === 2 && (
                            <View style={tw`w-full bg-white border border-gray/30 rounded-xl p-4 gap-4`}>
                                {/* Top section */}
                                <View style={tw`flex-col gap-4`}>
                                    <View style={tw`flex-row justify-between items-start w-full`}>
                                        <View style={tw`gap-1`}>
                                            <Text style={tw`text-text14 font-sfpro-600 text-headingText`}>Alex James</Text>
                                            <Text style={tw`text-text10 text-gray`}>12 Apple Ln, Miami, FL</Text>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row justify-between items-center w-full`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={IconsShpo} />
                                            <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>In Shop</Text>
                                        </View>
                                        <View style={tw`bg-borderPrimary flex-row items-center justify-center gap-0.5 px-2 py-1 rounded-full`}>
                                            <SvgXml xml={IconsWatch} />
                                            <Text style={tw`text-gray text-text9 font-sfpro-400`}>1h 15min</Text>
                                        </View>
                                    </View>
                                </View>

                                {/* Vehicle with service */}
                                <View style={tw`bg-[#999a9a0d] p-2 rounded-lg gap-2`}>
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <Image source={require('@/assets/images/Rectangle-34624894.png')} style={tw`w-8 h-8 rounded-md`} />
                                            <View style={tw`justify-center gap-1`}>
                                                <Text style={tw`text-text10 font-sfpro-600 text-headingText`}>2025 Tesla Model 3</Text>
                                                <View style={tw`flex-row items-center gap-1`}>
                                                    <View style={tw`bg-[#1F36E7] w-2 h-2 rounded-full`} />
                                                    <Text style={tw`text-text9 font-sfpro-500 text-headingText`}>Blue</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={tw`items-end`}>
                                            <View style={tw`flex-row items-center justify-center gap-1 px-2 py-0.5 rounded-full bg-[#0087ff1a]`}>
                                                <SvgXml xml={IconsTruck} />
                                                <Text style={tw`text-text10 text-primaryColor`}>Truck</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={tw`flex-row items-center gap-2`}>
                                        {['Cleaning', 'Washing', 'Sweeping', '4+'].map((tag, i) => (
                                            <View key={i} style={tw`px-2 py-1 rounded-full bg-borderPrimary`}>
                                                <Text style={tw`text-text10 text-gray font-sfpro-500`}>{tag}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>

                                {/* Footer avatars */}
                                <View style={tw`flex-row items-center justify-between gap-2`}>
                                    <View style={tw`flex-row`}>
                                        <Image source={require('@/assets/images/Frame 1707479431.png')} style={tw`border-1 h-10 w-10 border-white rounded-full`} />
                                    </View>
                                    <Text style={tw`text-text10 font-sfpro-500 text-gray flex-1`}>Kevin Peterson</Text>
                                    <Text style={tw`text-text16 font-sfpro-700 text-primaryColor text-right`}>$150.00</Text>
                                </View>
                            </View>
                        )}

                        {/* Footer */}
                        <View style={tw`flex-row justify-between items-center`}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <Image source={require('@/assets/images/Frame 1707479431.png')} style={tw`w-8 h-8 rounded-full`} />
                                <Text style={tw`text-text12 font-sfpro-500 text-headingText`}>{item.author}</Text>
                            </View>
                            <View style={tw`flex-row items-center gap-1 bg-borderPrimary px-2 py-1 rounded-full`}>
                                <SvgXml xml={IconTimeAndDate} />
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
}

export default function Index() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            reviewer: 'Robert Brown',
            rating: 4.6,
            text: 'I recently had my car detailed and couldn’t be happier with the results. The team was professional, punctual, and paid attention to every detail — inside and out. The exterior now has a deep, glossy shine, and the interior feels like new again. Even tough stains and odors were completely removed.',
            author: 'Kevin F James P',
            date: '2025-01-15',
        },
        {
            id: 2,
            reviewer: 'Alex James',
            rating: 4.8,
            text: 'I recently had my car detailed and couldn’t be happier with the results. The team was professional, punctual, and paid attention to every detail — inside and out. The exterior now has a deep, glossy shine, and the interior feels like new again. Even tough stains and odors were completely removed.',
            author: 'Kevin Peterson',
            date: '2025-01-10',
        },
    ]);

    const handleDelete = (id: number) => {
        setReviews((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PageWrapper>
                <GlobalTopBar title="All Reviews" />
                <View style={tw`flex-1`}>
                    <ScrollView contentContainerStyle={tw`pb-10 gap-4`} showsVerticalScrollIndicator={false}>
                        {/* Top Summary */}
                        <View style={tw`flex-row justify-between items-center border border-gray/30 rounded-xl bg-white p-4`}>
                            <View style={tw`flex-row items-center gap-1.5`}>
                                {[...Array(5)].map((_, i) => (
                                    <SvgXml key={i} xml={IconStar} />
                                ))}
                                <Text style={tw`text-text10 text-gray font-sfpro-400 ml-2`}>{reviews.length} Reviews</Text>
                            </View>
                            <View style={tw`flex-row items-center gap-1 bg-[#FFB7001A] px-2 py-1 rounded-lg`}>
                                <SvgXml xml={IconStar} width={10} height={10} />
                                <Text style={tw`text-text10 font-sfpro-500 text-[#FFB700]`}>4.6</Text>
                            </View>
                        </View>

                        {/* Reviews */}
                        {reviews.map((item) => (
                            <SwipeableItem key={item.id} item={item} onDelete={handleDelete} />
                        ))}
                    </ScrollView>
                </View>
            </PageWrapper>
        </GestureHandlerRootView>
    );
}
