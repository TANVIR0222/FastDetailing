import GlobalInput from "@/src/components/GlobalInput";
import GlobalRadioButtons from "@/src/components/GlobalRadioButtons";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import PageWrapper from "@/src/components/PageWrapper";
import ProgressBar from "@/src/components/ProgressBar";
import tw from "@/src/lib/tailwind";
import { businessInfoValidationSchema } from "@/src/utils/auth-validationSchema";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { View } from "react-native";


export default function Index() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);

    const handleBusinessSubmit = async () => {
        router.push('/(select-plan)/select-plan')
    }

    const [selectedPlan, setSelectedPlan] = useState<string>("");

    console.log(selectedPlan);




    return (
        <PageWrapper>

            <KeyboardAvoidingWrapper>
                <GlobalTopBar icon={true} title='Business Info' />
                <View style={tw`flex-1  flex-col gap-5 pt-1 `}>
                    {/* <SvgXml xml={IconsProgress} /> */}
                    <ProgressBar height={10} progress={10} />

                    <View style={tw`flex-1  `}>
                        <Formik
                            initialValues={{ business_name: "", business_phone: "", business_address: "" }}
                            validationSchema={businessInfoValidationSchema}
                            onSubmit={handleBusinessSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                            (
                                <View style={tw`flex-1 flex-col gap-4 justify-between`}>
                                    <View style={tw`flex-1 flex-col `}>
                                        <GlobalInput
                                            label="Business Name"
                                            value={values.business_name}
                                            onChangeText={handleChange("business_name")}
                                            onBlur={handleBlur("business_name")}
                                            error={errors.business_name}
                                            touched={touched.business_name}
                                            keyboardType="default"
                                        />
                                        <GlobalInput
                                            label="Business Phone Number"
                                            value={values.business_phone}
                                            onChangeText={handleChange("business_phone")}
                                            onBlur={handleBlur("business_phone")}
                                            error={errors.business_phone}
                                            touched={touched.business_phone}
                                            keyboardType="phone-pad"
                                        />
                                        <GlobalRadioButtons
                                            selectedValue={selectedPlan}
                                            onSelect={(value) => setSelectedPlan(value)}
                                            title="Business Type"
                                            options={["Only In Shop", "Only Mobile", "Both"]}
                                            boxBorder={false}
                                        />

                                        <GlobalInput
                                            label="Business Address"
                                            value={values.business_address}
                                            onChangeText={handleChange("business_address")}
                                            onBlur={handleBlur("business_address")}
                                            error={errors.business_address}
                                            touched={touched.business_address}
                                            keyboardType="default"
                                        />

                                    </View>
                                    <View>
                                        <MainButton
                                            title={isLoading ? "Loading..." : "Next"}
                                            // onPress={() => router.push('/(select-plan)/select-plan')}
                                            onPress={() => handleSubmit()}
                                            disabled={isLoading}
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