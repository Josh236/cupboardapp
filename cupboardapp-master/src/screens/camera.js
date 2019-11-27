import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native';
import firebase from '../firebase/config';
//const firebase = require("firebase");
require("firebase/firestore");

var db = firebase.firestore();

db.collection("items").doc("shoppinglist").set({
  name: radish,
  quantity: 1
});

var userId = firebase.auth().currentUser.uid;

let addItem = item => {
  firebase.database().ref('/users' + userId + '/items').push({
    name: item
  });
  console.log(item)

};

export default class camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''

    };

  }
  handleChange = e => {
    this.setState({
        name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert('Item saved successfully');
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 0 }}>
          <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} placeholder="Add Item" />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
      <Text style={styles.title}>Add Item</Text>
          <TextInput style={styles.itemInput} onChange={this.handleChange} placeholder="Add Second Item" />
          <TouchableHighlight
            style={styles.button}
            underlayColor="white"
            onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#131420',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
});
