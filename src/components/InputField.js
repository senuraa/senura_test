import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const InputField = props => {
  const {label, placeholder, secureText, onChange, value} = props;
  const {inputView, labelTxt, txtInput} = styles;
  return (
    <View style={inputView}>
      <Text style={labelTxt}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChange}
        value={value}
        style={txtInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  labelTxt: {
    fontSize: 20,
    flex: 1,
  },
  txtInput: {
    borderWidth: 2,
    fontSize: 20,
    borderColor: '#000',
    flex: 2,
  },
});

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default InputField;
