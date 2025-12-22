import { Stack } from 'expo-router'
import React from 'react'

export default function AuthRootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="resend-email" />
            <Stack.Screen name="forgot-passowrd" />
            <Stack.Screen name="created-new-pasword" />
            <Stack.Screen name="user-varification" />
        </Stack>
    )
}