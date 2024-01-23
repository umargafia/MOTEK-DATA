import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import WebView from 'react-native-webview';

import Urls from '../constant/Urls';
import useDetectInternet from '../constant/detectInternet';
import { useNavigation } from '@react-navigation/native';
import Loader from '../components/global/Loader';

export const NewHome = () => {
  useDetectInternet();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigation();

  const handleWebViewLoadStart = () => {
    setLoading(true);
  };

  const handleWebViewLoadEnd = () => {
    setLoading(false);
  };

  const handleWebViewError = (syntheticEvent) => {
    navigate.replace('errorPage');
  };

  return (
    <>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {isLoading && <Loader />}
        <WebView
          source={{ uri: 'https://motekdata.com/mobile/login/' }}
          onLoadStart={handleWebViewLoadStart}
          onLoadEnd={handleWebViewLoadEnd}
          style={isLoading && styles.webview}
          onError={handleWebViewError}
          onHttpError={handleWebViewError}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  webview: {
    display: 'none',
  },
});
