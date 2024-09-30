import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppStack from './src/navigation/App.stack'
import AuthStack from './src/navigation/Auth.stack'
import { RootStackParamList } from './src/types/navigation.type'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/i18n'

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  const isLoggedIn = true

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoggedIn ? (
            <Stack.Screen name="App" component={AppStack} />
          ) : (
            <Stack.Screen name="Auth" component={AuthStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  )
}
