import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';

import PhotoItem from './Item';

const ListPhoto = (props) => {
  return (
    <ScrollView>
    {console.log(props.photoList)}
      {
        props.photoList.map(photo => (
          <PhotoItem key={photo.id} photoDetails={photo} />
          )
        )
      }
    </ScrollView>
  )
}

const styles = {
  content: {
    flex: 1,
    width: '100%',
    paddingLeft: '5%'
  }
}

export default ListPhoto
