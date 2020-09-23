import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import Homes from '../pages/HomeScreen';
import Cart from '../pages/cart';
import { DrawerContent } from '../pages/DrawerContainer';
import MyAccount from '../pages/MyAccount';


const Drawer = createDrawerNavigator();

function Routes(){
    return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={Homes} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="MyAccount" component={MyAccount} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}

export default Routes;