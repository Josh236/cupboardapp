import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import firebase from '../../../firebase/config';

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null}

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('./Welcome'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  // var userId = firebase.auth().currentUser.uid;
  // var database = firebase.database();
  //
  // function writeItemData( userId, email ){
  //   firebase.database().ref('users/' + userId + 'items/').set({
  //     name: item
  //   });
  // }
  //-------------------------------------------------------//
  // var user = firebase.auth().currentUser;
  // var uid = user.uid;
  //
  // var ref2 = firebase.database().ref('/users').child("/items");
  // ref2.child(uid).set({
  //   items: quantity
  // });
//-----------------------------------------------------------//
  // firebase.database().ref("users/" + user.uid + "/items").update({
  //   item: name, quantity
  // });
//--------------------------------------------------------//
  // firebase.database().ref(`/users/${userID}/items`).set(items)
  //   .then(() => {
  //     Alert.alert("New item data sent");
  //   })
  //   .catch(error => Alert.alert("Error when adding new item.", error));

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red'}}>
            {this.state.errorMessage}
          </Text>}
        <TextInput placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={email => this.setState({email
        })}

        value={this.state.email} />

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({
            password
          })}
          value={this.state.password} />
          <Button title="Sign Up" onPress={this.handleSignUp} />
            <Button title="Already have an account? Login" onPress={() =>
            this.props.navigation.navigate(Login)} />
          </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
