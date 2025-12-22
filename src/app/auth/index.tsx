import AuthHeading from '@/src/components/AuthHeading';
import ErrorIputBox from '@/src/components/ErrorIputBox';
import FloatingInput from '@/src/components/FloatingInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { loginValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<string[]>([]);

	const handleRegister = () => {
		router.push('/(tabs)');
	};

	return (
		<PageWrapper>
			<KeyboardAvoidingWrapper>
				<View style={tw`flex-1`}>
					<AuthHeading
						icon={true}
						title={'Sign in to your Account'}
						subtitle="Sign in for secure access to your personalized dashboard and saved items.sd"
					/>

					<View style={tw`flex-1 bg-white`}>
						<Formik
							initialValues={{ email: '', password: '' }}
							validationSchema={loginValidationSchema}
							onSubmit={handleRegister}
						>
							{({
								handleChange,
								handleBlur,
								handleSubmit,
								values,
								errors,
								touched,
							}) => {
								React.useEffect(() => {
									const activeErrors = Object.values(errors).filter(Boolean);
									setIsError(activeErrors);
								}, [errors]);

								return (
									<View style={tw`flex-1 flex-col justify-between`}>
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
											<FloatingInput
												label="Password"
												value={values.password}
												onChangeText={handleChange('password')}
												onBlur={handleBlur('password')}
												error={errors.password}
												touched={touched.password}
												isPassword
											/>
											<ErrorIputBox forgatePass={true} error={isError || ''} />
										</View>
										<View>
											<MainButton
												title={isLoading ? 'Loading...' : 'Login'}
												onPress={() => handleSubmit()}
												disabled={isLoading}
												onSignUpPress={() => router.push('/auth/user-register')} // your signup route
												showSignUpLink={true}
												signUpPrompt="Don’t have an account? "
												signUpText="Sign Up"
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
