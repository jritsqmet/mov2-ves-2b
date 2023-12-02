import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import DetallesScreen from '../screens/DetallesScreen';
import ListaImagenesScreen from '../screens/ListaImagenesScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Lista'>
      <Tab.Screen name="Detalles" component={ DetallesScreen } />
      <Tab.Screen name="Lista" component={ ListaImagenesScreen } />
    </Tab.Navigator>
  );
}

export default function BottomNavigator (){

    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}