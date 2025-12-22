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
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
    const [showModal, setShowModal] = useState(false);

    const isLoading = false
    const handleBusinessSubmit = () => {

    }



    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Create new Vehicle" />

            <KeyboardAvoidingWrapper>
                <TouchableWithoutFeedback style={tw` flex-1  `} onPress={() => setShowModal(false)}>
                    <View style={tw` flex-1  flex-col gap-5  `}>
                        <View style={tw`  flex-row   `}>
                            {carTypes.map((carType) => (
                                <TouchableOpacity
                                    key={carType.label}

                                    style={tw`${selectedType === carType.label
                                        ? `bg-primaryColor px-2  rounded-full flex-row items-center justify-center`
                                        : ` border border-gray/30 px-2 rounded-full items-center justify-center flex-row`
                                        } mr-2 py-1 px-2 `}
                                    onPress={() => setSelectedType(carType.label)}
                                    accessibilityRole="button"
                                    accessibilityLabel={`Select ${carType.label}`}
                                >
                                    {/* Conditionally render the icon */}
                                    <SvgXml xml={selectedType === carType.label ? carType.whiteIcon : carType.icon} width={14} height={14} />
                                    <Text
                                        style={tw`ml-1 text-text10 font-sfpro-400 ${selectedType === carType.label ? 'text-white' : 'text-gray'
                                            }`}
                                    >
                                        {carType.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
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

                                        </View>
                                        {/* <Animated.Button title="Change Color" onPress={changeColor} /> */}

                                        {/* color picker */}
                                        <ColorPickerComponent showModal={showModal} setShowModal={setShowModal} />


                                        <View>
                                            <MainButton
                                                title={isLoading ? "Loading..." : "Done"}
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
                </TouchableWithoutFeedback>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    );
}
