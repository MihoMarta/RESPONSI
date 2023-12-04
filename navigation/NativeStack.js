import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Peta from './Petalokasiobjek';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Peta" component={Peta} />
    </Stack.Navigator>
  );
}

export default MyStack