import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './Stats.style';

interface Props {
  name: string | undefined;
  value: number | undefined;
}

const Stats: React.FC<Props> = ({name, value}) => {
  const width = useSharedValue(0);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
    };
  });

  useEffect(() => {
    if (value) {
      width.value = withTiming(value, {
        duration: 10000,
        easing: Easing.out(Easing.exp),
      });
    }
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.statsBar, animatedWidth]} />
      <Text style={styles.text}>{`${name}: ${value}`}</Text>
    </View>
  );
};

export default Stats;
