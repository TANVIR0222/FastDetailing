import { IconsChat, IconsChatActive, IconsHome, IconsHomeActive, IconsMarketing, IconsMarketingActive, IconsSetingActive, IconsSetting, IconsStatus, IconsStatusActive } from '@/assets/Icons';
import { Tabs } from 'expo-router';
import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

/**
 * Tab navigation layout for the app
 */
export default function TabLayout() {

  const { bottom } = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>
      {/* --------------- heading top ---------------- */}

      {/* ----------- status bar ------------------ */}
      <StatusBar
        translucent={false}
        backgroundColor={'#000'}
        barStyle={'dark-content'}
      />

      {/* ----------------------- main ------------------ */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#0087FF",
          tabBarInactiveTintColor: "#999A9A",
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "600",
            // marginBottom: Platform.OS === "ios" ? 10 : 0
          },
          tabBarStyle: {
            height: 60,
            paddingBottom: Platform.OS === "ios" ? 25 : 10,
            paddingTop: 5,
            borderTopWidth: 0,
            alignItems: "center",
            justifyContent: "center",

          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',

            tabBarIcon: ({ focused }) => (
              <SvgXml xml={focused ? IconsHomeActive : IconsHome} />
            ),
            animation: 'none'

          }}
        />
        <Tabs.Screen
          name="status"
          options={{
            title: 'Status',
            tabBarIcon: ({ focused }) => (
              <SvgXml xml={focused ? IconsStatusActive : IconsStatus} />
            ),
            animation: 'none'
          }}
        />
        <Tabs.Screen
          name="marketing"
          options={{
            title: 'Marketing',
            tabBarIcon: ({ focused }) => (
              <SvgXml xml={focused ? IconsMarketingActive : IconsMarketing} />
            ),
            animation: 'none'

          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: 'Chat',
            tabBarIcon: ({ focused }) => (
              <SvgXml xml={focused ? IconsChatActive : IconsChat} />
            ),
            animation: 'none'
          }}
        />
        <Tabs.Screen
          name="setting"
          options={{
            title: 'Setting',
            tabBarIcon: ({ focused }) => (
              <SvgXml xml={focused ? IconsSetingActive : IconsSetting} />
            ),
            animation: 'none'
          }}
        />

      </Tabs>
    </View>
  );
}