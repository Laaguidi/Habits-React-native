import { StatusBar } from 'expo-status-bar';
import {useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PresentationScreen from "./screens/PresentationScreen";
//import AllHabits from "./screens/AllHabits";
//import IconButton from "./components/IconButton";
import ManageHabit from "./screens/ManageHabit";
//import HabitsContextProvider, {HabitsContext} from "./store/habits-context";




const Stack = createStackNavigator();

export default function App() {

  return (

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Presentation"
                component={PresentationScreen}
                //options={{ headerShown: false }}
            />

              <Stack.Screen
                  name="AllHabits"
                  component={AllHabits}
                  options={({ navigation }) => ({
                      // Place your screen options here
                      // For example:
                      headerTitle: 'All Habits',
                      // ... other options
                      headerRight: ({ tintColor }) => (
                          <IconButton
                              icon="add"
                              size={24}
                              color={tintColor}
                              onPress={() => {
                                  navigation.navigate('ManageHabit');
                              }}
                          />
                      ),
                  })}
              />

              <Stack.Screen
                  name="ManageHabit"
                  component={ManageHabit}
                  options={{
                      presentation: 'modal',
                  }}
              />

          </Stack.Navigator>
        </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f8c8d',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
});
