import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Info.style';

interface Props {
  name: string;
  value: number | undefined;
}

const Info: React.FC<Props> = ({name, value}) => {
  return value ? (
    <View style={styles.container}>
      <Text style={styles.text}>{`${name}: ${value}`}</Text>
    </View>
  ) : null;
};

export default Info;
