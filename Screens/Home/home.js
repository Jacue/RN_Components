import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';

const homeItemsDatasource = [
    {
        key: 'ButtonSample',title:'RNCustomButton'
    }, 
    {
        key: 'MaskViewSample',title:'RNMaskView'
    }
];

export default class Home extends Component {
        
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={homeItemsDatasource}
                    ItemSeparatorComponent={()=><View style={{height: 1, backgroundColor: '#DDDDDD'}}/>}//分割线组件
                    
                    renderItem={({item}) => 
                        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => {
                                this.props.navigation.navigate(item.key)
                            }
                        }>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: Dimensions.get('window').width,
        marginLeft: 20,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, 
    itemTitle: {
        fontSize: 20,
        color: '#3097FD',
        fontFamily: 'PingFangSC-Semibold',
    }
});