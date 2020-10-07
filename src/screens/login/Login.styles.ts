import {StyleSheet} from 'react-native';
import {colors} from 'src/const/colors';
import {
  maxHeight,
  contentWidth,
  contentHorizontalMargin,
} from 'src/utils/Dimension';

export const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  content: {
    width: contentWidth,
    height: maxHeight,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: contentHorizontalMargin,
  },
  wrapper: {
    flex: 3,
  },
  title: {
    justifyContent: 'center',
  },
  animatedText: {
    fontSize: 58,
  },
  login: {
    flex: 4,
    justifyContent: 'flex-start',
  },
  passwordAnimatedWrapper: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 6,
  },
  password: {
    margin: 5,
  },
});
