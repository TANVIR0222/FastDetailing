import { IconAttach, IconCamera, IconPhone, IconsBack, IconSend, IconsImageDeleted, IconUser } from '@/assets/Icons'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import tw from '@/src/lib/tailwind'
import { handlePress } from '@/src/utils/utils'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {

    const messages = [
        {
            id: 1,
            sender: "Alex",
            text: "Hello Alex! I can definitely help you with that. Can you send me photos of the leak?",
            time: "10:32 AM",
            image: true,
        },

        {
            id: 2,
            sender: "You",
            text: "Hello Alex! I can definitely help you with that can you send me photos of the leak ?",
            time: "10:35 AM",
            image: false,
        },
        {
            id: 3,
            sender: "Alex",
            text: "Hello Alex! I can definitely help you with that. Can you send me photos of the leak?",
            time: "10:32 AM",
            image: true,
        },
    ];

    const [images, setImages] = useState<string[]>([]);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            aspect: [4, 3],
            quality: 1,
            allowsMultipleSelection: true
        });

        if (!result.canceled) {
            setImages([...images, result.assets[0].uri]);
        }
    };

    const handleImageRemoved = (uri: string) => {
        const updated = images.filter((item) => item !== uri); // <-- fix
        setImages(updated);
    };

    const handleSend = () => {
        // Handle send logic here
        console.log("000");

    };

    return (
        <View style={tw`flex-1 bg-[#FEFEFE]`}>
            <KeyboardAvoidingWrapper>
                {/* Header */}
                <View style={tw`flex-row items-center justify-between px-4 py-2 relative `}>
                    {/* Back Button */}
                    <Pressable
                        onPress={() => router.back()}
                        style={tw``}
                    >
                        <SvgXml xml={IconsBack} />
                    </Pressable>

                    {/* Center Title */}
                    {/* <View style={tw` border-black border absolute left-0 right-0`}> */}
                    <Text
                        style={tw` border-black absolute left-2/5  text-text16 font-sfpro-600 text-black`}>
                        Alex James
                    </Text>
                    {/* </View> */}

                    {/* Right Icons */}
                    <View style={tw`flex-row gap-2`}>
                        <TouchableOpacity onPress={handlePress}>
                            <SvgXml xml={IconPhone} />
                        </TouchableOpacity>
                        <SvgXml xml={IconUser} />
                    </View>
                </View>

                {/* Messages */}
                <ScrollView
                    style={tw`flex-1 mt-2`}
                    contentContainerStyle={tw`px-4 pb-4 gap-3`}
                >
                    {/* Day Tag */}
                    <View style={tw`flex-row justify-center`}>
                        <View style={tw`bg-gray rounded px-2 py-1 items-center`}>
                            <Text style={tw`text-text12 font-sfpro-500 text-white`}>Monday</Text>
                        </View>
                    </View>

                    {/* Message List */}
                    {messages.map((msg) => (
                        <View
                            key={msg.id}
                            style={tw.style(
                                "p-3",
                                msg.sender === "You"
                                    ? "bg-[#FEFEFE] border border-gray/30 rounded-bl-xl rounded-r-xl self-end"
                                    : "bg-primaryColor rounded-l-xl rounded-br-xl self-start"
                            )}
                        >
                            <Text
                                style={tw.style(
                                    msg.sender === "You"
                                        ? "text-headingText font-sfpro-500 text-text12"
                                        : "text-[#FEFEFECC] font-sfpro-400 text-text12"
                                )}
                            >
                                {msg.text}
                            </Text>

                            <View style={tw`flex-row items-center justify-between mt-2`}>
                                {msg.image && (
                                    <View style={tw`flex-row items-center gap-2`}>
                                        <Image
                                            source={require("@/assets/images/image.png")}
                                            style={tw`w-5 h-5 rounded-full`}
                                        />
                                        <Text style={tw`text-text10 text-[#FEFEFECC] font-sfpro-500`}>
                                            {msg.sender}
                                        </Text>
                                    </View>
                                )}
                                <Text
                                    style={tw.style(
                                        "text-text10",
                                        msg.sender === "You" ? "text-gray text-right flex-1" : "text-[#FEFEFECC]"
                                    )}
                                >
                                    {msg.time}
                                </Text>
                            </View>
                        </View>
                    ))}

                </ScrollView>


                <View style={tw`flex-col gap-1`} >
                    <View style={tw`flex-row  gap-2`}>
                        <TouchableOpacity onPress={() => router.push('/insert_placeholder_modal')} style={tw`flex-row items-center gap-1 border p-2  bottom-2.5 left-2.5 border-gray/30 px-2.5 rounded-full`}>
                            <SvgXml xml={IconAttach} />
                            <Text style={tw`text-text10 font-sfpro-300  text-bgGreen`}>
                                Attach Invoice
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => router.push('/insert_placeholder_modal')} style={tw`flex-row items-center gap-1 border p-2  bottom-2.5 left-2.5 border-gray/30  px-2.5 rounded-full`}>
                            <View style={tw`w-2 h-2 bg-primaryColor rounded-full`} />
                            <Text style={tw`text-text10 font-sfpro-400  text-primaryColor`}>
                                Send Job Status
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Bottom Input */}


                    {images.length > 0 && (

                        <View
                            style={tw.style(
                                "flex-row items-center py-2 gap-2 bg-[#FEFEFE] rounded-t-xl px-4",
                                {
                                    borderTopWidth: 1,
                                    borderLeftWidth: 1,
                                    borderRightWidth: 1,
                                    borderColor: "rgba(153, 154, 154, 0.10)",
                                }
                            )}
                        >

                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`py-2`}>
                                {images.map((item, index) => (
                                    <View key={index} style={tw`relative mr-3`}>
                                        <Image
                                            source={{ uri: item }}
                                            style={tw`w-16 h-16 rounded`}
                                            resizeMode="cover"
                                        />
                                        <TouchableOpacity
                                            onPress={() => handleImageRemoved(item)}
                                            style={tw`absolute -top-1.5 -right-1.5  rounded p-0.5`}
                                        >
                                            <SvgXml xml={IconsImageDeleted} width={16} height={16} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>

                        </View>
                    )}


                    <View
                        style={tw.style(
                            "flex-row items-center py-2 gap-2 bg-[#FEFEFE] rounded-t-xl px-4",
                            {
                                borderTopWidth: 1,
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderColor: "rgba(153, 154, 154, 0.10)",
                            }
                        )}
                    >
                        <TouchableOpacity onPress={() => pickImage()} style={tw` rounded-full `}>
                            <SvgXml xml={IconCamera} />
                        </TouchableOpacity>

                        <TextInput
                            style={tw`flex-1 text-text12 text-gray font-sfpro-400 px-4 py-3 bg-borderPrimary rounded-full`}
                            placeholder="Type something"
                            placeholderTextColor="#999a9a"
                        />

                        <Pressable>
                            <SvgXml xml={IconSend} />
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>
        </View>
    )
}