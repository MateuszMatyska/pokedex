import React from 'react';
import {StyleProp, TextInput, TextStyle} from 'react-native';
import {styles} from './PokeInput.style';

interface Props {
  value: string | undefined;
  placeholder: string | undefined;
  style: StyleProp<TextStyle>;
  onChangeText: ((text: string) => void) | undefined;
  isPassword: boolean | undefined;
  onFocus: (() => void) | undefined;
  onBlur: (() => void) | undefined;
}

const PokeInput: React.FC<Props> = ({
  value,
  placeholder,
  style,
  onChangeText,
  isPassword,
  onFocus,
  onBlur,
}) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={[styles.input, style]}
      onChangeText={onChangeText}
      secureTextEntry={isPassword}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default PokeInput;
