import GlobalButtonSheetClose from "@/src/components/GlobalButtonSheetClose";
import GlobalMainInput from "@/src/components/GlobalMainInput";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import tw from "@/src/lib/tailwind";
import { GeneratevalidationSchema } from "@/src/utils/auth-validationSchema";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Pressable, View } from "react-native";


export default function ChangePassModal() {


    const isLoading = false;

    const handleBusinessSubmit = (values: any) => {
        console.log('Submitted values:', values);
    };




    return (
        <KeyboardAvoidingWrapper>
            <Pressable
                onPress={() => router.back()}
                style={tw`flex-1 items-end justify-end bg-black/30`}
            >
                <View
                    style={tw`w-full sm:h-[55%] md:h-[55%] rounded-t-3xl bg-bgWhite p-5`}
                >
                    <View style={tw`flex-1`}>
                        <Formik
                            initialValues={{
                                name: '',
                                paste_URL: '',

                            }}
                            validationSchema={GeneratevalidationSchema}
                            onSubmit={handleBusinessSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View style={tw`flex-1 flex-col gap-4 `}>
                                    {/* Dynamic Title + Close */}
                                    <GlobalButtonSheetClose
                                        title={'Generate QR Code'}
                                        onClose={() => router.back()}
                                    />

                                    <View>
                                        <GlobalMainInput
                                            label="Name"
                                            value={values.name}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            error={errors.name}
                                            touched={touched.name}
                                        />
                                        <GlobalMainInput
                                            label="Paste URL"
                                            value={values.paste_URL}
                                            onChangeText={handleChange('paste_URL')}
                                            onBlur={handleBlur('paste_URL')}
                                            error={errors.paste_URL}
                                            touched={touched.paste_URL}
                                        />
                                    </View>

                                    {/* Save Button */}
                                    <MainButton
                                        title={isLoading ? 'Loading...' : 'Save'}
                                        onPress={() => handleSubmit()}
                                        disabled={isLoading}
                                        bm={true}
                                    />
                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </Pressable>
        </KeyboardAvoidingWrapper>
    );
}
