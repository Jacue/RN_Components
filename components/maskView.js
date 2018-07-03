import React, { Component } from 'react';
import { 
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class MaskView extends Component {

    render() {
        return (
            <View style={{ width, height, position: 'absolute', backgroundColor: 'red', opacity: 0.3 }}/>
        );
    }
}