import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

const PhotoItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  )
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#001F52',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: '#FFECBA'
  }
}

export default PhotoItem