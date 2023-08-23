import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

//import component screens for tab view
import ViewCustomer from './horizontalTabs/ViewCustomer';
import AddCustomer from './horizontalTabs/AddCustomer';

const Tab = createMaterialTopTabNavigator()

const Customer = () => {
  const navigation = useNavigation();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="ViewCustomers">
        <Tab.Screen name="View Customers" component={ViewCustomer} />
        <Tab.Screen name="Add Customers" component={AddCustomer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Customer;