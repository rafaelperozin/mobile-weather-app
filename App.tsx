import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppStack from './src/navigation/App.stack'
import AuthStack from './src/navigation/Auth.stack'
import { RootStackParamList } from './src/types/navigation.type'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  const isLoggedIn = true

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
