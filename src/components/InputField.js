import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const InputField = props => {
  const {
    label,
    placeholder,
    secureText,
    onChange,
    value,
    errorMsg,
    error,
  } = props;
  const {inputView, labelTxt, txtInput, inputWrap, errorStyle} = styles;
  const showError = () => {
    if (error) {
      return <Text style={errorStyle}>{errorMsg}</Text>;
    }
  };
  return (
    <View style={inputView}>
      <Text style={labelTxt}>{label}</Text>
      <View style={inputWrap}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureText}
          onChangeText={onChange}
          value={value}
          style={txtInput}
        />
        {showError()}
      </View>
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
  },
  inputWrap: {
    flex: 2,
    flexDirection: 'column',
  },
  errorStyle: {
    color: '#f44336',
  },
});

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,

  errorMsg: PropTypes.string.isRequired,
};
export default InputField;
