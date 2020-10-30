/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  delay,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {styles} from './Info.style';

interface Props {
  name: string;
  value: number | undefined;
}

const Info: React.FC<Props> = ({name, value}) => {
  const fontSizeAnimated = useSharedValue(8);

  const fontSizeAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: fontSizeAnimated.value,
    };
  });

  useEffect(() => {
    fontSizeAnimated.value = delay(
      3000,
      withTiming(18, {
        duration: 4000,
        easing: Easing.out(Easing.exp),
      }),
    );
  }, []);

  return value ? (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Animated.Text style={[styles.valueText, fontSizeAnimatedStyle]}>
        {value}
      </Animated.Text>
    </View>
  ) : null;
};

export default Info;
