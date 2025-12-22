import { Stack } from 'expo-router'
import React from 'react'

export default function SelectCusatomerLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="create-marketing-flow" />
            <Stack.Screen name="sms-blast" />
            <Stack.Screen name="qr-code" />
            <Stack.Screen name="marketing-flows" />
            <Stack.Screen name="sms-campaigns" />
            <Stack.Screen name="choose-template" />
            <Stack.Screen name="choose-audience" />
            <Stack.Screen name="review-and-payment" />
            <Stack.Screen
                name="landing_page_qr_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="generate_qr_code_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="payment_and_teplate_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="add_services_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />

        </Stack>
    )
}