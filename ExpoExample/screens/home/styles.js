import { StyleSheet } from 'react-native';
import { Helpers } from 'app/components/primitives';

export default StyleSheet.create({
  tabBarContainer: {
    height: Helpers.isIphoneX ? 80 : 60,
    paddingBottom: Helpers.isIphoneX ? 20 : 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'stretch',
    margin: -1,
    borderWidth: 1,
  },
  tab: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    paddingTop: 3,
  },
});
