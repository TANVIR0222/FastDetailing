import AuthHeading from '@/src/components/AuthHeading';
import ErrorIputBox from '@/src/components/ErrorIputBox';
import FloatingInput from '@/src/components/FloatingInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { createNewPasswordValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';

interface ChangePass {
    password: string;
    password_confirmation: string;
}


export default function CreatedNewPassowrd() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);
    console.log(isError)

    const handleForgotPass = (values: ChangePass) => {
        console.log('Form values:', values);
        // TODO: Call API here
        router.push({
            pathname: '/auth_alert_modal',
            params: { from: 'change-pass' }
        })
    };



    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1`}>
                    <AuthHeading
                        icon={true}
                        title={'Sign in to your Account'}
                        subtitle='Sign in for secure access to your personalized dashboard and saved items.sd'
                    />

                    <View style={tw`flex-1 bg-white`}>
                        <Formik
                            initialValues={{ password_confirmation: "", password: "" }}
                            validationSchema={createNewPasswordValidationSchema}
                            onSubmit={handleForgotPass}
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
                                                label="Set Password"
                                                value={values.password}
                                                onChangeText={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                error={errors.password}
                                                touched={touched.password}
                                                isPassword
                                            />
                                            <FloatingInput
                                                label="Confirm Password"
                                                value={values.password_confirmation}
                                                onChangeText={handleChange("password_confirmation")}
                                                onBlur={handleBlur("password_confirmation")}
                                                error={errors.password_confirmation}
                                                touched={touched.password_confirmation}
                                                isPassword
                                            />
                                            <ErrorIputBox error={isError || ''} />

                                        </View>
                                        <View>
                                            <MainButton
                                                title="Reset Password"
                                                onPress={() => handleSubmit()}

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
    );
}