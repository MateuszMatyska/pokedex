import {StyleSheet} from 'react-native';
import {itemWidth, itemHeight} from 'src/utils/Dimension';
import {colors} from 'src/const/colors';

export const styles: any = StyleSheet.create({
  input: {
    width: itemWidth,
    height: itemHeight,
    borderWidth: 4,
    borderColor: colors.blue,
    borderRadius: 6,
    padding: 10,
    backgroundColor: colors.white,
    color: colors.blue,
  },
});
