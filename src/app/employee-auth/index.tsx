import AuthHeading from '@/src/components/AuthHeading';
import ErrorIputBox from '@/src/components/ErrorIputBox';
import FloatingInput from '@/src/components/FloatingInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { employeeLoginValidationsSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';


export default function EmployeeLogin() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);

    const handleLogin = async (values: any) => {
        router.push('/employee-auth/employee-varification')
    }


    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 `}>
                    <AuthHeading
                        icon={true}
                        title={'Sign in to your Account'}
                        subtitle='Enter the phone number registered by your manager'
                    />

                    <View style={tw`flex-1 bg-white `}>
                        <Formik
                            initialValues={{ phone_number: "" }}
                            validationSchema={employeeLoginValidationsSchema}
                            onSubmit={handleLogin}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                                React.useEffect(() => {
                                    const activeErrors = Object.values(errors).filter(Boolean);
                                    setIsError(activeErrors);
                                }, [errors]);

                                return (
                                    <View style={tw`flex-1 flex-col justify-between`}>
                                        <View>
                                            <FloatingInput
                                                label="Phone Number"
                                                value={values.phone_number}
                                                onChangeText={handleChange("phone_number")}
                                                onBlur={handleBlur("phone_number")}
                                                error={errors.phone_number}
                                                touched={touched.phone_number}
                                                keyboardType="number-pad"
                                            />

                                            <ErrorIputBox forgatePass={false} error={isError || ''} />

                                        </View>
                                        <View>
                                            <MainButton
                                                title={isLoading ? "Loading..." : "Login"}
                                                onPress={() => handleSubmit()}
                                                disabled={isLoading}
                                            />
                                        </View>
                                    </View>
                                );
                            }}
                        </Formik>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}