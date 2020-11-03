import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Button, IconButton} from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CreateScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../assets/images/ttr.png')}
        style={styles.image}>
        <View style={styles.heading}>
          <Text style={{fontSize: 37, color: 'white', padding: 10}}>
            Choose an option
          </Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.icons}>
            <IconButton
              icon="account"
              color={'white'}
              size={40}
              onPress={() => navigation.navigate('PersonalDetails')}
            />
          </View>
          <View style={styles.icons}>
            <IconButton
              icon="book"
              color={'white'}
              size={40}
              onPress={() => navigation.navigate('Education')}
            />
          </View>
        </View>
        <View style={styles.iconView}>
          <View style={styles.icons}>
            <IconButton
              icon="account-tie"
              color={'white'}
              size={40}
              onPress={() => navigation.navigate('Experience')}
            />
          </View>
          <View style={styles.icons}>
            <IconButton
              icon="shield-star"
              color={'white'}
              size={40}
              onPress={() => navigation.navigate('Skills')}
            />
          </View>
          <View style={styles.icons}>
            <IconButton
              icon="arrow"
              color={'white'}
              size={40}
              onPress={() => navigation.navigate('Template')}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#5c2a9d',
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  btn: {
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    borderRadius: 20,
    width: responsiveWidth(80),
    height: responsiveHeight(5),
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  iconView: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    marginTop: 40,
    backgroundColor: '#5c2a9d',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
