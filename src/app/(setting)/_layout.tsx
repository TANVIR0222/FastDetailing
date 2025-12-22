import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="services" />
            <Stack.Screen name="account" />
            <Stack.Screen name="payments" />
            <Stack.Screen name="add-new-reminder" />
            <Stack.Screen name="reminder" />
            <Stack.Screen name="tip-configuration" />
            <Stack.Screen name="availability" />
            <Stack.Screen name="new-time-off-request" />
            <Stack.Screen name="permissions" />
            <Stack.Screen name="manage-employee" />
            <Stack.Screen name="single-user-rating" />
            <Stack.Screen name="setting-invoice" />
            <Stack.Screen
                name="deleted_account_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="new_time_off_request_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="tip_configuration_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="payment_request_setting_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
            <Stack.Screen
                name="insert_placeholder_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />

        </Stack>
    )
}