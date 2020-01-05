import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Styles from '../styles';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ItemCategoryBox from './item-category-box';
import firebase from '../firebase/config';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const screenWidthMargin = viewportWidth - 60;

var db = firebase.firestore();

// db.collection("items").get().then(function(querySnapshot){
//         querySnapshot.forEach(function(doc){
//           console.log(doc.data())
//           //console.log(JSON.stringify(doc.data()))
//         });
//       });
// }

//console.log(showRecipe)

var docRef = db.collection('items').doc('Chickpea Dal');
// var itemInfo = docRef.get().then(function(doc){
var fireInfo;
var fireInfoIng = 'ing';
var fireInfoTitle;
var item1 = docRef
  .get()
  .then(function(doc) {
    if (doc.exists) {
      fireInfo = doc.data();
      fireInfoIng = fireInfo.ingredient;
      fireInfoTitle = fireInfo.title;
    } else {
      console.log('No Document');
    }
  })
  .catch(function(error) {
    console.log('Error');
  });

export default class Recipecarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          //id: (FROM DATABASE) ,
          title: fireInfoIng,
          category: 'Italian',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 2',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 3',
          thumbnail: require('../assets/stock.png'),
        },
        {
          title: 'Item 4',
          thumbnail: require('../assets/stock.png'),
        },
      ],
    };
  }

  runThis = () => {
    console.log(fireInfoIng);
    console.log(fireInfoTitle);
  };

  componentDidMount() {}

  _renderItem({item, index}) {
    return (
      <View
        style={{
          justifyContent: 'center',
          margin: 0,
          marginRight: 20,
        }}>
        <Image style={Styles.caraThumb} source={item.thumbnail} />
        <Text style={Styles.caraTitle}>{item.title}</Text>
        <Text style={Styles.caraSubTitle}>{item.category}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{paddingTop: 20}}>
        <Carousel
          data={this.state.carouselItems}
          sliderWidth={viewportWidth}
          itemWidth={screenWidthMargin}
          layout={'default'}
          inactiveSlideScale={1}
          renderItem={this._renderItem}
        />
        <TouchableOpacity onPress={this.runThis}>
          <Text>Press me</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
