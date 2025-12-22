import { router, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import PageWrapper from '../components/PageWrapper';
import tw from '../lib/tailwind';

SplashScreen.preventAutoHideAsync();

export default function MainScreen() {
	useEffect(() => {
		try {
			// Small delay for smooth transition
			setTimeout(() => {
				SplashScreen.hideAsync();

				router?.replace('/splash-screen');
			}, 800);
		} catch (e) {
			console.warn('Font loading failed:', e);
			SplashScreen.hideAsync();
		}
	}, []);
	return (
		<PageWrapper>
			<View style={tw`flex-1 justify-center items-center`}>
				<Image
					source={require('@/assets/images/Group 1707478494.png')}
					style={tw`w-48 h-48 rounded-2xl`}
					resizeMode="contain"
				/>


				<View style={tw`flex-col gap-2.5`}>
					<Text
						style={tw`text-authMainheading font-sfpro-700 text-primaryColor text-center `}
					>
						Welcome to Fast Detailing
					</Text>
					<Text style={tw`text-text12  font-sfpro-400 text-gray text-center `}>
						Your all-in-one car detailing app for booking, managing services,
						and keeping your vehicle looking its best.
					</Text>
				</View>


				<View style={tw`absolute bottom-20`}>
					<ActivityIndicator size="large" color="#0087FF" />
				</View>
			</View>
		</PageWrapper>
	);
}
