import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SignIn extends Component {
  render() {
    const {titleView, titleText} = styles;
    return (
      <View style={titleView}>
        <Text style={titleText}>Sign In</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleView: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
});
export default SignIn;
