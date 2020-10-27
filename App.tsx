import { Asset } from 'expo-asset';
import { Font } from 'expo';
import React from 'react';
import { Text } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/Routes';

export default function App() {
  async function loadImagesAsync() {
    try {
      await Promise.all([
        Asset.loadAsync([
          require("./src/assets/pngs/newListIllustration.png")
        ]),
      ]);
    } catch (err) {
      return <Text>Error while loading images {err}</Text>;
    }
  }

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  loadImagesAsync();

  return <Routes />;
}