import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import RNButton from '../../components/customButton'
import MaskView from '../../components/maskView'

export default class MaskViewSample extends Component {

    static navigationOptions = {
        title: '蒙层',//对页面的配置
      };

    constructor(props) {
        super(props);
        this.state = {
            showMaskView: false,
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <RNButton 
                    style={styles.button}
                    title="蒙层（不覆盖NavigationBar）" 
                    titleStyle={{color: 'white'}}
                    onPress={()=>{this.setState({showMaskView:true});}}
                />
                {this.state.showMaskView && (
                    <MaskView/>
                )}
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
        flex: 1,
        top: 30,
        marginLeft: 50,
        marginRight: 50,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#3097FD',
    }
});