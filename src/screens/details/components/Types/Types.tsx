import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Types.style';

interface Props {
  value: string | undefined;
}

const Types: React.FC<Props> = ({value}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`${value}`}</Text>
    </View>
  );
};

export default Types;
