import { IconDownArroGray, IconTopArroGray } from '@/assets/Icons'
import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { addEmployeeValidationSchema } from '@/src/utils/auth-validationSchema'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function AddBankAccount() {
    const dataOptions = ["1 Year", "6 Months", "3 Months", "4 Weeks"];
    const images = [
        require("@/assets/images/image-bank-1.png"),
        require("@/assets/images/image-bank-2.png"),
        require("@/assets/images/image-bank-3.png"),
        require("@/assets/images/image-bank-1.png"),
    ];
    const [selectedIndex, setSelectedIndex] = useState(null);


    const [dropdowns, setDropdowns] = useState({
        haventBooked: false,
        haveBooked: false
    });

    const [selectedValues, setSelectedValues] = useState({
        haventBooked: "",
        haveBooked: ""
    });

    const toggleDropdown = (key: 'haventBooked' | 'haveBooked') => {
        setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSelect = (key: 'haventBooked' | 'haveBooked', item: string) => {
        setSelectedValues(prev => ({ ...prev, [key]: item }));
        setDropdowns(prev => ({ ...prev, [key]: false }));
    };

    const isLoading = false
    const handleBusinessSubmit = () => {

    }
    return (
        <PageWrapper>
            <GlobalTopBar title='Add Banks Account' />
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1  `}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-1`} >
                        <Text style={tw`text-text14 pb-1 font-sfpro-700`}>Select Bank</Text>
                        <View style={tw`w-full`}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={tw`flex-row gap-4 `}
                            // Right to left
                            >
                                {images.map((img, index) => (
                                    <Pressable
                                        key={index}
                                        onPress={() => setSelectedIndex(index)}
                                        style={[
                                            tw`rounded-lg overflow-hidden px-4.5 my-4 py-2`,
                                            selectedIndex === index
                                                ? tw`border border-primaryColor`
                                                : tw`border border-gray/30`,
                                        ]}
                                    >
                                        <Image
                                            source={img}
                                            style={tw`w-10 h-10 rounded-lg`}
                                            resizeMode="cover"
                                        />
                                    </Pressable>
                                ))}
                            </ScrollView>
                        </View>
                        <Formik
                            initialValues={{ firstName: "", lastName: "", phone: "" }}
                            validationSchema={addEmployeeValidationSchema}
                            onSubmit={handleBusinessSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                            (
                                <View style={tw` flex-1 flex-col gap-4 justify-between`}>
                                    <View >
                                        <View>
                                            <GlobalMainInput
                                                label="Account Holder Name"
                                                value={values.firstName}
                                                onChangeText={handleChange("firstName")}
                                                onBlur={handleBlur("firstName")}
                                                error={errors.firstName}
                                                touched={touched.firstName}
                                            />

                                            <GlobalMainInput
                                                label="Account Number"
                                                value={values.lastName}
                                                onChangeText={handleChange("lastName")}
                                                onBlur={handleBlur("lastName")}
                                                error={errors.lastName}
                                                touched={touched.lastName}
                                            />

                                            <GlobalMainInput
                                                label="Banks Routng number"
                                                keyboardType="phone-pad"
                                                value={values.phone}
                                                onChangeText={handleChange("phone")}
                                                onBlur={handleBlur("phone")}
                                                error={errors.phone}
                                                touched={touched.phone}
                                            />
                                        </View>

                                        <View style={tw`relative `}>
                                            <View style={tw`flex-col gap-2.5`} >
                                                <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                                    Account Type
                                                </Text>
                                                <TouchableOpacity
                                                    style={tw`flex-row items-center justify-between px-3 py-3 rounded-xl border border-[#999a9a4d] bg-white`}
                                                    onPress={() => toggleDropdown('haveBooked')}
                                                >
                                                    <Text style={tw`text-text12 font-sfpro-400 text-gray`}>
                                                        {selectedValues.haveBooked}
                                                    </Text>
                                                    <SvgXml xml={dropdowns.haveBooked ? IconTopArroGray : IconDownArroGray} />
                                                </TouchableOpacity>
                                            </View>

                                            {dropdowns.haveBooked && (
                                                <ScrollView
                                                    style={tw`absolute mx-0.5 top-18 left-0 right-0 z-50 rounded-md bg-white shadow-lg py-2.5 pl-2.5`}
                                                >
                                                    {dataOptions.map((item, index) => (
                                                        <TouchableOpacity
                                                            key={index}
                                                            style={tw`w-full`}
                                                            onPress={() => handleSelect('haveBooked', item)}
                                                        >
                                                            <Text
                                                                style={tw`text-text12 font-sfpro-400 text-gray text-start w-full px-3 py-2 ${item === selectedValues.haveBooked ? 'bg-borderPrimary' : ''
                                                                    }`}
                                                            >
                                                                {item}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </ScrollView>
                                            )}
                                        </View>

                                    </View>
                                    <View>
                                        <MainButton
                                            title={isLoading ? "Loading..." : "Add Now"}
                                            onPress={() => handleSubmit()}  // simpler
                                            disabled={isLoading}
                                            bm={true}
                                        />
                                    </View>
                                </View>
                            )
                            }
                        </Formik>

                    </ScrollView>
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}