
import { IconsAddPhoto, IconsDeleteds, IconsEye } from '@/assets/Icons'
import tw from '@/src/lib/tailwind'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const ImageGallery = () => {
    const [imagesBefore, setImagesBefore] = useState<string[]>([
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
    ]);
    const [images, setImages] = useState<string[]>([
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
        require('@/assets/images/Rectangle-34624910.png'),
    ]);
    const [selectedBefore, setSelectedBefore] = useState<number | null>(null);
    const [selected, setSelected] = useState<number | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, result.assets[0].uri]);
        }
    };

    return (
        <View style={tw`border border-[#999a9a4D] rounded-lg p-4 flex-1 flex-col gap-4`}>
            <Text style={tw`text-gray text-text12 font-sfpro-600`}>
                Before
            </Text>

            <View style={tw`flex-wrap flex-row justify-between  gap-3`}>
                {imagesBefore.map((img, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelectedBefore(selectedBefore === index ? null : index)}
                        style={tw`relative`}
                    >
                        <Image
                            source={typeof img === 'string' ? { uri: img } : img}
                            style={{ width: 95, height: 95, borderRadius: 8 }}
                        />

                        {selectedBefore === index && (
                            <View
                                style={[
                                    tw`bg-black/60 absolute top-0 left-0 flex-col items-center justify-center gap-1 rounded-md`,
                                    { width: 95, height: 95 },
                                ]}
                            >
                                {/* Eye Button → Open Preview Modal */}
                                <TouchableOpacity onPress={() => {
                                    setPreview(typeof img === 'string' ? img : Image.resolveAssetSource(img).uri);
                                }}>
                                    <SvgXml xml={IconsEye} />
                                </TouchableOpacity>

                                <View style={tw`w-[30%] h-[1px] bg-white`} />

                                {/* Delete Button */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setImages(imagesBefore.filter((_, i) => i !== index));
                                        setSelected(null);
                                    }}
                                >
                                    <SvgXml xml={IconsDeleteds} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={tw`text-gray text-text12 font-sfpro-600`}>
                After
            </Text>
            <View style={tw`flex-wrap flex-row justify-between gap-3`}>
                {images.map((img, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelected(selected === index ? null : index)}
                        style={tw`relative`}
                    >
                        <Image
                            source={typeof img === 'string' ? { uri: img } : img}
                            style={{ width: 95, height: 95, borderRadius: 8 }}
                        />

                        {selected === index && (
                            <View
                                style={[
                                    tw`bg-black/60 absolute top-0 left-0 flex-col items-center justify-center gap-1 rounded-md`,
                                    { width: 95, height: 95 },
                                ]}
                            >
                                {/* Eye Button → Open Preview Modal */}
                                <TouchableOpacity onPress={() => {
                                    setPreview(typeof img === 'string' ? img : Image.resolveAssetSource(img).uri);
                                }}>
                                    <SvgXml xml={IconsEye} />
                                </TouchableOpacity>

                                <View style={tw`w-[30%] h-[1px] bg-white`} />

                                {/* Delete Button */}
                                <TouchableOpacity
                                    onPress={() => {
                                        setImages(images.filter((_, i) => i !== index));
                                        setSelected(null);
                                    }}
                                >
                                    <SvgXml xml={IconsDeleteds} />
                                </TouchableOpacity>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                onPress={pickImage}
                style={tw`flex-row justify-center bg-[#0087ff1A] py-3 rounded-lg items-center`}
            >
                <SvgXml xml={IconsAddPhoto} />
                <Text style={tw`text-text12 font-sfpro-600 text-primaryColor ml-2`}>
                    Add Photos
                </Text>
            </TouchableOpacity>

            {/* Fullscreen Preview Modal */}
            <Modal visible={!!preview} transparent animationType="fade">
                <Pressable onPress={() => setPreview(null)}
                    style={tw`flex-1 bg-black/90 items-center justify-center`}>
                    {preview && (
                        <Image
                            source={{ uri: preview }}
                            style={tw`w-[90%] h-[70%] rounded-lg`}
                            resizeMode="contain"
                        />
                    )}
                    <TouchableOpacity
                        style={tw`mt-4 bg-white/20 px-6 py-2 rounded-lg`}
                        onPress={() => setPreview(null)}
                    >
                        <Text style={tw`text-white font-sfpro-700 text-base`}>Close</Text>
                    </TouchableOpacity>
                </Pressable>
            </Modal>
        </View>
    )
}

export default ImageGallery

