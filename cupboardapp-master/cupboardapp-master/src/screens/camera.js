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

var uid;

//-----------------FIRESTORE-----------------//

var userID = firebase.auth().currentUser.uid;
var db = firebase.firestore();
// var items;
//
// items = {}
//
// var itemList = {
//   "name": this.state.item
// }
//
// items['newItem'] = itemList;

// db.collection("items").doc(userID).doc("shoppinglist").set({
//   name: item
//

//dict[item] = (dict[item] || 0) + 1;

let addItem = item1 => {
  //firebase.firestore().ref('/items').push({
  db.collection("userUID: " + userID).doc("shoppinglist").update({
    Items: {
      item1: {
        name: item1
        }
      }
    });
  console.log(item)

}
//---------------FIREBASEDATABASE---------------//

// var userID = firebase.auth().currentUser.uid;
//
// let addItem = item => {
//   firebase.database().ref('/userUID ' + userID + '/items').push({
//     name: item
//   });
// }

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
