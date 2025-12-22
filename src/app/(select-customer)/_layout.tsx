import { Stack } from 'expo-router'
import React from 'react'

export default function SelectCusatomerLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="create-new-customer" />
            <Stack.Screen name="create-new-vehicle" />
            <Stack.Screen name="modify-vehicle" />
            <Stack.Screen name="add-services" />
            <Stack.Screen name="select-services" />
            <Stack.Screen name="configure-service" />
            <Stack.Screen name="select-worker" />
        </Stack>
    )
}