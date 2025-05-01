import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, LogBox } from 'react-native';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { OneSignal } from 'react-native-onesignal';
import Constants from 'expo-constants';

import store from './src/store';
import NativeStacks from './src/utilities/NativeStacks';
import { navigationRef } from './src/utilities/RootNavigation';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);
export default function App() {
  useEffect(() => {
    // Initialize OneSignal
    // OneSignal.initialize('c52d03c8-4958-4726-b95a-e00bc1aef8a5');
    OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <AlertNotificationRoot>
          <NavigationContainer ref={navigationRef}>
            <NativeStacks />
          </NavigationContainer>
        </AlertNotificationRoot>
      </Provider>
    </GestureHandlerRootView>
  );
}
