import React from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/splash'
import Home from './screens/home';
import Login from './screens/auth/login';
import Register from './screens/auth/register';
import GetOtp from './screens/auth/getOtp';
import ForgotPassword from './screens/auth/forgotPassword';
import ResetPassword from './screens/auth/resetPassword';


const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false
                    }}
                />
                 <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="GetOtp"
                    component={GetOtp}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
