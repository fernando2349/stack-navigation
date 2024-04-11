import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductScreen from '../screens/Products/ProductScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import ProductsScreen from '../screens/Products/ProductsScreen';

export type RootStackParams = {
  Home: undefined,
  Product: {id: number, name: string, prince: number, category: string},
  Products: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        }
      }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
