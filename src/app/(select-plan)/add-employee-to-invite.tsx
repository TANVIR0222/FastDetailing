import { IconsAdd } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { addEmployeeValidationSchema } from '@/src/utils/auth-validationSchema'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function AddEmployeeInvite() {
    const isLoading = false
    const handleBusinessSubmit = () => {

    }
    return (
        <PageWrapper>
            <GlobalTopBar title='Add Employee' icon={true} />
            <View style={tw`flex-1   `}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-1`} >

                    <Formik
                        initialValues={{ firstName: "", lastName: "", phone: "" }}
                        validationSchema={addEmployeeValidationSchema}
                        onSubmit={handleBusinessSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                        (
                            <View style={tw`flex-1 flex-col gap-4 justify-between`}>
                                <View >
                                    <View>
                                        <GlobalMainInput
                                            label="First name"
                                            placeholder="Enter first name"
                                            value={values.firstName}
                                            onChangeText={handleChange("firstName")}
                                            onBlur={handleBlur("firstName")}
                                            error={errors.firstName}
                                            touched={touched.firstName}
                                        />

                                        <GlobalMainInput
                                            label="Last name"
                                            placeholder="Enter last name"
                                            value={values.lastName}
                                            onChangeText={handleChange("lastName")}
                                            onBlur={handleBlur("lastName")}
                                            error={errors.lastName}
                                            touched={touched.lastName}
                                        />

                                        <GlobalMainInput
                                            label="Phone"
                                            placeholder="Enter phone number"
                                            keyboardType="phone-pad"
                                            value={values.phone}
                                            onChangeText={handleChange("phone")}
                                            onBlur={handleBlur("phone")}
                                            error={errors.phone}
                                            touched={touched.phone}
                                        />
                                    </View>

                                    <View style={tw` flex-col gap-4`}>
                                        <GlobalAddServices buttonText="Add Service" title="Services" onPress={() => router.push('/choose-service')} icon={IconsAdd} bluebg={true} />
                                        <View style={tw`gap-2.5`}>
                                            {
                                                [1, 2,].map((items, index) => (
                                                    <TouchableOpacity key={index} onPress={() => router.push('/choose-service')} >
                                                        <View key={index} style={tw` justify-between flex-row p-2.5 border-border border  rounded-xl`}>
                                                            <View style={tw`flex-col  items-start gap-2`}>
                                                                <Text style={tw`text-headingText text-text12 font-sfpro-700`}>Cleaning</Text>
                                                                <View style={tw`bg-borderPrimary px-2 py-1 rounded-full`}>
                                                                    <Text style={tw`text-gray text-text9 font-sfpro-400 text-center`}>{index % 2 === 0 ? 'All' : 'Cleaning'}</Text>
                                                                </View>
                                                            </View>

                                                        </View>
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    </View>

                                </View>
                                <View>
                                    <MainButton
                                        title={isLoading ? "Loading..." : "Sent Invite"}
                                        onPress={() => handleSubmit()}  // simpler
                                        disabled={isLoading}
                                    />
                                </View>
                            </View>
                        )
                        }
                    </Formik>

                </ScrollView>
            </View>
        </PageWrapper>
    )
}