/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import axios from 'axios';

import ListPhoto from './components/List'
import Header from './components/Header'

export default class ReactNativeChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = '563492ad6f9170000100000143de09da7d704c1d67462c54f4d9a25e';
      axios.get('http://api.pexels.com/v1/search?query=Summer&per_page=12&page=1').
      then(res => {
        console.log(res.data.photos)
        this.setState({
          photos: res.data.photos
        })
      })
  }

  render() {
    return (
      <View style={styles.container}>
      <Header name='Photo List'/>
        <ListPhoto photoList={this.state.photos} />
      </View>
      
      
    );
  }

  

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeChallenge', () => ReactNativeChallenge);
