import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../lib/tailwind';

interface ErrorInputBoxProps {
    error?: string[]; // Optional
    forgatePass?: boolean; // Optional
}

const ErrorInputBox: React.FC<ErrorInputBoxProps> = ({ error, forgatePass }) => {
    const hasErrors = Array.isArray(error) && error.length > 0;

    return (
        <View>
            {forgatePass && (
                <TouchableOpacity onPress={() => router.push('/auth/forgot-passowrd')} style={tw`items-end`}>
                    <Text style={tw`text-primaryColor text-text14 font-sfpro-700`}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            )}

            {hasErrors && (
                <View style={tw`border border-border p-4 rounded-xl bg-primaryBg items-center mt-10`}>
                    {error!.map((err, index) => (
                        <Text key={index} style={tw`text-[#E71F2F] text-sm`}>
                            {err}
                        </Text>
                    ))}
                </View>
            )}
        </View>
    );
};

export default ErrorInputBox;

