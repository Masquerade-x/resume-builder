import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useSelector, useDispatch} from 'react-redux';

export default function Template() {
  const personalData = useSelector((state) => state.personalData);
  const educationData = useSelector((state) => state.eduData);
  const experienceData = useSelector((state) => state.expData);
  const skillData = useSelector((state) => state.skillData);

  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 30,
        }}>
        <View>
          <View>
            <Text style={{fontSize: 25}}>Rachit Sharma</Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: responsiveWidth(20),
              height: 3,
              marginTop: 8,
            }}
          />
          <View style={{marginTop: 8, marginBottom: 14}}>
            <Text style={{fontSize: 24, color: '#3fa9f6'}}>
              Software Engineeer
            </Text>
          </View>
          <View
            style={{
              marginTop: 8,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
            Personal Profile
          </Text>
        </View>
        <View style={{marginTop: 10, marginBottom: 20}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            This is the worlds best app.
          </Text>
        </View>
        <View>
          <View>
            <Text style={{fontWeight: 'bold', color: 'green', fontSize: 20}}>
              Work BAckground
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: responsiveWidth(10),
              height: 2,
              marginTop: 8,
            }}
          />
          <View
            style={{
              width: responsiveWidth(40),
              marginTop: 10,
              marginBottom: 20,
            }}>
            {experienceData.map((i) => {
              return (
                <View style={{paddingVertical: 10}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {i.companyName}
                  </Text>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {i.Exp}
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            <Text style={{fontWeight: 'bold', color: 'green', fontSize: 20}}>
              Education BAckground
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: responsiveWidth(10),
              height: 2,
              marginTop: 8,
            }}
          />
        </View>
        <View>
          {educationData.map((i) => {
            return (
              <View
                style={{
                  paddingVertical: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {i.study}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {i.place}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  {i.year}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <View>
          <Image
            source={require('../assets/images/pencil3.png')}
            style={styles.img}
          />
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <View>
            <Text style={{fontSize: 20, color: '#3fa9f6'}}>Skills</Text>
          </View>
          <View style={{marginVertical: 10}}>
            {skillData.map((i) => {
              return (
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    marginVertical: 5,
                  }}>
                  {i.skill}
                </Text>
              );
            })}
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: responsiveWidth(30),
              height: 2,
              marginVertical: 20,
            }}
          />
          <View>
            <Text style={{fontSize: 20, color: '#3fa9f6'}}>HIghlights</Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: responsiveWidth(10),
              height: 2,
              marginVertical: 20,
            }}
          />
        </View>
      </View>
      <View style={styles.contact}>
        <View style={{padding: 5}}>
          <Text style={{fontSize: 20, color: '#3fa9f6'}}>Contact Details</Text>
        </View>
        <View style={{padding: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 12}}>{personalData.email}</Text>
            <Text style={{fontSize: 12}}>{personalData.address}</Text>
            <Text style={{fontSize: 12}}>{personalData.phone}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
  },
  contact: {
    position: 'absolute',
    bottom: responsiveHeight(10),
    backgroundColor: 'white',
    width: responsiveWidth(80),
    left: 40,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#3fa9f6',
    padding: 10,
  },
});
