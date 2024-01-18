import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Wrapper from './Wrapper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const {height} = Dimensions.get('window');
const cuHeight = getStatusBarHeight();
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import MenuItem from './MenuItem';

export default function SideMenu() {
  const navigation = useNavigation();

  const items = {
    Notifications: {
      heading: 'Notifications',
      routeName: 'Notifications',
      url: 'ios-notifications-outline',
      desc: 'Read notifications',
    },
    Account: {
      heading: 'My Account',
      routeName: 'Account',
      url: 'person-outline',
      desc: 'View account details',
    },
    Orders: {
      heading: 'My Orders',
      routeName: 'Orders',
      // url: require('../img/purchase.png'),
      desc: 'View previous orders',
    },
    Wishlist: {
      heading: 'My Favourites',
      routeName: 'Wishlist',
      // url: require('../img/wishlist.png'),
      desc: 'View all favourites',
    },
    Addresses: {
      heading: 'Manage Address',
      routeName: 'Addresses',
      url: 'location-sharp',
      desc: 'Manage your addresses',
    },
    MyPrescription: {
      heading: 'My Prescriptions',
      routeName: 'MyPrescription',
      url: 'reader-outline',
      desc: 'All uploaded prescriptions',
    },
    SpecialOffers: {
      heading: 'Special Offers',
      routeName: 'SpecialOffers',
      url: require('../img/special_offers.png'),
      desc: 'Exclusive discounts just for you',
    },
    Suggest: {
      heading: 'Request Medicine',
      routeName: 'SuggestMedicine',
      url: require('../img/medical_kit.png'),
      desc: 'Request medicine/health products to add',
    },
    Refer: {
      heading: 'Refer And Earn',
      routeName: 'Refer',
      url: 'ios-gift',
      // desc: `${globalData?.refBonus} Taka bonus for every refer`,
      extraTagImage: require('../img/earn-more.gif'),
    },
    CallToOrder: {
      heading: 'Call to Order',
      routeName: 'CallToOrder',
      url: 'ios-call',
      // desc: `${globalData?.hotline || TEL_NUMBER} `,
    },
    Help: {
      heading: 'FAQs',
      routeName: 'Help',
      url: 'ios-help-circle-outline',
      desc: 'Frequently asked questions',
    },
    RateUs: {
      heading: 'Rate Us',
      routeName: 'RateUs',
      url: 'ios-star-outline',
      desc:
        Platform.OS === 'android'
          ? 'Rate us on play store'
          : 'Rate us on app store',
    },
    Facebook: {
      heading: 'Facebook Page',
      routeName: 'Facebook',
      url: 'logo-facebook',
      desc: 'Find us on Facebook',
    },
  };

  const finalMenuItems = {...items};
  return (
    <Wrapper style={styles.containerStyle}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person" size={33} color="#4F585E" style={{}} />
          <Text style={styles.userSignInText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.scrollviewStyle}>
          <FlatList
            data={Object.values(finalMenuItems)}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.routeName}
            renderItem={({item}) => {
              return (
                // <Text>{item.heading}</Text>
                <MenuItem
                  //   user={user || null}
                  uri={item?.uri}
                  routeName={item?.routeName}
                  heading={item?.heading}
                  desc={item?.desc}
                  url={item?.url}
                  navigation={navigation}
                  //   unread={unread}
                  extraTagImage={item?.extraTagImage}
                  //   hotline={globalData?.hotline || TEL_NUMBER}
                />
              );
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  header: {
    paddingRight: 10,
    ...Platform.select({
      ios: {
        paddingTop: height > 670 ? (cuHeight < 30 ? 40 : cuHeight + 10) : 30,
      },
      android: {
        paddingTop: 10,
        marginTop: cuHeight,
      },
    }),
  },
  userSignInText: {
    color: '#4F585E',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 50,
  },
  hairLineBorder: {
    height: 0.5,
    width: '90%',
    backgroundColor: '#707070',
    marginTop: 15,
    alignSelf: 'center',
  },
  //   scrollviewStyle: {
  //     width: '100%',
  //     paddingLeft: 20,
  //     paddingRight: 10,
  //     flexDirection: 'column',
  //     flex: 1,
  //   },
});
