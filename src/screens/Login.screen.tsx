import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from 'src/types/navigation.type'
import { useTranslation } from 'react-i18next'

type LoginScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { t } = useTranslation()

  const handleLogin = () => {
    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <Text>{t('login.title')}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default LoginScreen
