import { IconsCoupe, IconsOther, IconsSedan, IconsSUV, IconsTrack, IconsWhiteCoupe, IconsWhiteOther, IconsWhiteSedan, IconsWhiteSUV, IconsWhiteTrack } from '@/assets/Icons';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ColorPickerComponent from '@/src/components/ui/Home/ColorPicker';
import tw from '@/src/lib/tailwind';
import { CreateNewVehicleValidationSchema } from '@/src/utils/from-validations';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
const carTypes = [
    { label: 'Truck', icon: IconsTrack, whiteIcon: IconsWhiteTrack },
    { label: 'SUV', icon: IconsSUV, whiteIcon: IconsWhiteSUV },
    { label: 'Sedan', icon: IconsSedan, whiteIcon: IconsWhiteSedan },
    { label: 'Coupe', icon: IconsCoupe, whiteIcon: IconsWhiteCoupe },
    { label: 'Other', icon: IconsOther, whiteIcon: IconsWhiteOther },
];

export default function CreateNewVehicle() {
    const [selectedType, setSelectedType] = useState('Truck');
    const isLoading = false
    const handleBusinessSubmit = () => {

    }



    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Modify Vehicle" deleteICons={true} />

            <KeyboardAvoidingWrapper>
                <View style={tw` flex-1  `}>
                    <View style={tw` flex-1  flex-col gap-5  `}>
                        <View style={tw`  flex-row   `}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {carTypes.map((carType) => (
                                    <TouchableOpacity
                                        key={carType.label}

                                        style={tw`${selectedType === carType.label
                                            ? `bg-primaryColor px-2.5 py-1 rounded-full flex-row items-center justify-center`
                                            : `bg-gray/10 border border-gray/30 px-2.5 py-1 rounded-full items-center justify-center flex-row`
                                            } mr-2 `}
                                        onPress={() => setSelectedType(carType.label)}
                                        accessibilityRole="button"
                                        accessibilityLabel={`Select ${carType.label}`}
                                    >
                                        {/* Conditionally render the icon */}
                                        <SvgXml xml={selectedType === carType.label ? carType.whiteIcon : carType.icon} />
                                        <Text
                                            style={tw`ml-2 font-sfpro-400 ${selectedType === carType.label ? 'text-white' : 'text-gray'
                                                }`}
                                        >
                                            {carType.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={tw`  flex-1  bg-white flex-col justify-between`}>
                            <Formik
                                initialValues={{ year: "", vehicle: "", }}
                                validationSchema={CreateNewVehicleValidationSchema}
                                onSubmit={handleBusinessSubmit}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) =>

                                (
                                    <View style={tw` flex-1  flex-col  justify-between `}>
                                        <View>
                                            <GlobalMainInput
                                                label="Enter Year"
                                                value={values.year}
                                                onChangeText={handleChange("year")}
                                                onBlur={handleBlur("year")}
                                                error={errors.year}
                                                touched={touched.year}
                                            />

                                            <GlobalMainInput
                                                label="Vehicle Name"
                                                value={values.vehicle}
                                                onChangeText={handleChange("vehicle")}
                                                onBlur={handleBlur("vehicle")}
                                                error={errors.vehicle}
                                                touched={touched.vehicle}
                                            />

                                            <ColorPickerComponent />

                                            <TextInput
                                                style={tw.style(
                                                    `h-14 px-4 rounded-xl border border-gray/30 `,

                                                )}
                                                placeholder={"Rapid Blue"}
                                                placeholderTextColor="#999A9A"
                                                editable={false}



                                            />

                                        </View>
                                        {/* <Animated.Button title="Change Color" onPress={changeColor} /> */}






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
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    );
}
