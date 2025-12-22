
import { IconEmailTemplate, IconsChangePass, IconsEmainVryfi } from "@/assets/Icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import MainButton from "../components/MainButton";

interface ForgotPasswordParams {
    from?: string;
}

export default function Change_pass_modal() {


    const params = useLocalSearchParams<{ from?: string }>();
    const from = params.from ?? 'unknown'; // undefined  'unknown' 
    console.log(params);


    console.log('Came from:', from);



    return (
        <Pressable
            onPress={() => {
                router.back();
            }}
            style={tw`flex-1 bg-black/30 items-center justify-center`}
        >
            <View
                style={tw`w-[90%]    bg-bgWhite rounded-3xl overflow-hidden items-center justify-center p-5`}
            >
                {from === 'forgot-pass' &&
                    <View style={tw` gap-4 w-full`}>
                        {/* <SvgXml xml={Icon.check} /> */}

                        <View style={tw` items-center`}>
                            <SvgXml xml={IconsEmainVryfi} />
                        </View>

                        <View style={tw`gap-2 w-full items-center`}>
                            <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                                Email Sent!
                            </Text>
                            <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                                We&apos;ve sent a password reset link to your email address. Please check your inbox and follow the instructions.
                            </Text>
                            {/* emain view */}
                            <View style={tw`gap-2 w-full flex-row items-center p-4 rounded-xl border-gray/30 border justify-between `}>
                                <Text style={tw`text-gray text-text12 font-sfpro-400 `}>Email sent to:</Text>
                                <Text style={tw`text-headingText text-text12 font-sfpro-500 `}>uxrizwanali@gmail.com</Text>
                            </View>
                            <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                                Didn&apos;t receive the email? Check your spam folder or try again in a few minutes.
                            </Text>
                        </View>


                        <MainButton onPress={() => router.push('/auth/created-new-pasword')} title="Got it" />


                    </View>}
                {from === 'change-pass' && <View style={tw` gap-6 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        <SvgXml xml={IconsChangePass} />
                    </View>

                    <View style={tw`gap-2 w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            Password Changed Successfully
                        </Text>

                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            Your password has been successfully changed. You can now go back to login and sign in with your new password.
                        </Text>
                    </View>


                    <MainButton onPress={() => router.push('/auth')} title="Go Back To Login" />


                </View>}
                {from === 'invite' && <View style={tw` gap-6 w-full`}>
                    {/* <SvgXml xml={Icon.check} /> */}

                    <View style={tw` items-center`}>
                        <SvgXml xml={IconEmailTemplate} />
                    </View>

                    <View style={tw`gap-2 w-full items-center`}>
                        <Text style={tw`text-headingText text-text16 font-sfpro-700 text-center`}>
                            Confirm Invitation Cancellation
                        </Text>

                        <Text style={tw`text-gray text-text10 font-sfpro-400 text-center`}>
                            This will remove the invitation and prevent further access.
                        </Text>
                    </View>


                    <View style={tw`flex-row items-center gap-5`}>
                        <TouchableOpacity onPress={() => {
                            router.back();
                        }} style={tw`border border-primaryColor flex-1 p-4 rounded-xl`}>
                            <Text style={tw`text-primaryColor text-text14 text-center font-sfpro-700`}>
                                No
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            router.back();
                        }} style={tw`bg-primaryColor flex-1 p-4 rounded-xl`}>
                            <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`}>
                                Yes
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>}
            </View>
        </Pressable>
    );
};

