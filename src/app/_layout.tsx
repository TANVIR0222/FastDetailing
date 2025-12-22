import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';
import tw from '../lib/tailwind';


export default function RootLayout() {
  useDeviceContext(tw)

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      // handle orientation or screen size change
    });

    return () => {
      // unsubscribe properly
      subscription.remove();
    };
  }, []);

  const [loaded] = useFonts({
    SFProBold: require('@/assets/fonts/SF-Pro-Text-Bold.otf'),
    SFProLight: require('@/assets/fonts/SF-Pro-Text-Light.otf'),
    SFProMedium: require('@/assets/fonts/SF-Pro-Text-Medium.otf'),
    SFProRegular: require('@/assets/fonts/SF-Pro-Text-Regular.otf'),
    SFProSemibold: require('@/assets/fonts/SF-Pro-Text-Semibold.otf'),
    SFProBlack: require('@/assets/fonts/SF-Pro-Display-Black.otf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
        <Stack screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="common" />
          <Stack.Screen name="account-info" />
          <Stack.Screen name="splash-screen/index" />
          <Stack.Screen name="employee-auth" />
          <Stack.Screen name="(select-plan)" />
          <Stack.Screen name="(create-services)" />
          <Stack.Screen name="(select-customer)" />
          <Stack.Screen name="(job-view)" />
          <Stack.Screen name="(status)" />
          <Stack.Screen name="(marketing)" />
          <Stack.Screen name="(setting)" />
          <Stack.Screen
            name="auth_alert_modal"
            options={{
              presentation: 'transparentModal',
              headerShown: false,
              animation: 'slide_from_bottom'
            }}
          />
        </Stack>
        <StatusBar style="dark" animated={true} translucent={true} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
