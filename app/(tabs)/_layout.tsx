import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from 'constants/images';
import { icons } from 'constants/icons';

const TabIcon = ({ focused, icon, title }: any) => {
  return (
    <>
      {focused && (
        <ImageBackground
          className="mt-4 flex min-h-16 w-full min-w-[112px] flex-1 flex-row items-center justify-center overflow-hidden rounded-full"
          source={images.highlight}>
          <Image source={icon} tintColor="#151312" className="size-5" />
          <Text className="ml-1 text-base font-semibold text-secondary">{title}</Text>
        </ImageBackground>
      )}
      {!focused && (
        <View className="mt-4 size-full items-center justify-center rounded-full">
          <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
      )}
    </>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.home} title="Home" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.search} title="Search" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.save} title="Saved" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon focused={focused} icon={icons.person} title="Profile" />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
