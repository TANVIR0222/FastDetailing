// import { IconsAdd, IconsGray, IconsWatch } from '@/assets/Icons'
// import FilterTabBar from '@/src/components/FilterTabBar'
// import GlobalAddServices from '@/src/components/GlobalAddServies'
// import GlobalSearch from '@/src/components/GlobalSearch'
// import GlobalTopBar from '@/src/components/GlobalTopBar'
// import MainButton from '@/src/components/MainButton'
// import PageWrapper from '@/src/components/PageWrapper'
// import ProgressBar from '@/src/components/ProgressBar'
// import tw from '@/src/lib/tailwind'
// import { router } from 'expo-router'
// import React, { useState } from 'react'
// import { ScrollView, Text, View } from 'react-native'
// import { SvgXml } from 'react-native-svg'
// import { ServiceItem } from './choose-service'


// export default function ConfigureServices() {
//     const [searchText, setSearchText] = useState<string>('');
//     const [activeFilter, setActiveFilter] = useState<string>('All');

//     // Sample service data (replace with actual data source)
//     const services: ServiceItem[] = Array.from({ length: 11 }, (_, index) => ({
//         id: `service-${index}`,
//         name: 'Pressure Wash',
//         duration: '1h 15min',
//         price: 556.00,
//     }));


//     return (
//         <PageWrapper>
//             <GlobalTopBar icon={true} title='Configure Services' subtitle='Skip' route={() => router.push('/(select-plan)/invite-employee')} />
//             <View style={tw`flex-1 flex-col gap-5 pt-1`} >
//                 <ProgressBar height={10} progress={80} />
//                 <View style={tw`flex-col flex-1 gap-4 `}>
//                     <GlobalAddServices buttonText="Add Service" onPress={() => router.push('/(create-services)/[services_id]')} title="28 Services" icon={IconsAdd} bluebg={true} />
//                     <GlobalSearch
//                         placeholder="Search Services"
//                         value={searchText}
//                         onChangeText={setSearchText}
//                         onClear={() => setSearchText('')}
//                     />
//                     <View>
//                         <FilterTabBar
//                             initialFilter="All"
//                             onFilterChange={setActiveFilter}
//                             filters={["All", "Cleaning", "Sweeping", "Washing", "Drying"]}
//                         />
//                     </View>

//                     <View style={tw`flex-row items-center gap-2`}>

//                         <Text style={tw`text-headingText text-text16 font-sfpro-700`}>{activeFilter}</Text>
//                     </View>
//                     <ScrollView
//                         showsVerticalScrollIndicator={false}
//                         contentContainerStyle={tw`gap-4 pb-4`}
//                     >
//                         {services.map((item, index) => (
//                             <View key={index} style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl`}>
//                                 <View style={tw`flex-row items-center gap-2`}>
//                                     <SvgXml xml={IconsGray} />
//                                     <View style={tw`flex-col gap-1.5`}>
//                                         <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
//                                             {item.name}
//                                         </Text>
//                                         <View style={tw`bg-borderPrimary w-[70%] flex-row items-center gap-1 px-2 py-1 rounded-full`}>
//                                             <SvgXml xml={IconsWatch} />
//                                             <Text style={tw`text-gray text-text9 font-sfpro-400`}>
//                                                 {item.duration}
//                                             </Text>
//                                         </View>
//                                     </View>
//                                 </View>
//                                 <View style={tw`flex-col gap-1.5 items-end`}>
//                                     <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
//                                         ${item.price.toFixed(2)}
//                                     </Text>
//                                 </View>
//                             </View>
//                         ))}
//                     </ScrollView>

//                     <MainButton
//                         title="Next"
//                         onPress={() => router.push('/invite-employee')}
//                     />
//                 </View>
//             </View>
//         </PageWrapper>
//     )
// }


import tw from '@/src/lib/tailwind';
import React, { useCallback, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

import {
    IconsAdd,
    IconsDeleted,
    IconsGray,
    IconsWatch,
} from '@/assets/Icons';
import FilterTabBar from '@/src/components/FilterTabBar';
import GlobalAddServices from '@/src/components/GlobalAddServies';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ProgressBar from '@/src/components/ProgressBar';
import ServicesModal from '@/src/components/ui/modal/ServicesModal';
import { DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils';
import { useRouter } from 'expo-router';

type ServiceItem = {
    id: string;
    name: string;
    duration: string;
    price: number;
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
                    <View style={tw`flex-row items-center justify-between p-2.5 border border-border rounded-xl`}>
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconsGray} />
                            <View style={tw`flex-col gap-1`}>
                                <Text style={tw`text-headingText text-text14 font-sfpro-600`}>{item.name}</Text>
                                <View style={tw`bg-borderPrimary w-[70%] flex-row items-center gap-0.5 px-1.5  py-0.5 rounded-full`}>
                                    <SvgXml xml={IconsWatch} />
                                    <Text style={tw`text-gray text-text9 font-sfpro-400`}>{item.duration}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={tw`flex-col gap-1.5 items-end`}>
                            <Text style={tw`text-primaryColor text-text18 font-sfpro-700`}>
                                ${item.price.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

export default function ConfigureServices() {
    const router = useRouter();

    const initialServices: ServiceItem[] = Array.from({ length: 5 }, (_, index) => ({
        id: `service-${index}`,
        name: 'Pressure Wash',
        duration: '1h 15min',
        price: 556.0,
    }));

    const [services, setServices] = useState<ServiceItem[]>(initialServices);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const handleDelete = useCallback((id: string) => {
        setServices((prev) => prev.filter((s) => s.id !== id));
    }, []);

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Configure Services' subtitle='Skip' route={() => router.push('/(select-plan)/invite-employee')} />

            <View style={tw`flex-1 flex-col gap-5 pt-1`}>
                <View style={tw` flex-col gap-5 pt-1`}>
                    <ProgressBar height={10} progress={80} />
                    <View style={tw`flex-col  gap-4`}>
                        <GlobalAddServices
                            buttonText="Add Service"
                            onPress={() => router.push('/(create-services)/[services_id]')}
                            title={`${services.length} Services`}
                            icon={IconsAdd}
                            bluebg={true}
                        />
                        <GlobalSearch
                            placeholder="Search Services"
                            value={searchText}
                            onChangeText={setSearchText}
                            onClear={() => setSearchText('')}
                        />
                        <FilterTabBar
                            initialFilter="All"
                            onFilterChange={setActiveFilter}
                            filters={['All', 'Cleaning', 'Sweeping', 'Washing', 'Drying']}
                        />
                        <View style={tw`flex-row items-center gap-2`}>
                            <Text style={tw`text-headingText text-text16 font-sfpro-700`}>{activeFilter}</Text>
                        </View>
                    </View>
                </View>

                <View style={tw`flex-col justify-between`}>
                    <ScrollView contentContainerStyle={tw`flex-col  gap-4`}>
                        {services.map((item) => (
                            <SwipeableItem key={item.id} item={item} onDelete={handleDelete} />
                        ))}
                    </ScrollView>
                </View>


            </View>
            <MainButton
                title="Next"
                onPress={() => router.push('/invite-employee')}
            />

            <ServicesModal visible={modalVisible} setVisible={setModalVisible} isExtraService={false} />
        </PageWrapper>
    );
}

