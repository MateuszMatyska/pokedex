import {StyleSheet} from 'react-native';
import {colors} from 'src/const/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 20,
    marginHorizontal: '25%',
  },
  text: {
    fontSize: 20,
    color: colors.black,
  },
});
