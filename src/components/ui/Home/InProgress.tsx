import tw from '@/src/lib/tailwind';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { IconsAdd, IconsCamera, IconsImageDeleted, IconsTruck } from '@/assets/Icons';
import { UpComeingProps } from '@/src/utils/type';
import { router } from 'expo-router';
import GlobalAddServices from '../../GlobalAddServies';
import MainButton from '../../MainButton';

type ImageItem = {
    uri: string;
    type?: 'image' | 'video';
};

const InProgress = ({ setNextTabs }: UpComeingProps) => {
    const [selectedImages, setSelectedImages] = useState<ImageItem[]>([]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"], // image + video
            allowsMultipleSelection: true, // multiple  images 
            selectionLimit: 5, // max 5 images
            quality: 1,
        });

        if (!result.canceled) {
            const newImages = result.assets.map(asset => ({ uri: asset.uri, type: 'image' }));
            setSelectedImages([...selectedImages, ...newImages]);
        }
    };

    const handleImageRemoved = (uri: string) => {
        const updated = selectedImages.filter((item) => item.uri !== uri);
        setSelectedImages(updated);
    };

    return (
        <View style={tw`flex-col flex-1 justify-between   pt-4  gap-2`}>
            <ScrollView contentContainerStyle={tw`flex-col  gap-4`} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={tw`flex-col items-center gap-2`}>
                    <SvgXml xml={IconsCamera} />
                    <Text style={tw`text-text16 text-headingText font-sfpro-700`}>Take before photos</Text>
                    <Text style={tw`text-text10 font-medium text-gray text-center`}>
                        Take before photos of each vehicle to document its initial condition.
                    </Text>
                </View>

                {/* Vehicle Section */}
                <View style={tw`border border-gray/30 p-3 rounded-xl flex-col gap-3`}>
                    {/* Vehicle Info */}
                    <View style={tw`flex-row justify-between items-center`}>
                        <View style={tw`flex-row items-center  gap-3 flex-1`}>
                            <Image source={require('@/assets/images/Rectangle-34624894.png')} style={tw`w-8 h-8`} resizeMode="cover" />
                            <View style={tw`flex-col justify-center`}>
                                <Text style={tw`text-text10 font-sfpro-600 text-headingText`}>2025 Tesla Model 3</Text>
                                <View style={tw`flex-row items-center gap-1`}>
                                    <View style={tw`w-2 h-2 bg-primaryColor rounded-full`} />
                                    <Text style={tw`text-text10 font-medium text-headingText capitalize`}>Blue</Text>
                                </View>
                            </View>
                        </View>

                        {/* Vehicle Type */}
                        <View style={tw`bg-[#0087ff1A] px-1 py-0.5 rounded-full`}>
                            <View style={tw`flex-row items-center gap-1`}>
                                <SvgXml xml={IconsTruck} />
                                <Text style={tw`text-text10  font-sfpro-600 text-primaryColor`}>Truck</Text>
                            </View>
                        </View>
                    </View>

                    <GlobalAddServices buttonText="Add Service" title={`${selectedImages.length || 0}Photos`} onPress={() => router.push({ pathname: '/select-vehicle' })} icon={IconsAdd} bluebg={true} />

                    {/* Selected Images */}
                    {selectedImages.length > 0 && (
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`py-2`}>
                            {selectedImages.map((item, index) => (
                                <View key={index} style={tw`relative mr-3`}>
                                    <Image
                                        source={{ uri: item.uri }}
                                        style={tw`w-16 h-16 rounded`}
                                        resizeMode="cover"
                                    />
                                    <TouchableOpacity
                                        onPress={() => handleImageRemoved(item.uri)}
                                        style={tw`absolute -top-1.5 -right-1.5 bg-orange rounded p-0.5`}
                                    >
                                        <SvgXml xml={IconsImageDeleted} width={16} height={16} />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </View>
            </ScrollView>

            <MainButton onPress={() => setNextTabs(4)} title='Next' bm={true} />
        </View>
    );
};

export default InProgress;
