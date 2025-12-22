import { IconsCloseModal } from '@/assets/Icons';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import MainButton from '@/src/components/MainButton';
import tw from '@/src/lib/tailwind';
import { extraServicesValidationSchema } from '@/src/utils/auth-validationSchema';
import { Formik } from 'formik';
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

type AddExtraServicesProps = {
    visible: boolean;
    onClose: () => void;
};

const AddExtraServices: React.FC<AddExtraServicesProps> = ({ visible, onClose }) => {


    const isLoading = false;

    const handleBusinessSubmit = (values: any) => {
        console.log('Submitted values:', values);
    };


    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={tw`flex-1 justify-end bg-black/50`}>
                <View style={tw`w-full rounded-t-3xl bg-bgWhite p-4`}>

                    {/* Header */}
                    <View style={tw`flex-row items-center justify-between py-3`}>
                        <Text style={tw`text-headingText text-text14 font-sfpro-700`}>
                            Recurring Jobs
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <SvgXml xml={IconsCloseModal} />
                        </TouchableOpacity>
                    </View>

                    {/* Formik Form */}
                    <Formik
                        initialValues={{ serviceName: '', price: '', duration: '' }}
                        validationSchema={extraServicesValidationSchema}
                        onSubmit={handleBusinessSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={tw`flex-col `}>

                                <GlobalMainInput
                                    label="Service Name"
                                    value={values.serviceName}
                                    onChangeText={handleChange('serviceName')}
                                    onBlur={handleBlur('serviceName')}
                                    error={errors.serviceName}
                                    touched={touched.serviceName}
                                />

                                <View style={tw`flex-row gap-4`}>
                                    <View style={tw`flex-1`}>
                                        <GlobalMainInput
                                            label="Price"
                                            value={values.price}
                                            onChangeText={handleChange('price')}
                                            onBlur={handleBlur('price')}
                                            error={errors.price}
                                            touched={touched.price}
                                            placeholder="$5.00"
                                            keyboardType="numeric"
                                        />
                                    </View>

                                    <View style={tw`flex-1`}>
                                        <GlobalMainInput
                                            label="Duration"
                                            value={values.duration}
                                            onChangeText={handleChange('duration')}
                                            onBlur={handleBlur('duration')}
                                            error={errors.duration}
                                            touched={touched.duration}
                                            placeholder="00 00"
                                            keyboardType="number-pad"
                                        />
                                    </View>
                                </View>

                                {/* Save Button */}
                                <MainButton
                                    title={isLoading ? 'Loading...' : 'Save'}
                                    onPress={() => handleSubmit()}
                                    disabled={isLoading}
                                    bm={true}
                                />

                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        </Modal>
    );
};

export default AddExtraServices;
