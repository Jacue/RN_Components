import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Alert,
} from 'react-native';

import RNButton from '../../components/customButton'

export default class ButtonSample extends Component {
    
    static navigationOptions = {
        title: '按钮',//对页面的配置
      };
    

    render() {
        return (
            <View style={styles.container}>
                <RNButton 
                    style={styles.button} 
                    title="按钮1" 
                    titleStyle={{color: 'white'}} 
                    onPressIn={()=>{Alert.alert('按钮1 TouchDown');}}
                    onPressOut={()=>{Alert.alert('按钮1 TouchUp');}}
                />
                <RNButton 
                    style={[styles.button, {borderColor: '#3097FD',backgroundColor: 'white', borderWidth: StyleSheet.hairlineWidth}]} 
                    title="按钮2" 
                    titleStyle={{ color: '#3097FD'}} 
                    onPress={()=>{Alert.alert('按钮2 自定义样式');}}
                />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginTop: 30,
        marginLeft: 30,
        width: 120,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#3097FD',
    }
});