import { Text, View } from 'react-native';
import { Link } from 'expo-router';

import '../../global.css';

export default function App() {
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-bold text-2xl text-accent">Hello, world!</Text>
        <Text className="text-gray-500">This is a NativeWind example.</Text>
        <Link href="/onboarding">Onboarding</Link>
        <Link href="/movie/123">Spiderman</Link>
      </View>
    </>
  );
}
