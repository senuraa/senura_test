import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import InputField from './InputField';
import {emailValidate} from '../utils/validations';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: {value: '', error: false},
      password: {value: '', error: false},
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleEmailChange(email) {
    this.setState({email: {value: email}});
  }
  handlePasswordChange(pass) {
    this.setState({password: {value: pass}});
  }
  submit() {
    const {email, password} = this.state;
    if (!emailValidate(email.value)) {
      this.setState({email: {error: true}});
    }
    if (password.value === '') {
      this.setState({password: {error: true}});
    }
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
    const {email, password} = this.state;
    return (
      <View style={viewContainer}>
        <Text style={titleText}>Sign In</Text>
        <View style={container}>
          <InputField
            errorMsg="Invalid Email"
            value={email.value}
            onChange={this.handleEmailChange}
            placeholder="you@address.net"
            secureText={false}
            label="Email"
            error={email.error}
          />
          <InputField
            errorMsg="Password should not be empty"
            error={password.error}
            value={password.value}
            onChange={this.handlePasswordChange}
            placeholder="Password"
            secureText={true}
            label="Password"
          />
          <View style={btnStyle}>
            <TouchableOpacity style={button} onPress={this.submit}>
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
