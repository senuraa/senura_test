import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import InputField from './InputField';
class SignIn extends Component {
  constructor() {
    super();
    this.state = {email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(email) {
    this.setState({email: email});
  }
  handlePasswordChange(pass) {
    this.setState({password: pass});
  }
  submit() {
    console.log(this.state.email);
    console.log(this.state.password);
  }
  render() {
    const {
      container,
      titleText,
      btnStyle,
      viewContainer,
      button,
      buttonTxt,
    } = styles;
    return (
      <View style={viewContainer}>
        <Text style={titleText}>Sign In</Text>
        <View style={container}>
          <InputField
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="you@address.net"
            secureText={false}
            label="Email"
          />
          <InputField
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Password"
            secureText={true}
            label="Password"
          />
          <View style={btnStyle}>
            <TouchableOpacity style={button}>
              <Text style={buttonTxt}> Sign-in </Text>
            </TouchableOpacity>
            {/*<Button onPress={this.submit} title="Sign in" />*/}
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    marginBottom: 20,
  },

  btnStyle: {
    width: 100,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    padding: 10,
  },
  buttonTxt: {
    fontSize: 20,
  },
});
export default SignIn;
