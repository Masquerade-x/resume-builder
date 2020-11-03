import React, {useEffect} from 'react';
import {
  Text,
  ImageBackground,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button} from 'react-native-paper';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        style={styles.img}
        source={require('../assets/images/circle.png')}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: responsiveHeight(11),
          }}>
          <LottieView
            style={{
              height: responsiveHeight(30),
              width: responsiveWidth(30),
            }}
            source={require('../assets/lottieFiles/welcome.json')}
            autoPlay
            loop
            onPress={() => navigation.navigate('Create')}
          />
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Create')}>
        <Image
          source={require('../assets/images/purpleStart.png')}
          style={styles.iconImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
    alignSelf: 'center',
  },
  iconImage: {
    height: responsiveHeight(18),
    width: responsiveWidth(35),
  },
  btn: {
    position: 'absolute',
    bottom: responsiveHeight(5),
    left: responsiveWidth(32),
  },
});
