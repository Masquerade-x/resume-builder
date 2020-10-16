import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {createContainer} from 'unstated-next';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Form from '../components/Form';
import BottomSheet from 'reanimated-bottom-sheet';
import useStateData from '../hooks/useStateData';
import {Button, RadioButton} from 'react-native-paper';

let StateData = createContainer(useStateData);

export default function Education() {
  const [formInput, setFormInput] = useState([]);
  let [checked10, setChecked10] = useState(false);
  let [checked12, setChecked12] = useState(false);
  let [checkedGrad, setCheckedGrad] = useState(false);
  let [checkedPG, setCheckedPG] = useState(false);
  const sheetRef = useRef(null);
  let stateChecks = manageState();

  function manageState() {
    let setCheck10 = () => setChecked10(!checked10);
    let setCheck12 = () => setChecked12(!checked12);
    let setCheckGrad = () => setCheckedGrad(!checkedGrad);
    let setCheckPG = () => setCheckedPG(!checkedPG);

    return {
      checked10,
      checked12,
      checkedGrad,
      checkedPG,
      setCheck10,
      setCheck12,
      setCheckGrad,
      setCheckPG,
    };
  }

  const renderContent = () => {
    let stateData = manageState();
    return (
      <View
        style={{
          backgroundColor: 'grey',
          justifyContent: 'space-around',
          padding: 20,
          height: responsiveHeight(35),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>10th</Text>
          <RadioButton
            value="first"
            status={checked10 ? 'checked' : 'unchecked'}
            onPress={() => stateData.setCheck10(true)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>12th</Text>
          <RadioButton
            value="first"
            status={checked12 ? 'checked' : 'unchecked'}
            onPress={() => stateData.setCheck12(true)}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Graduation</Text>
          <RadioButton
            value="first"
            status={checkedGrad ? 'checked' : 'unchecked'}
            onPress={() => stateData.setCheckGrad(true)}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Post Graduation</Text>
          <RadioButton
            value="first"
            status={checkedPG ? 'checked' : 'unchecked'}
            onPress={() => stateData.setCheckPG(true)}
          />
        </View>
      </View>
    );
  };

  return (
    <StateData.Provider>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Button style={styles.button} onPress={() => console.log('running')}>
            Choose your Education
          </Button>
        </View>
        <Form StateData={stateChecks} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[300, 150, 0]}
          borderRadius={10}
          renderContent={renderContent}
        />
      </View>
    </StateData.Provider>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderRadius: 40,
  },
  button: {
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginVertical: 10,
    borderRadius: 40,
  },
  btn: {
    width: responsiveWidth(50),
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    marginLeft: 20,
  },
});
