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
    
    // 点击单选按钮
    chooseCheckButton = () => {
        Alert.alert(!this.checkButton.state.isSelected ? '选中单选按钮' : "取消选中单选按钮");
        this.checkButton.setSelected(!this.checkButton.state.isSelected);
    }

    // 点击单选按钮
    chooseCheckButton2 = () => {
        Alert.alert(!this.checkButton2.state.isSelected ? '选中单选按钮2' : "取消选中单选按钮2");
        this.checkButton2.setSelected(!this.checkButton2.state.isSelected);
    }

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
                <RNButton 
                    ref={(c) => {
                        this.checkButton = c;
                    }}
                    style={styles.button}
                    backgroundImageUri={require('../../images/holderImage.png')}
                    backgroundImageStyle={{width: 100,height: 45, position: 'absolute',borderRadius: 5}}
                    imageUri={require('../../images/checkbox.png')}
                    selectedImageUri={require('../../images/checkbox-selected.png')}
                    title="勾选1" 
                    titleStyle={{ color: 'white', marginLeft: 10}}
                    onPress={this.chooseCheckButton}
                />
                <RNButton 
                    ref={(c) => {
                        this.checkButton2 = c;
                    }}
                    style={styles.button}
                    activeOpacity={1.0}
                    backgroundImageUri={require('../../images/holderImage.png')}
                    backgroundImageStyle={{width: 100,height: 45, position: 'absolute',borderRadius: 5}}
                    imageUri={require('../../images/checkbox.png')}
                    imageStyle={{top: 10,right: 10, position: 'absolute'}}
                    selectedImageUri={require('../../images/checkbox-selected.png')}
                    title="勾选2" 
                    titleStyle={{ color: 'white', marginLeft: -15}}
                    onPress={this.chooseCheckButton2}
                />
                <RNButton 
                    style={styles.verticalButton} 
                    disabled
                    disabledStyle={{opacity: 0.3}}
                    backgroundImageUri={require('../../images/holderImage.png')}
                    backgroundImageStyle={{width: 45,height: 100, position: 'absolute',borderRadius: 5}}
                    imageUri={require('../../images/checkbox.png')}
                    selectedImageUri={require('../../images/checkbox-selected.png')}
                    title="勾选3" 
                    titleStyle={{ color: 'white', marginTop: 10}}
                />
                <RNButton 
                    style={{marginTop: 30, marginLeft: 15, width: 40, height: 40}}
                    imageUri={require('../../images/icon_qrcode.png')}
                    imageStyle={{width: 40,height: 40, position: 'absolute'}}
                    onLongPress={()=>{Alert.alert('icon按钮：长按事件');}}
                />
                <RNButton 
                    style={{marginTop: 30, marginLeft: 15, width: 210, height: 45}}
                    backgroundImageUri={require('../../images/login_btn.png')}
                    backgroundImageStyle={{width: 210,height: 44, position: 'absolute'}}
                    onPress={()=>{Alert.alert('backgroundImage按钮');}}
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
        marginLeft: 15,
        width: 100,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#3097FD',
    },
    verticalButton: {
        marginTop: 30,
        marginLeft: 15,
        width: 45,
        height: 100,
        flexDirection: 'column',
    }
});