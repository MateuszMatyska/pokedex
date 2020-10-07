import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './PokedexAnimation.styles';

const PokedexAnimation: React.FC<any> = () => {
  return (
    <View style={styles.animatedContainer}>
      <View style={styles.redSquare} />
      <View style={styles.blueSquare} />
      <Image source={require('src/img/pokeball.jpg')} style={styles.pokeball} />
    </View>
  );
};

export default PokedexAnimation;
