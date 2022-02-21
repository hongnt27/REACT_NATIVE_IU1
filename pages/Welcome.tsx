// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
const Welcome = ({ route, navigation }:{route: any, navigation: any}) => {
  return (
    <SafeAreaView  style={styles.container}>
      <View>
        <Image style = {styles.img}
               // source={require('@expo/snack-static/react-native-logo.png')}/>
               source={{uri:'https://pngset.com/images/react-native-events-groups-conferences-talks-speakers-eventil-logo-symbol-trademark-text-transparent-png-2201294.png'}}/>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                            style={styles.btn}>
            <Text style={{textAlign:"center"}}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                            style={styles.btn}>
            <Text style={{textAlign:"center"}}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#52b97c',
      height: '100%',

    },
    img: {
      marginTop: 70,
      height: 150,
      width: 150,
      borderRadius:10,
      marginBottom: 20,
      alignSelf: "center"
    },
    btn: {
      marginTop: 30,
      borderStyle:'solid', borderColor: 'while', borderWidth: 1, width: '60%', height: 40, alignItems: 'center', borderRadius: 10,
      alignSelf:"center",justifyContent:"center",
      backgroundColor: '#5ec07c'
    },
})

export default Welcome;
