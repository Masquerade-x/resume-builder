import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Modal,
  TouchableHighlight,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Button, IconButton, RadioButton} from 'react-native-paper';

import {useSelector, useDispatch} from 'react-redux';
import * as action from '../store/Actions';
import {getTime} from 'date-fns';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Experience() {
  const [modalVisible, setModalVisible] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [Exp, setExp] = useState('');
  const [JobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();
  const experienceData = useSelector((state) => state.expData);

  const renderData = () => {
    return experienceData.map((i) => {
      return (
        <Pressable
          style={styles.expDataViewText}
          key={i.id}
          onLongPress={() => dispatch(action.deleteExpData(i.id))}>
          <Text
            style={{
              marginLeft: 20,
              opacity: 1,
              fontWeight: 'bold',
              color: 'white',
              fontSize: 23,
            }}>
            {i.companyName}
          </Text>

          <Text style={styles.text}>Designation: {i.JobTitle}</Text>

          <Text style={styles.text}>{i.Exp} Years</Text>
        </Pressable>
      );
    });
  };

  const saveData = () => {
    const item = {
      id: getTime(new Date()),
      companyName,
      Exp,
      JobTitle,
    };
    dispatch(action.saveExpData(item));
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../assets/images/redTriangle.png')}
        imageStyle={{opacity: 0.9}}
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
                    bottom: responsiveHeight(30),
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                />
                <TextInput
                  placeholder="Enter Company name"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setCompanyName(text)}
                  value={companyName}
                />
                <TextInput
                  placeholder="Enter Job Title"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setExp(text)}
                  value={Exp}
                />
                <TextInput
                  placeholder="Enter Years of Exerience"
                  placeholderTextColor="white"
                  style={styles.input}
                  onChangeText={(text) => setJobTitle(text)}
                  value={JobTitle}
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
    opacity: 0.8,
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
