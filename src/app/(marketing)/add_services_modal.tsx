import GlobalButtonSheetClose from "@/src/components/GlobalButtonSheetClose";
import GlobalMainInput from "@/src/components/GlobalMainInput";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import tw from "@/src/lib/tailwind";
import { categoryNameValidationSchema, extraServicesValidationSchema } from "@/src/utils/auth-validationSchema";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Formik } from "formik";
import React from "react";
import { Pressable, Text, View } from "react-native";


export default function ChangePassModal() {

    const params = useLocalSearchParams<{ from?: string }>();
    const from = params.from ?? 'unknown'; // default fallback
    console.log(from);


    const isExtraService = from === 'update_services';
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
                    style={tw`w-full ${isExtraService ? 'sm:h-[55%] md:h-[55%]' : 'sm:h-[45%] md:h-[35%]'} rounded-t-3xl bg-bgWhite p-4`}
                >
                    <View style={tw`flex-1`}>
                        <Formik
                            initialValues={{
                                category_name: '',
                                serviceName: '',
                                price: '',
                                duration: ''
                            }}
                            validationSchema={isExtraService ? extraServicesValidationSchema : categoryNameValidationSchema}
                            onSubmit={handleBusinessSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View style={tw`flex-1 flex-col gap-4 `}>
                                    {/* Dynamic Title + Close */}
                                    <GlobalButtonSheetClose
                                        title={isExtraService ? 'New Extra Service' : 'Exclude customers below this spend'}
                                        onClose={() => router.back()}
                                    />

                                    {/* Conditional Form */}
                                    <View>

                                        <GlobalMainInput
                                            label="Minimum Spending Amount"
                                            placeholder="$50"
                                            value={values.category_name}
                                            onChangeText={handleChange('category_name')}
                                            onBlur={handleBlur('category_name')}
                                            error={errors.category_name}
                                            touched={touched.category_name}
                                        />
                                        <Text style={tw` text-gray text-text10 font-sfpro-400`} >
                                            Preview: Customers who have spent less than $50 will be excluded from this campaign.
                                        </Text>
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
