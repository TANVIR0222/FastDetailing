import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import PaymentPendingCard from '@/src/components/ui/Home/PaymentPendingCard'
import tw from '@/src/lib/tailwind'
import { cardValidationSchema } from '@/src/utils/auth-validationSchema'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ChargeCustomer() {

    const [active, setActive] = useState(0);

    const filters = [
        "No Tip\n$0.00",
        "18%\n$24.25",
        "20%\n$27.25",
        "25%\n$33.25",
    ];

    const handleCardInfoSubmit = () => { }


    return (
        <PageWrapper>
            <GlobalTopBar title='Charge Customer' />
            <View style={tw` flex-col gap-4 flex-1 `}>
                {/* payment request */}
                <PaymentPendingCard pending={true} />


                {/* additional tip */}
                <View style={tw` flex-col gap-4 `}>
                    <Text style={tw`text-headingText text-text14 font-sfpro-600 `}>Additional Tip</Text>

                    <View style={tw`flex-row gap-2  justify-between `}>

                        {filters.map((item, index) => {
                            const [top, bottom] = item.split("\n");
                            const isActive = index === active;

                            const content = (
                                <View
                                    style={tw.style(
                                        "px-5 py-2 bg-gray/20 rounded-2xl items-center justify-center",
                                        isActive ? " bg-primaryColor" : " "
                                    )}
                                >
                                    <Text style={tw`text-text10 font-sfpro-600 ${isActive ? "text-white" : "text-gray"}`}>
                                        {top}
                                    </Text>
                                    <Text style={tw`text-text10 font-sfpro-400 ${isActive ? "text-white" : "text-gray"}`}>
                                        {bottom}
                                    </Text>
                                </View>
                            );

                            return (
                                <TouchableOpacity key={index} onPress={() => setActive(index)} activeOpacity={0.8}>
                                    {isActive ? (
                                        <View style={tw`rounded-2xl overflow-hidden`}>
                                            {content}
                                        </View>
                                    ) : (
                                        content
                                    )}
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <Text style={tw` text-text14 font-sfpro-600 text-headingText `}>Payment Information</Text>
                <View style={tw` flex-1 `}>
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
                                        value={values.cardNumber}
                                        onChangeText={handleChange("cardNumber")}
                                        onBlur={handleBlur("cardNumber")}
                                        error={errors.cardNumber}
                                        touched={touched.cardNumber}
                                        keyboardType="default"
                                        placeholder='Enter Card Number'

                                    />
                                    <View style={tw` flex-row gap-4  justify-between`}>
                                        <View style={tw` flex-1`} >
                                            <GlobalMainInput
                                                label="Expiry Date"
                                                value={values.expiry}
                                                onChangeText={handleChange("expiry")}
                                                onBlur={handleBlur("expiry")}
                                                error={errors.expiry}
                                                touched={touched.expiry}
                                                keyboardType="phone-pad"
                                                placeholder='MM/YY'
                                            />
                                        </View>
                                        <View style={tw` flex-1`} >

                                            <GlobalMainInput
                                                label="CVV"
                                                value={values.cvv}
                                                onChangeText={handleChange("cvv")}
                                                onBlur={handleBlur("cvv")}
                                                error={errors.cvv}
                                                touched={touched.cvv}
                                                keyboardType="default"
                                                placeholder='CVV'
                                            />
                                        </View>
                                    </View>
                                    <GlobalMainInput
                                        placeholder="Holder Name"
                                        value={values.holderName}
                                        onChangeText={handleChange("holderName")}
                                        onBlur={handleBlur("holderName")}
                                        error={errors.holderName}
                                        touched={touched.holderName}
                                        keyboardType="default"
                                        label='Card Holder'
                                    />

                                </View>
                                <View>
                                    <MainButton
                                        // title={isLoading ? "Loading..." : "Next"}
                                        title={"Submit Payment"}
                                        onPress={() => router.push('/invoice')}
                                        // disabled={isLoading}
                                        // onSignUpPress={() => router.push('/(select-plan)/select-plan')} // your signup route
                                        bm={true}
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