import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewPropTypes, 
  Image,
  ImageSourcePropType
} from 'react-native';
import PropTypes from 'prop-types';

export default class RNButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 是否选中
      isSelected: false,
    };
  }

  render() {
    return (
      <TouchableOpacity 
        style={[styles.container, this.props.style]} 
        onPress={this.props.onPress}
        onPressIn={this.props.onPressIn}
        onPressOut={this.props.onPressOut}
        activeOpacity={this.props.activeOpacity}>
        {this.props.backgroundImageUri && (
          <Image style={[styles.backgroundImage, this.props.backgroundImage]} source={this.props.backgroundImageUri} resizeMode={this.props.backgroundImageResizeMode}/>
        )}
        
          <Image style={[styles.image, this.props.imageStyle]} source={this.state.isSelected ? this.props.imageUri: this.props.selectedImageUri}/>
        
        

      </TouchableOpacity>
    );
  }
}

RNButton.propType = {
  style: ViewPropTypes.style,
  title: PropTypes.string.isRequired, // 文字
  titleStyle: Text.propTypes.style,   // 文字样式
  imageUri: ImageSourcePropType,         // icon
  selectedImageUri: PropTypes.string, // 选中的icon
  imageStyle: Image.propTypes.style,  // icon样式
  backgroundImageUri: ImageSourcePropType,// 背景图片
  backgroundImageResizeMode: "cover" | "contain" | "stretch" | "repeat" | "center", // 背景图片填充方式
  disable: PropTypes.bool,  // 是否可点击
  disableStyle: ViewPropTypes.style, // 不可点击时的样式
  onPress: PropTypes.func,  // 点击事件
  onPressIn: PropTypes.func,// touchDown事件
  onPressOut: PropTypes.func,// touchUp事件
  currentState: "normal" | "highlighted" | "selected" | "disable",
  activeOpacity: PropTypes.number, // 触摸时透明度，0.85的效果跟iOS原生按钮相同，如果设置为1.0，则看不到点击效果
};

RNButton.defaultProps = {
  backgroundImageResizeMode: "cover",
  touchFeedbackType: "highlighted",
  disable: false,
  currentState: "normal",
  activeOpacity: 0.85,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
  },
  image: {
    position: 'absolute',
  },
  title: {
    position: 'absolute',
  },
});