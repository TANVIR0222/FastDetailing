import { IconNewPayment } from '@/assets/Icons'
import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { cardValidationSchema } from '@/src/utils/auth-validationSchema'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function ChangePaymentMethod() {

    const handleCardInfoSubmit = () => {

        router.push('/account-info/change_billing_frequency')
    }

    return (
        <PageWrapper>
            <GlobalTopBar title='Change Payment Method' />
            <View style={tw`flex-1 flex-col gap-5  `}>
                <View style={tw`flex-row items-center bg-white border border-borderPrimary p-3 gap-3 rounded-xl`}>
                    <SvgXml xml={IconNewPayment} />
                    <View>
                        <Text style={tw` text-headingText font-sfpro-600 text-text12`}>
                            Method
                        </Text>
                        <Text style={tw` text-headingText font-sfpro-600 text-text12`}>
                            **** **** **** 4820
                        </Text>
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
                                    <GlobalMainInput
                                        label="Card Number"
                                        placeholder='Enter Card Number'
                                        value={values.cardNumber}
                                        onChangeText={handleChange("cardNumber")}
                                        onBlur={handleBlur("cardNumber")}
                                        error={errors.cardNumber}
                                        touched={touched.cardNumber}
                                        keyboardType="default"
                                    />
                                    <View style={tw` flex-row gap-4  justify-between`}>
                                        <View style={tw` flex-1`} >
                                            <GlobalMainInput
                                                label="Expiry Date"
                                                placeholder='MM/YY'
                                                value={values.expiry}
                                                onChangeText={handleChange("expiry")}
                                                onBlur={handleBlur("expiry")}
                                                error={errors.expiry}
                                                touched={touched.expiry}
                                                keyboardType="phone-pad"
                                            />
                                        </View>
                                        <View style={tw` flex-1`} >

                                            <GlobalMainInput
                                                label="CVV"
                                                placeholder='CVV'
                                                value={values.cvv}
                                                onChangeText={handleChange("cvv")}
                                                onBlur={handleBlur("cvv")}
                                                error={errors.cvv}
                                                touched={touched.cvv}
                                                keyboardType="default"
                                            />
                                        </View>
                                    </View>
                                    <GlobalMainInput
                                        label="Card Holder"
                                        placeholder='Holder Name'
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
                                        title={"Update payment method"}
                                        onPress={() => handleSubmit()}
                                        bm={true}
                                    // disabled={isLoading}
                                    // onSignUpPress={() => router.push('/(select-plan)/select-plan')} // your signup route
                                    />
                                </View>
                            </View>
                        )
                        }
                    </Formik>
                </View>
            </View>
        </PageWrapper>
    )
}