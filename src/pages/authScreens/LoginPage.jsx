import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { Theme } from '../../constants/Theme';
import Login from '../../components/auth/Login';
import { StatusBar } from 'expo-status-bar';
import LoadingPage from '../../components/loading/LoadingPage';

const theme = Theme();
const LoginPage = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const { islogin } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.bottomContainer}>
          <Login islogin={islogin} loading={loading} setLoading={setLoading} />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: theme.palette.white,
    marginTop: 30,
  },

  bottomContainer: {
    flex: 2,
    zIndex: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    transform: [
      {
        translateY: -20,
      },
    ],
  },

  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
});
