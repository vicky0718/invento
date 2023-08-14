import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import UserManagement from '../screens/UserManagement'

const Drawer = createDrawerNavigator();

const SideMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="UserManagement" component={UserManagement} />
    </Drawer.Navigator>
  );
}

export default SideMenu;