import {StyleSheet, Dimensions} from 'react-native';
import {colors} from 'src/const/colors';

const {width, height} = Dimensions.get('window');

export const styles: any = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    height,
    width,
  },
  redSquare: {
    backgroundColor: colors.red,
    flex: 1,
  },
  blueSquare: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  pokeball: {
    position: 'absolute',
    width,
    height,
  },
});
