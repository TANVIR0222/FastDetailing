import { IconsAdd } from '@/assets/Icons'
import GlobalAddServices from '@/src/components/GlobalAddServies'
import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import JobCategory from '@/src/components/ui/JobCategory'
import tw from '@/src/lib/tailwind'
import { CreateNewCustomerValidationSchema } from '@/src/utils/from-validations'
import { router } from 'expo-router'
import { Formik } from 'formik'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'

export default function CreateNewCustomer() {
    const isLoading = false
    const handleBusinessSubmit = () => {

    }
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title='Create New Customer' />

            < >


                <Formik
                    initialValues={{ firstName: "", lastName: "", phone: "", address: "", email: "" }}
                    validationSchema={CreateNewCustomerValidationSchema}
                    onSubmit={handleBusinessSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                    (
                        <View style={tw`flex-1 flex-col  justify-between`}>
                            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw` pb-5 flex-col gap-4`} >
                                <View>
                                    <GlobalMainInput
                                        label="First Name *"
                                        value={values.firstName}
                                        onChangeText={handleChange("firstName")}
                                        onBlur={handleBlur("firstName")}
                                        error={errors.firstName}
                                        touched={touched.firstName}
                                    />

                                    <GlobalMainInput
                                        label="Last name *"
                                        value={values.lastName}
                                        onChangeText={handleChange("lastName")}
                                        onBlur={handleBlur("lastName")}
                                        error={errors.lastName}
                                        touched={touched.lastName}
                                    />

                                    <GlobalMainInput
                                        label="Phone Number *"
                                        keyboardType="phone-pad"
                                        value={values.phone}
                                        onChangeText={handleChange("phone")}
                                        onBlur={handleBlur("phone")}
                                        error={errors.phone}
                                        touched={touched.phone}
                                    />
                                    <GlobalMainInput
                                        label="Address *"
                                        keyboardType="default"
                                        value={values.address}
                                        onChangeText={handleChange("address")}
                                        onBlur={handleBlur("address")}
                                        error={errors.address}
                                        touched={touched.address}
                                    />
                                    <GlobalMainInput
                                        label="Email"
                                        keyboardType="default"
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        error={errors.email}
                                        touched={touched.email}
                                    />
                                </View>

                                <View style={tw` flex-col gap-4`}>
                                    <GlobalAddServices buttonText={'Add New Vehicle'} title='Vehicles' icon={IconsAdd} bluebg={true} onPress={() => router.push('/create-new-vehicle')} />
                                    <View style={tw`gap-2.5`}>
                                        {
                                            Array.from({ length: 3 }).map((items, index) => (
                                                <TouchableOpacity onPress={() => router.push('/modify-vehicle')} key={index} style={tw`w-full border border-gray/30 p-2.5 bg-white rounded-xl`}>
                                                    <JobCategory
                                                        customerName="2025 Tesla Model 3"
                                                        customerColor="Blue"
                                                        vehicleType="Truck"
                                                    />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </View>

                            </ScrollView>
                            <View>
                                <MainButton
                                    title={isLoading ? "Loading..." : "Send Invite"}
                                    onPress={() => handleSubmit()}  // simpler
                                    disabled={isLoading}
                                    bm={true}
                                />
                            </View>
                        </View>
                    )
                    }
                </Formik>

            </>
        </PageWrapper>
    )
}