import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import { Carousel } from 'react-native-snap-carousel';

export default class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

        <View style={styles.container}>
        <Image
          style={{width: 50, height: 50}} 
          source={require('../assets/logo block.png')}/>  
        <Text style={styles.text}>Hello, Ben</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 42,
  },
});


