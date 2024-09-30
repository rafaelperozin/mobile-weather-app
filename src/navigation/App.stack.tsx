import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import MainScreen from 'src/screens/Main.screen'
import { AppStackParamList } from 'src/types/navigation.type'
import LocationsScreen from 'src/screens/Locations.screen'
import { TouchableOpacity } from 'react-native'

const Tab = createBottomTabNavigator<AppStackParamList>()

const AppStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home'

          if (route.name === 'Main') {
            iconName = 'home'
          } else if (route.name === 'Locations') {
            iconName = 'location'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        // increase hight of the tab bar
        tabBarStyle: {
          height: 70,
          paddingTop: 15,
          paddingBottom: 15,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              // Add your logout logic here
              alert('Logout button pressed')
            }}
            style={{ marginRight: 15 }}
          >
            <Ionicons name="log-out-outline" size={24} color="#000" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen name="Locations" component={LocationsScreen} />
    </Tab.Navigator>
  )
}

export default AppStack
