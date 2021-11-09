import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './PokemonItem.style';
import {navigate} from 'src/navigation/NavigationServices';

interface Props {
  name: string;
  id: number;
  testID: string;
}

const PokemonItem: React.FC<Props> = ({name, id, testID}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate('Details', {id});
      }}>
      <View style={styles.container}>
        <View style={styles.wrapper} testID={testID}>
          <Image
            style={styles.image}
            source={{
              uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
            }}
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.name}>
            {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PokemonItem;
