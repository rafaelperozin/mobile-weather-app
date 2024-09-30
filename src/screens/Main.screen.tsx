import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet } from 'react-native'

const MainScreen: React.FC = () => {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>{t('main.title')}</Text>
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

export default MainScreen
