import GlobalMainInput from "@/src/components/GlobalMainInput";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import PageWrapper from "@/src/components/PageWrapper";
import tw from "@/src/lib/tailwind";
import { AccountInfovalidationSchema } from "@/src/utils/auth-validationSchema";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { View } from "react-native";


export default function Index() {



    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);

    const handleBusinessSubmit = async (values: any) => {
        router.push('/auth/user-varification')
    }

    const [selectedPlan, setSelectedPlan] = useState<string>("");





    return (
        <PageWrapper>

            <KeyboardAvoidingWrapper>
                <GlobalTopBar icon={true} title='Account Info' />
                <View style={tw`flex-1  flex-col gap-7 `}>

                    <View style={tw`flex-1  `}>
                        <Formik
                            initialValues={{
                                change_name: "",
                                change_phone: "",
                                change_email: ""
                            }}
                            validationSchema={AccountInfovalidationSchema}
                            onSubmit={handleBusinessSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                            (
                                <View style={tw`flex-1 flex-col gap-4 justify-between`}>
                                    <View>
                                        <GlobalMainInput
                                            label="Change name"
                                            value={values.change_name}
                                            onChangeText={handleChange("change_name")}
                                            onBlur={handleBlur("change_name")}
                                            error={errors.change_name}
                                            touched={touched.change_name}
                                            keyboardType="default"
                                        />
                                        <GlobalMainInput
                                            label="Change Phone Number"
                                            value={values.change_phone}
                                            onChangeText={handleChange("change_phone")}
                                            onBlur={handleBlur("change_phone")}
                                            error={errors.change_phone}
                                            touched={touched.change_phone}
                                            keyboardType="phone-pad"
                                        />

                                        <GlobalMainInput
                                            label="Change Email"
                                            value={values.change_email}
                                            onChangeText={handleChange("change_email")}
                                            onBlur={handleBlur("change_email")}
                                            error={errors.change_email}
                                            touched={touched.change_email}
                                            keyboardType="default"
                                        />

                                    </View>
                                    <View>
                                        <MainButton
                                            title={isLoading ? "Loading..." : "Save"}
                                            onPress={() => handleSubmit()}
                                            disabled={isLoading}
                                            bm={true}
                                        // onSignUpPress={() => router.push('')}
                                        />
                                    </View>
                                </View>
                            )
                            }
                        </Formik>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>


        </PageWrapper>
    )
}