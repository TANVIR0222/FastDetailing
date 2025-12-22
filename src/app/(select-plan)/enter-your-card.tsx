import { IconsPurpleTick } from '@/assets/Icons'
import GlobalInput from '@/src/components/GlobalInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import ProgressBar from '@/src/components/ProgressBar'
import tw from '@/src/lib/tailwind'
import { cardValidationSchema } from '@/src/utils/auth-validationSchema'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function EnterYourCard() {

    const handleCardInfoSubmit = () => router.push('/(select-plan)/bunsiness-houre')

    return (
        <PageWrapper>
            <GlobalTopBar title='Enter Your Card' />
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 flex-col gap-5 pt-1`}>
                    <ProgressBar height={10} progress={30} />

                    <ScrollView contentContainerStyle={tw` flex-1 flex-col gap-4 `}>

                        {/* Billing Summary */}
                        <View style={tw` gap-4 border border-[#999A9A4D] rounded-xl `}>
                            {/* Billing Summary */}
                            <View style={tw`bg-[#523BE4]  overflow-hidden rounded-xl`}>
                                <View style={tw`px-4 py-4 flex-row justify-between items-center `}>
                                    <Text style={tw`text-white text-text14 font-sfpro-700 `}>Billing Summary</Text>
                                    <View style={tw` flex-row gap-2 items-center bg-bgWhite px-3 py-2 rounded-xl`}>
                                        <SvgXml xml={IconsPurpleTick} />
                                        <Text style={tw` text-[#523BE4] text-text12 font-sfpro-400`}>Pro Monthly</Text>
                                    </View>
                                </View>
                                <View style={tw`bg-white px-4 py-3`}>
                                    <View style={tw`flex-row justify-between py-4`}>
                                        <Text style={tw` text-gray text-text12 font-sfpro-600`}>Amount</Text>
                                        <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>$45.55</Text>
                                    </View>
                                    <View style={tw`border-t border-gray/30  `} />
                                    <View style={tw`flex-row justify-between py-4 `}>
                                        <Text style={tw` text-gray text-text12 font-sfpro-600`}>Billing Cycle</Text>
                                        <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>Renew every month</Text>
                                    </View>
                                    <View style={tw`border-t border-gray/30 `} />
                                    <View style={tw`flex-row justify-between py-4 `}>
                                        <Text style={tw` text-gray text-text12 font-sfpro-600`}>Next Renewal</Text>
                                        <Text style={tw` font-sfpro-600 text-text12 text-headingText`}>Aug 8, 2025</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Card Input Fields */}
                        <View style={tw`flex-1  `}>
                            <Formik
                                initialValues={{ cardNumber: "", expiry: "", cvv: "", holderName: "" }}
                                validationSchema={cardValidationSchema}
                                onSubmit={handleCardInfoSubmit}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                                (
                                    <View style={tw`flex-1 flex-col gap-4 justify-between`}>
                                        <View>
                                            <GlobalInput
                                                label="Enter Card Number"
                                                value={values.cardNumber}
                                                onChangeText={handleChange("cardNumber")}
                                                onBlur={handleBlur("cardNumber")}
                                                error={errors.cardNumber}
                                                touched={touched.cardNumber}
                                                keyboardType="default"
                                            />
                                            <View style={tw` flex-row gap-4  justify-between`}>
                                                <View style={tw` flex-1`} >
                                                    <GlobalInput
                                                        label="MM/YY"
                                                        value={values.expiry}
                                                        onChangeText={handleChange("expiry")}
                                                        onBlur={handleBlur("expiry")}
                                                        error={errors.expiry}
                                                        touched={touched.expiry}
                                                        keyboardType="phone-pad"
                                                    />
                                                </View>
                                                <View style={tw` flex-1`} >

                                                    <GlobalInput
                                                        label="CVV"
                                                        value={values.cvv}
                                                        onChangeText={handleChange("cvv")}
                                                        onBlur={handleBlur("cvv")}
                                                        error={errors.cvv}
                                                        touched={touched.cvv}
                                                        keyboardType="default"
                                                    />
                                                </View>
                                            </View>
                                            <GlobalInput
                                                label="Holder Name"
                                                value={values.holderName}
                                                onChangeText={handleChange("holderName")}
                                                onBlur={handleBlur("holderName")}
                                                error={errors.holderName}
                                                touched={touched.holderName}
                                                keyboardType="default"
                                            />

                                        </View>
                                        <View>
                                            <MainButton
                                                // title={isLoading ? "Loading..." : "Next"}
                                                title={"Next"}
                                                // onPress={() => router.push('/(select-plan)/bunsiness-houre')}
                                                onPress={() => handleSubmit()}


                                            // disabled={isLoading}
                                            // onSignUpPress={() => router.push('/(select-plan)/select-plan')} // your signup route
                                            />
                                        </View>
                                    </View>
                                )
                                }
                            </Formik>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}