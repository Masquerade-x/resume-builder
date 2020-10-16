import React, {useState, useEffect, memo} from 'react';
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
import {Button, IconButton} from 'react-native-paper';
import {useContainer} from 'unstated-next';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Form(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const input = props.StateData;
  const [edPlace, setEdPlace] = useState('');
  const [edStandard, setEdStandard] = useState('');
  const [edYear, setEdYear] = useState('');
  const [edPerc, setEdPerc] = useState('');

  // useEffect(() => {
  //   console.log('runnings use effecr');
  //   input.checked10 || input.checked12 || input.checkedGrad || input.checkedPG

  //     : null;
  // }, [input.checked10, input.checked12, input.checkedGrad, input.checkedPG]);

  const CheckChoice = memo(() => {
    // if (input.checked10) {
    //   setModalVisible(true);
    // } else if (input.checked12) {
    //   setModalVisible(true);
    // } else if (input.checkedGrad) {
    //   setModalVisible(true);
    // } else if (input.checkedPG) {
    //   setModalVisible(true);
    // }
  });
  console.log(modalVisible);
  return (
    <ScrollView
      style={{
        marginVertical: 10,
        marginHorizontal: 30,
      }}>
      <CheckChoice />
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
              onPress={() => setModalVisible(false)}
            />
            <TextInput
              placeholder="Enter Company name"
              placeholderTextColor="white"
              style={styles.input}
              onChangeText={(text) => setEdPlace(text)}
              value={edPlace}
            />
            <TextInput
              placeholder="Enter Job Title"
              placeholderTextColor="white"
              style={styles.input}
              onChangeText={(text) => setEdStandard(text)}
              value={edStandard}
            />
            <TextInput
              placeholder="Enter Years of Exerience"
              placeholderTextColor="white"
              style={styles.input}
              onChangeText={(text) => setEdYear(text)}
              value={edYear}
            />
            <TextInput
              placeholder="Enter Years of Exerience"
              placeholderTextColor="white"
              style={styles.input}
              onChangeText={(text) => setEdPerc(text)}
              value={edPerc}
            />

            <TouchableHighlight
              style={styles.openButton}
              onPress={() => {
                // saveData();
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Save Data</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  expDataViewText: {
    padding: 10,
    margin: 20,
    backgroundColor: '#00A4CCFF',
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
    backgroundColor: '#00A4CCFF',
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
    backgroundColor: '#F95700FF',
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
    backgroundColor: '#00A4CCFF',
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
