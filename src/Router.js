import React from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Splash from './screens/splash'
import Home from './screens/home';
import Login from './screens/auth/login';
import Register from './screens/auth/register';
import GetOtp from './screens/auth/getOtp';
import ForgotPassword from './screens/auth/forgotPassword';
import ResetPassword from './screens/auth/resetPassword';
import AddRecipe from './screens/addRecipe';
import Chat from './screens/chat';
import Profile from './screens/profile';
import TabComponent from './components/Tab'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
                    name="HomeScreen"
                    component={HomeRoute}
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

const HomeRoute = () => {
    return(
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarButton: (props) => <TabComponent label="Home" {...props} />
                    }}
                />
                <Tab.Screen 
                    name="AddRecipe"
                    component={AddRecipe}
                    options={{
                        tabBarButton: (props) => <TabComponent label="Plus" {...props} />
                    }}
                />
                <Tab.Screen 
                    name="Chat"
                    component={Chat}
                    options={{
                        tabBarButton: (props) => <TabComponent label="Chat" {...props} />
                    }}
                />
                <Tab.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarButton: (props) => <TabComponent label="Profile" {...props} />
                    }}
                />
            </Tab.Navigator>
    )
}
export default Router


