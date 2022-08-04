import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Home } from './src/screens/Home';




export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}