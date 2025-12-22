import GlobalInput from '@/src/components/GlobalInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import ProgressBar from '@/src/components/ProgressBar'
import tw from '@/src/lib/tailwind'
import { businessUrlValidationSchema } from '@/src/utils/auth-validationSchema'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React from 'react'
import { Text, View } from 'react-native'

export default function BusinessWebsiteurl() {

    const handleBusinessSubmit = () => {

    }

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Business Website URL' subtitle='Skip' route={() => router.push('/(select-plan)/configure-services')} />
            <View style={tw`flex-1 flex-col gap-5 pt-1`} >
                <ProgressBar height={10} progress={70} />
                <Text style={tw`text-gray text-center text-text12 font-sfpro-400 `}>We will automatically detect and group your services based on the content of your website</Text>
                <Formik
                    initialValues={{ businessUrl: "" }}
                    validationSchema={businessUrlValidationSchema}
                    onSubmit={handleBusinessSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                    (
                        <KeyboardAvoidingWrapper>
                            <View style={tw`flex-1 flex-col  justify-between`}>
                                <View>
                                    <GlobalInput
                                        label="www.example.com"
                                        value={values.businessUrl}
                                        onChangeText={handleChange("businessUrl")}
                                        onBlur={handleBlur("businessUrl")}
                                        error={errors.businessUrl}
                                        touched={touched.businessUrl}
                                        keyboardType="default"
                                    />
                                </View>
                                <View>
                                    <MainButton
                                        // title={isLoading ? "Loading..." : "Next"}
                                        title='Next'
                                        onPress={() => handleSubmit()}
                                    // disabled={isLoading}
                                    />
                                </View>
                            </View>
                        </KeyboardAvoidingWrapper>
                    )
                    }
                </Formik>
            </View>
        </PageWrapper>
    )
}