import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import { StyleSheet, Text, View, Image, ImageBackground, TextInput, Button, Pressable } from 'react-native';
import * as Font from 'expo-font';

let num = 0

const bgimage='https://w0.peakpx.com/wallpaper/723/48/HD-wallpaper-aesthetic-black-cute-lembut-panda-pink-white.jpg'
const bgimage2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74F5HTKMVGVSwgdODqhHTmDZ8U5Ae1ZMrNw&usqp=CAU"

let customFonts = {
  'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
};


export default class App extends React.Component {

  state = {
    num: 0,
    fontsLoaded: false,
  }
async _loadFontsAsync() {
  await Font.loadAsync(customFonts);
  this.setState({fontsLoaded: true});
}
componentDidMount() {
  this._loadFontsAsync();
}

  increase = ()=> {
    this.setState({
      num: this.state.num + 1,
    })
  }
    render() {
      
      if (!this.state.fontsLoaded) {
         return <AppLoading />;
      }
     return( <ImageBackground source={{uri: bgimage,}} style={styles.image}>
        <View style={styles.image}>

          <View style={styles.topbox}>
            <Text style={styles.logintext}>LOGIN</Text>
          </View>  
          <View style={styles.loginbox}>
            <Text  style={styles.loginboxtext}>USERNAME:</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="default"
            />
            <Text style={styles.loginboxtext}>PASSWORD:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
              keyboardType="default"
            />
            <Text style={[styles.loginboxtext, {textAlign: 'center'}]}>{this.state.num}</Text>
          <Button
            title='+'
            onPress = {this.increase}
            style={[{width: '10%', borderRadius: 100}]}
            />
          </View>
        </View>
      </ImageBackground>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  loginbox: {
    // flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '80%',
    height: '35%',
    opacity: 1,
    backgroundColor: '#FF97D9',
    borderRadius: 30
  },
  loginboxtext: {
    fontFamily: "Oswald-Regular",
    fontSize: 20,
    color: "white",
    marginLeft: 10,
  },
  topbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '5%',
    backgroundColor: '#68c9f2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    
  },
  logintext: {
    fontFamily: "Oswald-Regular",
    fontSize: 20,
    color: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
