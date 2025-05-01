import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Mybutton from '../../components/global/Mybutton';
import { Theme } from '../../constants/Theme';
import { GetData } from '../../constants/storage';
import Title from '../../components/global/Title';

const theme = Theme();
const WelcomePage = () => {
  const [LoginInfoData, setLoginInfoData] = useState({
    useBio: false,
    usePin: false,
  });

  const theme = Theme();
  const navigation = useNavigation();

  const getLoginInfo = async () => {
    const useBio = await GetData('use_biometric');
    const usePin = await GetData('use_login_pin');

    setLoginInfoData({
      useBio,
      usePin,
    });
  };

  useFocusEffect(() => {
    getLoginInfo();
  });

  const navigateToLogin = () => {
    navigation.navigate('loginPage', {
      islogin: true,
      LoginInfoData,
    });
  };

  const navigateToSignup = () => {
    navigation.navigate('loginPage', {
      islogin: false,
      LoginInfoData,
    });
  };

  const img = require('../../assets/background.jpg');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#cfd6de" barStyle="dark-content" />
      <ImageBackground source={img} style={styles.bgImage}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
        </View>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={styles.bottomContainer}
        >
          <View style={styles.innerBottomContainer}>
            <Title
              text={'Welcome ' + theme.appName}
              header
              color={theme.palette.white}
            />
            <Mybutton text="Login" onPress={navigateToLogin} />
            <Mybutton text="Register" onPress={navigateToSignup} transparent />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  innerBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  image: {
    marginTop: 7,
    width: '75%',
    height: 120,
    resizeMode: 'contain',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default WelcomePage;
