import {StyleSheet} from 'react-native';
import {maxWidth, maxHeight} from 'src/utils/Dimension';
import {colors} from 'src/const/colors';

export const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listWrapper: {
    flex: 1,
    marginHorizontal: '5%',
  },
  animationWrapper: {
    width: '100%',
  },
  statusBarWrapper: {
    width: maxWidth,
    height: 10,
  },
  statusBar: {
    backgroundColor: colors.blue,
    width: '100%',
    height: '100%',
  },
});
