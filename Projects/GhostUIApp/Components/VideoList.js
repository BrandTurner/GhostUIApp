//import liraries
const ReactNative = require('react-native')
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import VideoComponent from './VideoComponent'

const { ListView } = ReactNative;

// create a component
const VideoList = ({ items, navigator, style, type, onVideoSelect }) => {
  renderRow = (video, sId, rId) => {
    return (
      <VideoComponent
        key={rId}
        video={video}
        videos={items}
        navigator={navigator}
        type={type}
        onVideoSelect={onVideoSelect}
      />
    );
  };

  return <ListView dataSource={items} enableEmptySections renderRow={this.renderRow} style={[style]} />;
};

//make this component available to the app
export default VideoList;
