import AuthHeading from '@/src/components/AuthHeading'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function ResendEmail() {
    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>
                <AuthHeading icon={true} title='Confirm Your Email' subtitle='We’ve sent a confirmation link to your email address. To complete the update, please check your inbox and click the link in the email.' />
                <View style={tw` flex-col gap-7 mt-3 `}>
                    <TouchableOpacity >
                        <Text
                            style={tw`text-primaryColor text-text14 text-center font-sfpro-700 `}
                        >
                            Didn’t receive the email?
                        </Text>
                    </TouchableOpacity>
                    <MainButton title='Resend' />
                </View>
            </KeyboardAvoidingWrapper>
        </PageWrapper>

    )
}