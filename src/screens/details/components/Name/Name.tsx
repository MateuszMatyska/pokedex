import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {styles} from './Name.style';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  name: string | undefined;
}

const Name: React.FC<Props> = ({name}) => {
  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  });

  useEffect(() => {
    animatedOpacity.value = withTiming(1, {
      duration: 15000,
      easing: Easing.out(Easing.exp),
    });
  });

  return name ? (
    <Animated.View style={[styles.nameWrapper, animatedStyle]}>
      <Text style={styles.nameText}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </Animated.View>
  ) : null;
};

export default Name;
