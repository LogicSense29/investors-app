import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyInput = ({ label, leftSymbol, rightSymbol, placeholder, onRightSymbolPress, style, inputStyle, labelStyle}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputContainer}>
        <Text style={styles.symbol}>{leftSymbol}</Text>
        <TextInput
          style={[styles.input, inputStyle]} // Added inputStyle prop
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity onPress={onRightSymbolPress}>
          <Text style={[styles.symbol, styles.clickableSymbol]}>{rightSymbol}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#5f5f5f',
    lineHeight: 14.52,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    gap: 10,
  },
  symbol: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: '#333',
  },
  clickableSymbol: {
    color: '#007BFF',
  },
});

export default MyInput;
