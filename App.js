import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/es/integration/react';

import {Provider} from 'react-redux';

import {store, persistor} from './src/store/store';

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00A4CCFF',
    accent: '#F95700FF',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
