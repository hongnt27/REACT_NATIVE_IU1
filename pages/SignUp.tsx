// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet,TextInput, ImageBackground, Alert, TouchableOpacity } from 'react-native';
const image = { uri: "https://dbk.vn/uploads/ckfinder/images/tranh-anh/hinh-nen-cute-1.jpg" };
const SignUp = ({navigation}:{navigation: any}) => {
  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <View style={{ flex: 1 , padding: 16}}>
  //       <View
  //         style={{
  //           flex: 1,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}>
  //         <Text
  //           style={{
  //             fontSize: 25,
  //             textAlign: 'center',
  //             marginBottom: 16
  //           }}>
  //           This is the First Page of the app
  //         </Text>
  //         <Button
  //           onPress={() => navigation.navigate('SignIn')}
  //           title="Go to Second Page"
  //         />
  //       </View>
  //       <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
  //         Navigate Between Screens using{'\n'}React Navigation
  //       </Text>
  //       <Text
  //         style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
  //         www.aboutreact.com
  //       </Text>
  //     </View>
  //   </SafeAreaView>
  // );
  // const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  //
  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //     setKeyboardStatus("Keyboard Shown");
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardStatus("Keyboard");
  //   });
  //
  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);
  return (
    <SafeAreaView style={styles.form}>
      {/*<View style={styles.container}>*/}
      {/*  <TextInput*/}
      {/*    style={styles.input}*/}
      {/*    placeholder='Click here…'*/}
      {/*    onSubmitEditing={Keyboard.dismiss}*/}
      {/*  />*/}
      {/*  <Text style={styles.status}>{keyboardStatus}</Text>*/}
      {/*</View>*/}

      {/*<Text style={styles.text}>{'App'}</Text>*/}
      <ImageBackground source={image} resizeMode={"cover"} style={styles.img}>
        <View >

          <View style={styles.row0}>
            <Text style={styles.label}>Họ tên</Text>
            <TextInput style={styles.ip} placeholder={" "}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput style={styles.ip}/>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Tên đăng nhập</Text>
            <TextInput style={styles.ip}/>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput style={styles.ip}/>
          </View>
          <View style={{borderStyle:'solid', borderBottomColor: 'red'}}>
            <TouchableOpacity onPress={() => Alert.alert('Đăng ký thành công')}
                              style={styles.btn}
            >
              <Text style={{textAlign:"center"}}>Đăng ký ngay</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}
                              style={styles.btn}
            >
              <Text style={{textAlign:"center"}}>Quay lại</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {

    alignContent:"center",
  },
  form: {
    borderBottomColor: 'black',
    flex:1,
  },
  img: {
    flex: 1,
    // justifyContent: "center",
  },
  title: {
    backgroundColor: '#31788a',
    marginVertical: 8,
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    color: '#09424f'
  },
  row0: {
    paddingTop: 20,
    marginVertical: 10,
    margin: 40,
  },
  row:{
    marginVertical: 10,
    margin: 40,
  },
  ip:{
    fontSize:20,
    borderWidth: 1,
    height: 35 ,
    borderRadius: 10,
    borderColor: '#574d4d',

  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'rgba(86,22,22,0.49)',
  },
  btn: {
    marginTop: 30,
    borderStyle:'solid',
    borderColor: 'black',
    borderWidth: 1,
    width: '40%',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor: '#5ec07c'
  },
  container: {
    flex: 1,
    height:10,
  },
  status: {
    padding: 10,
    textAlign: "center"
  }
})

export default SignUp;
