import {Home} from '../screens/Home';
import {Gallery} from '../screens/Gallery';
import {Conta} from '../screens/Conta';
import {CriarConta} from '../screens/CriarConta';
import {Servicos} from '../screens/Servicos';
import { createStackNavigator } from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
   <Navigator screenOptions={{headerShown:false}}>
    <Screen name='home' component={Home}></Screen>
    <Screen name='gallery' component={Gallery}></Screen>
    <Screen name='conta' component={Conta}></Screen>
    <Screen name='criarConta' component={CriarConta}></Screen>
    <Screen name='servicos' component={Servicos}></Screen>
   </Navigator>
  );
}