import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/styles/themes';
import { SignIn } from './src/screens/SignIn';

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';

export default function App() {

  const [ fontsLoaded ] = useFonts({ 
    Roboto_400Regular,
    Roboto_700Bold
  });
  return (
    <NativeBaseProvider theme={THEME}>
      { fontsLoaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>
  );
}
