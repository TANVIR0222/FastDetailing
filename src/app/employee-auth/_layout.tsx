import { Stack } from 'expo-router'
import React from 'react'

export default function EmployeeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="employee-varification" />
      <Stack.Screen name="employe-welcome" />

    </Stack>
  )
}