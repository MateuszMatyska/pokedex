import React, {useEffect} from 'react';
import {Image} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './Photo.style';

interface Props {
  id: string;
}

const Photo: React.FC<Props> = ({id}) => {
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    rotation.value = withSpring(360, {
      damping: 20,
      stiffness: 90,
    });
  }, [rotation.value]);

  return (
    <Animated.View style={[styles.imageWrapper, animatedStyle]}>
      <Image
        style={styles.image}
        source={{
          uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        }}
      />
    </Animated.View>
  );
};

export default Photo;
