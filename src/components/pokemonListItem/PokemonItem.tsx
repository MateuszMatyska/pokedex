import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './PokemonItem.style';

interface Props {
  name: string;
  id: number;
}

const PokemonItem: React.FC<Props> = ({name, id}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.wrapper}>
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
