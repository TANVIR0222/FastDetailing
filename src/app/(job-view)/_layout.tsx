import { Stack } from 'expo-router'
import React from 'react'

export default function JobViewLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="new-job" />
      <Stack.Screen name="add-vehicle-new-job" />
      <Stack.Screen name="select-vehicle" />
      <Stack.Screen name="job-view-select-service" />
      <Stack.Screen name="execution-upcoming" />
      <Stack.Screen name="invoice" />
      <Stack.Screen name="charge-customer" />
      <Stack.Screen
        name="payment_request_modal"
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'slide_from_bottom'
        }}
      />
      <Stack.Screen
        name="confirm_refund_modal"
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'slide_from_bottom'
        }}
      />
    </Stack>
  )
}