import AuthHeading from '@/src/components/AuthHeading';
import ErrorInputBox from '@/src/components/ErrorIputBox';
import FloatingInput from '@/src/components/FloatingInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { resetPasswordValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

type ForgotPasswordForm = {
    email: string;
};

export default function ForgotPassword() {
    const [isError, setIsError] = useState<string[]>([]);

    const handleForgotPass = (values: ForgotPasswordForm) => {
        // console.log('Form values:', values);
        // TODO: Call API here
        router.push({
            pathname: '/auth_alert_modal',
            params: { from: 'forgot-pass' }
        })
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 `}>
                    <AuthHeading
                        icon
                        title="Forgot Password?"
                        subtitle="Enter the email associated with your account and we’ll send you a link to reset your password."
                    />

                    <Formik<ForgotPasswordForm>
                        initialValues={{ email: '' }}
                        validationSchema={resetPasswordValidationSchema}
                        onSubmit={handleForgotPass}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                            useEffect(() => {
                                const activeErrors = Object.values(errors).filter(Boolean);
                                setIsError(activeErrors);
                            }, [errors]);

                            return (
                                <View style={tw`flex-1 flex-col justify-between bg-white`}>
                                    <View>
                                        <FloatingInput
                                            label="Email"
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            error={errors.email}
                                            touched={touched.email}
                                            keyboardType="email-address"
                                        />

                                        <ErrorInputBox error={isError || ''} />
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
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    );
}
