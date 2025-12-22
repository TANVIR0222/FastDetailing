import { Stack } from 'expo-router'
import React from 'react'

export default function AddServiesLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="[services_id]" />
            {/* <Stack.Screen
                name="add_services_modal"
                options={{
                    presentation: 'transparentModal',
                    headerShown: false,
                    animation: 'slide_from_bottom'
                }}
            /> */}
        </Stack>
    )
}