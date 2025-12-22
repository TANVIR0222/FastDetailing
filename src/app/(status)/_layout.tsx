import { Stack } from 'expo-router'
import React from 'react'

export default function AddServiesLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="recurring-jobs" />
            <Stack.Screen name="status-invoice" />
            <Stack.Screen name="all-reviews" />
            <Stack.Screen name="post-jobs" />
            <Stack.Screen
                name="scheduling_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            />
        </Stack>
    )
}