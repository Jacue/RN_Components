import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ViewPropTypes, 
  Image,
  ImageSourcePropType,
  View
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

  setSelected = (isSel) => {
    if (isSel !== this.state.isSelected) {
      this.setState({isSelected: isSel});
    }
  }

  render() {
    return (
      <TouchableOpacity 
        style={[styles.container, this.props.style]} 
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        onPressIn={this.props.onPressIn}
        onPressOut={this.props.onPressOut}
        activeOpacity={this.props.activeOpacity}>
          {this.props.backgroundImageUri && (
            <Image style={this.props.backgroundImageStyle} source={this.props.backgroundImageUri} resizeMode={this.props.backgroundImageResizeMode}/>
          )}
          {this.props.imageUri && (
            <Image style={this.props.imageStyle} source={this.state.isSelected ? this.props.selectedImageUri: this.props.imageUri}/>
          )}
        <Text style={this.props.titleStyle}>{this.props.title}</Text>
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
  backgroundImageStyle: Image.propTypes.style, // 背景图片样式
  backgroundImageResizeMode: "cover" | "contain" | "stretch" | "repeat" | "center", // 背景图片填充方式
  disabled: PropTypes.bool,  // 是否可点击
  disabledStyle: ViewPropTypes.style, // 不可点击时的样式
  onPress: PropTypes.func,  // 点击事件
  onPressIn: PropTypes.func,// touchDown事件
  onPressOut: PropTypes.func,// touchUp事件
  isSelected: PropTypes.bool, // 是否选中
  activeOpacity: PropTypes.number, // 触摸时透明度，0.85的效果跟iOS原生按钮相同，如果设置为1.0，则看不到点击效果
};

RNButton.defaultProps = {
  backgroundImageResizeMode: "cover",
  touchFeedbackType: "highlighted",
  disabled: false,
  currentState: "normal",
  isSelected: false,
  activeOpacity: 0.85,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',//相对父元素进行绝对定位
  },
});