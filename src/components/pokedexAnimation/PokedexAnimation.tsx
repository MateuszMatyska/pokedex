import React from 'react';
import {View, Animated, Image} from 'react-native';
import {styles} from './PokedexAnimation.styles';

interface Props {
  pokedexOpacity: Animated.Value;
}

const PokedexAnimation: React.FC<Props> = ({pokedexOpacity}) => {
  return (
    <Animated.View
      style={[styles.animatedContainer, {opacity: pokedexOpacity}]}>
      <View style={styles.redSquare} />
      <View style={styles.blueSquare} />
      <Image source={require('src/img/pokeball.jpg')} style={styles.pokeball} />
    </Animated.View>
  );
};

export default PokedexAnimation;
