import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import FastImage from 'react-native-fast-image';
import RBSheet from 'rn-raw-bottom-sheet';
import LoginButtonSheet from './LoginButtonSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeHeader = () => {
  const loginBottomSheet = useRef();
  const navigation = useNavigation();
  const onClickMenu = () => {
    console.log('Taka ar taka');
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
      <View style={styles.containerStyle}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FastImage
            resizeMode="contain"
            source={require('../img/logo_green.png')}
            style={styles.logo}
          />

          <Text style={styles.wholeSaleText}>Wholesale</Text>
        </View>
        <View>
          <View style={styles.searchHead}>
            <TouchableOpacity
              onPress={onClickMenu}
              style={styles.hamburgerView}>
              <Ionicons name="menu-outline" size={27} color="#000" />
              {/* {unread > 0 && (
                <View style={[styles.badge, {top: -3}]}>
                  <Text style={styles.unreadText}>{unread}</Text>
                </View>
              )} */}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Search')}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchPlaceholder} numberOfLines={1}>
              Search for medicine/health products
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: (500 * 60) / 1455,
  },
  containerStyle: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  searchHead: {
    backgroundColor: '#eef3f8',
    borderRadius: 999,
  },
});
