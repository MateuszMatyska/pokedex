import {StyleSheet} from 'react-native';
import {colors} from 'src/const/colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    marginVertical: 5,
  },
  statsBar: {
    height: '100%',
    width: '1%',
    backgroundColor: colors.blue,
    borderColor: colors.black,
    borderWidth: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontSize: 20,
    position: 'absolute',
    color: colors.white,
    marginLeft: 15,
  },
});
