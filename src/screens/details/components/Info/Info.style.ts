import {StyleSheet} from 'react-native';
import {colors} from 'src/const/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: colors.white,
  },
  nameText: {
    fontSize: 20,
    textAlign: 'center',
  },
  valueText: {
    textAlign: 'center',
  },
});
