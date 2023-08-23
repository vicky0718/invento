import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image } from 'react-native';

// import screens to be used
import Dashboard from '../screens/Dashboard';
import UserManagement from '../screens/UserManagement'
import Customer from "../screens/Customer";
import Company from "../screens/company";
import Brand from "../screens/brand";
import Category from "../screens/category";
import Store from "../screens/store";
import Attribute from "../screens/Attribute";
import Product from "../screens/Product";
import Orders from "../screens/Order";
import Report from "../screens/report";
import Settings from "../screens/settings";
import { TouchableOpacity } from 'react-native-gesture-handler';


//- - - - Drawer functionality and Screens - - - -  
const Drawer = createDrawerNavigator();

const SideMenu = () => {
   const iconPath = '../assets/'; // Set the path to the icons folder

   return (
    <Drawer.Navigator  
       screenOptions={{
       drawerStyle: {
         backgroundColor: '#82EEFD',
         width: 240
        },
      }}
    >
      <Drawer.Screen name="Dashboard"
       component={Dashboard}
       options={{
       drawerIcon: () => (
         <Image source={require('../assets/dashboard.png')} style={{ width: 20, height: 20 }} />
         )
        }}
      />
      <Drawer.Screen name='UserManagement'
       component={UserManagement} 
       options={{
       drawerIcon: () => (
         <Image source={require('../assets/usermanagement.png')} style={{ width: 20, height: 20 }} />
         )
        }}
      />
       <Drawer.Screen name='Customer'
       component={Customer} 
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/customer.png')} style={{ width: 20, height: 20 }} />
          )
        }}
       />
      <Drawer.Screen name='Brand' component={Brand} 
      options={{
        drawerIcon: () => (
          <Image source={require('../assets/brand.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Category'component={Category}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/category.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Store' component={Store} 
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/store.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Attribute' component={Attribute}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/attribute.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Product' component={Product}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/product.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Orders' component={Orders}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/orders.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name= 'Report' component={Report}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/report.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Company' component={Company}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/company.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
      <Drawer.Screen name='Settings' component={Settings}
       options={{
        drawerIcon: () => (
          <Image source={require('../assets/setting.png')} style={{ width: 20, height: 20 }} />
          )
        }}
      />
    </Drawer.Navigator>
  );
  
}
export default SideMenu;