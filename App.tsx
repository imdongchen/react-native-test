import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello World!</Box>
    </NativeBaseProvider>
  );
}

