import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {IconButton} from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {getTime} from 'date-fns';
import * as action from '../store/Actions';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PersonalDetails() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.personalData);

  const saveData = () => {
    const item = {
      id: getTime(new Date()),
      name,
      email,
      address,
      phone,
    };
    dispatch(action.savePersonalData(item));
    setModalVisible(!modalVisible);
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
  };

  const renderData = () => {
    return (
      <Pressable
        style={styles.expDataViewText}
        key={personalData.id}
        onLongPress={() => dispatch(action.deleteExpData(personalData.id))}>
        <Text
          style={{
            marginLeft: 20,
            opacity: 1,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 23,
          }}>
          {personalData.name}
        </Text>

        <Text style={styles.text}>Designation: {personalData.email}</Text>

        <Text style={styles.text}>{personalData.phone} Years</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../assets/images/quads.png')}
        style={styles.image}>
        <View
          style={{
            flex: 1,
          }}>
          {renderData()}

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <IconButton
                  icon={'close'}
                  size={34}
                  color={'#00A4CCFF'}
                  style={{
                    position: 'absolute',
                    left: responsiveHeight(30),
                    top: -10,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <TextInput
                  placeholder="Enter Name"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setName(text)}
                  value={name}
                />
                <TextInput
                  placeholder="Enter Email"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
                <TextInput
                  placeholder="Enter Address"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setAddress(text)}
                  value={address}
                />
                <TextInput
                  placeholder="Enter Phone"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setPhone(text)}
                  value={phone}
                />

                <TouchableHighlight
                  style={styles.openButton}
                  onPress={() => {
                    saveData();
                  }}>
                  <Text style={styles.textStyle}>Save Data</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <IconButton
            icon={'plus'}
            size={38}
            color={'white'}
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  expDataViewText: {
    padding: 10,
    margin: 20,
    backgroundColor: '#5c2a9d',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5.84,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  button: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    backgroundColor: '#5c2a9d',
    position: 'absolute',
    bottom: 0,
    right: responsiveWidth(2),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#5c2a9d',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.44,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    height: responsiveHeight(5),
    borderRadius: 30,
    width: responsiveWidth(60),
    opacity: 1,
    marginVertical: 10,
    textAlign: 'center',
    backgroundColor: '#b51d4c',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.4,
    elevation: 5,
  },
});
