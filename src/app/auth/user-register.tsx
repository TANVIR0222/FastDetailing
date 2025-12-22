import AuthHeading from '@/src/components/AuthHeading';
import ErrorInputBox from '@/src/components/ErrorIputBox';
import FloatingInput from '@/src/components/FloatingInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { registerValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function Register() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);

    const handleRegister = () => {
        router.push('/auth/user-varification')
    }

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <View style={tw`flex-1 `}>
                    <AuthHeading
                        icon={true}
                        title={'Register your Account'}
                        subtitle='Create your account to get started. Enjoy full access to features, manage your preferences, and stay connected.'
                    />

                    <View style={tw`flex-1 bg-white`}>
                        <Formik
                            initialValues={{ password_confirmation: "", password: "", full_name: "", email: "", phone_number: "" }}
                            validationSchema={registerValidationSchema}
                            onSubmit={handleRegister}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => {
                                React.useEffect(() => {
                                    const activeErrors = Object.values(errors).filter(Boolean);
                                    setIsError(activeErrors);
                                }, [errors]);

                                return (
                                    <View style={tw`flex-1 flex-col justify-between`}>
                                        <View >

                                            <FloatingInput
                                                label="Full name"
                                                value={values.full_name}
                                                onChangeText={handleChange("full_name")}
                                                onBlur={handleBlur("full_name")}
                                                error={errors.full_name}
                                                touched={touched.full_name}
                                                keyboardType="default"
                                            />
                                            <FloatingInput
                                                label="Email"
                                                value={values.email}
                                                onChangeText={handleChange("email")}
                                                onBlur={handleBlur("email")}
                                                error={errors.email}
                                                touched={touched.email}
                                                keyboardType="email-address"
                                            />
                                            <FloatingInput
                                                label="Phone Number"
                                                value={values.phone_number}
                                                onChangeText={handleChange("phone_number")}
                                                onBlur={handleBlur("phone_number")}
                                                error={errors.phone_number}
                                                touched={touched.phone_number}
                                                keyboardType="phone-pad"
                                            />

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
                                            <ErrorInputBox error={isError || ''} />

                                        </View>
                                        <View>
                                            <MainButton
                                                title="Register"
                                                // onPress={() => router.push('/auth/user-varification')}
                                                onPress={() => handleSubmit()}
                                                onSignUpPress={() => router.push('/auth')} // your signup route
                                                showSignUpLink={true}
                                                signUpPrompt="Have an account ? "
                                                signUpText="Login"
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