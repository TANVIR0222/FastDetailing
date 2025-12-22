import { IconsHomeAddICons } from "@/assets/Icons";
import PageWrapper from "@/src/components/PageWrapper";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";



const Chat = () => {

    const messages = Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        name: "Alex James",
        message: "Hey, There How are you ?",
        time: "2 min ago",
        unread: i === 0 ? 3 : 0
    }));

    return (
        <PageWrapper>
            <View style={tw`flex-1 `}>

                {/* Status Bar */}


                {/* Header */}
                <View style={tw`flex-row justify-between items-center  py-2 mt-2`}>
                    <Text style={tw`text-text18 font-sfpro-900 text-headingText`}>Chat</Text>
                    <TouchableOpacity onPress={() => router.push('/(select-customer)/select-worker')} >
                        <SvgXml xml={IconsHomeAddICons} />
                    </TouchableOpacity>
                </View>

                {/* Messages */}
                <ScrollView style={tw`flex-1  mt-2`} contentContainerStyle={tw`gap-3`}>
                    {messages.map((msg) => (
                        <TouchableOpacity onPress={() => router.push('/common')} key={msg.id} style={tw`flex-row justify-between items-center p-3 border border-gray/30 rounded-xl bg-white`}>
                            <View style={tw`flex-1`}>
                                <Text style={tw`text-text14 font-sfpro-600 text-headingText`}>{msg.name}</Text>
                                <Text style={tw`text-text12 font-sfpro-400 text-gray mt-1`}>{msg.message}</Text>
                            </View>
                            <View style={tw`items-end justify-center`}>
                                {msg.unread > 0 && (
                                    <View style={tw`bg-primaryColor rounded-full w-5 h-5 justify-center items-center mb-1`}>
                                        <Text style={tw`text-white text-text10 font-sfpro-500`}>{msg.unread}</Text>
                                    </View>
                                )}
                                <Text style={tw`text-text10 font-sfpro-400 text-gray`}>{msg.time}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>



            </View>
        </PageWrapper>
    );
};

export default Chat;
