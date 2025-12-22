import { Stack } from 'expo-router'
import React from 'react'

export default function _layout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="configure-services" />
            <Stack.Screen name="user-add-bank-account" />
            <Stack.Screen name="select-plan" />
            <Stack.Screen name="enter-your-card" />
            <Stack.Screen name="bunsiness-houre" />
            <Stack.Screen name="business-website-url" />
            <Stack.Screen name="invite-employee" />
            <Stack.Screen name="choose-service" />
        </Stack>
    )
}