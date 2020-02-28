import React  from "react";
import {Image, View} from 'react-native';

const Photo = () => {
  return (
  <View>
    <Image source = {require('./images/mountain.jpg')} style = {{ width: 700, height: 400 }}/>
</View>
  )
}


export default Photo;