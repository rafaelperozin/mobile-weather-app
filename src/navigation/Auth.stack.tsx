import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from 'src/screens/Login.screen'
import { AuthStackParamList } from 'src/types/navigation.type'

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
