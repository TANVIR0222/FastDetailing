import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { bothPlatform } from '@/src/utils/utils';
import { router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function RoleScreen() {


    const handleRole = async (role: string): Promise<void> => {
        // set user role
        const userRole = role === 'Employee' ? '1' : '2'
        // set local storage 
        // storage.set('role', userRole)
        // navigate
        router.push(role === 'Employee' ? '/employee-auth' : '/auth')

        // console.log(role);

    }

    return (
        <PageWrapper>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-1 `} >
                <View style={tw` flex-1 flex-col  gap-12    `}>
                    <View style={tw`  flex-col  items-center  `}>
                        <Image
                            source={require('@/assets/images/Group 1707478494.png')}
                            style={tw`w-48 h-28 rounded-2xl`}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('@/assets/images/Group 1707478495.png')}
                            style={tw` w-full ${bothPlatform === 'ios' ? 'h-90' : 'h-96'} rounded-2xl`}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={tw` flex-1 flex-col  gap-5   `}>
                        <View style={tw`flex-col gap-2.5`} >
                            <Text style={tw`text-authMainheading font-sfpro-700 text-primaryColor text-center `} >Welcome to Fast Detailing</Text>
                            <Text style={tw`text-text12  font-sfpro-400 text-gray text-center `} >Your all-in-one car detailing app for booking, managing services, and keeping your vehicle looking its best.</Text>
                        </View>

                        <View style={tw` flex-1 flex-col gap-5  items-end justify-end bottom-3 `}>
                            {/* Buttons */}
                            <TouchableOpacity onPress={() => handleRole('Business-Owner')} style={tw`bg-primaryColor w-full p-4 rounded-xl `}>
                                <Text style={tw`text-textWhite text-text14 text-center font-sfpro-700`}>
                                    Business Owner
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleRole('Employee')} style={tw`border border-primaryColor w-full p-4 rounded-xl`}>
                                <Text style={tw`text-primaryColor text-text14 text-center font-sfpro-700`}>
                                    Employee
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </PageWrapper>
    )
}