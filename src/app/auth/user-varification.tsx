import AuthHeading from '@/src/components/AuthHeading';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";

export default function Verification() {

    const [otp, setOtp] = React.useState('');
    const [count, setCount] = useState(15);
    const [isCounting, setIsCounting] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout | number;
        if (isCounting && count > 0) {
            timer = setTimeout(() => setCount(count - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [count, isCounting]);

    const handleResend = () => {
        // 
        setCount(15);
        setIsCounting(true);

        router.push('/(select-plan)')
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <AuthHeading icon={true} title='Enter Verification Code' subtitle='We sent a 6-digit code to 03369447239' />
                <View style={tw`flex-col flex-1  justify-between `} >
                    <View style={tw`flex-col items-center gap-10 `} >
                        <OtpInput
                            focusColor="#999A9A"
                            // placeholder="000000"

                            autoFocus={false}
                            numberOfDigits={6}
                            type="numeric"
                            onFilled={(text: string) => setOtp(text)}
                            textInputProps={{
                                accessibilityLabel: "One-Time Password",
                            }}
                            textProps={{
                                accessibilityRole: "text",
                                accessibilityLabel: "OTP digit",
                                allowFontScaling: false,

                            }}
                            theme={{
                                pinCodeContainerStyle: {
                                    backgroundColor: "#999A9A0D",
                                    width: 52,
                                    height: 52,
                                    borderWidth: 0,
                                }
                            }}
                        />

                        {/* <TouchableOpacity
                            disabled={isCounting}
                            onPress={() => router.push('/resend-email')}
                        >
                            <Text
                                style={tw`text-primaryColor text-text14 font-sfpro-700 ${isCounting ? 'opacity-50' : ''
                                    }`}
                            >
                                {isCounting ? `Resend Code (${count}s)` : 'Resend Code'}
                            </Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            disabled={count > 0}
                            onPress={() => router.push('/auth/resend-email')}
                        >
                            <Text
                                style={tw`text-primaryColor text-text14 font-sfpro-700 ${count > 0 ? "opacity-50" : ""
                                    }`}
                            >
                                {count > 0 ? `Resend Code (${count}s)` : "Resend Code"}
                            </Text>
                        </TouchableOpacity>


                    </View>
                    <MainButton onPress={() => handleResend()} title='Next' />
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}