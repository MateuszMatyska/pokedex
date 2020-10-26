import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Name.style';

interface Props {
  name: string | undefined;
}

const Name: React.FC<Props> = ({name}) => {
  return name ? (
    <View style={styles.nameWrapper}>
      <Text style={styles.nameText}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </View>
  ) : null;
};

export default Name;
