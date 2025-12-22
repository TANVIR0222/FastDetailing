import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="cancel-subscription" />
            <Stack.Screen name="change-payment-method" />
            <Stack.Screen name="change-subscription" />
            <Stack.Screen name="account-update-info" />
            <Stack.Screen
                name="change_billing_frequency"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="cancel_subscription_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
        </Stack>
    )
}