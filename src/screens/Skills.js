import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  memo,
  useCallback,
} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import {set} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {randomColorPallete} from '../utilities';
import * as action from '../store/Actions';
import {getTime} from 'date-fns';
import {SafeAreaView} from 'react-native-safe-area-context';

const RenderData = memo(({data, onLongPress}) => {
  return data.map((i) => {
    return (
      <Pressable
        key={i.id}
        style={[
          styles.expDataViewText,
          {backgroundColor: randomColorPallete()},
        ]}
        onLongPress={() => onLongPress(i)}>
        <Text
          style={{
            opacity: 1,
            paddingHorizontal: 10,
            fontWeight: 'bold',
            color: 'white',
            fontSize: 23,
          }}>
          {i.skill}
        </Text>
      </Pressable>
    );
  });
});

export default function Skills() {
  const [modalVisible, setModalVisible] = useState(false);
  const [skill, setSkill] = useState('');
  const dispatch = useDispatch();
  const skillData = useSelector((state) => state.skillData);

  const saveData = () => {
    const item = {
      id: getTime(new Date()),
      skill: skill,
    };
    dispatch(action.saveSkillData(item));
  };

  const onLongPress = useCallback(
    (i) => {
      dispatch(action.deletSkillData(i.id));
    },
    [dispatch],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/pencil5.png')}
        imageStyle={{opacity: 0.9}}
        style={styles.image}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <RenderData data={skillData} onLongPress={onLongPress} />
          <View style={styles.centeredView}>
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
                    size={30}
                    color={'#00A4CCFF'}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: responsiveHeight(-1),
                    }}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                  <TextInput
                    placeholder="Enter Skill"
                    placeholderTextColor="white"
                    style={styles.input}
                    onChangeText={(text) => setSkill(text)}
                    value={skill}
                  />
                  <TouchableHighlight
                    style={styles.addBtn}
                    onPress={() => {
                      saveData();
                      setSkill('');
                    }}>
                    <Text style={styles.textStyle}>Add</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
          </View>
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
  expDataViewText: {
    padding: 10,
    margin: 20,
    height: 45,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5.84,
    elevation: 5,
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

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  addBtn: {
    paddingHorizontal: 10,
    width: responsiveWidth(20),
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#00A4CCFF',
    borderRadius: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#00A4CCFF',
    position: 'absolute',
    borderRadius: 30,
    bottom: 0,
    right: responsiveWidth(2),
  },
});
