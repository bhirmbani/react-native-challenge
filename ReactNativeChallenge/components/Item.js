import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const PhotoItem = (props) => {
  return (
    <View style={styles.content}>
      {console.log(props.photoDetails.src.tiny)}
      <Image source={{uri: props.photoDetails.src.tiny}} style={{height: 200, width: 200}}/>
      <Text>Photographer: {props.photoDetails.photographer}</Text>
    </View>
  )
}

const styles = {
  content: {
    padding: 20
  }
}

export default PhotoItem