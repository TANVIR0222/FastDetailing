
import { IconUserDeleted } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";



export default function Deleted_account_modal() {




    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            style={tw`flex-1 bg-black/30 items-center justify-center`}
        >
            <View
                style={tw`w-[90%]  bg-bgWhite rounded-3xl overflow-hidden items-center justify-center p-5`}
            >


                <View style={tw`  gap-4 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        <SvgXml xml={IconUserDeleted} />
                    </View>

                    <View style={tw`gap-2 w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            This will affect 12 upcoming jobs
                        </Text>

                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            Delete this employee impacts scheduled jobs. Are you sure?
                        </Text>
                    </View>





                    <View style={tw`flex-row items-center gap-4 `}>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={tw`flex-1 border border-primaryColor p-2.5 rounded-xl items-center justify-center`}
                        >
                            <Text style={tw`text-primaryColor text-text14 font-sfpro-700`}>
                                No
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={tw`flex-1 bg-primaryColor p-2.5 rounded-xl items-center justify-center `}
                        >
                            <Text style={tw`text-textWhite text-text14 font-sfpro-700`}>
                                Confirm Delete
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
        </Pressable>
    );
};

