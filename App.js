import { StatusBar } from 'expo-status-bar';
//import {useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PresentationScreen from "./screens/PresentationScreen";
import AllHabits from "./screens/AllHabits";
import IconButton from "./components/IconButton";
import { GlobalStyles } from './constants/style';


import ManageHabit from "./screens/ManageHabit";

const Stack = createStackNavigator();

export default function App() {

  return (
        <NavigationContainer>
            <StatusBar backgroundColor="#fff" barStyle="light-content" />
          <Stack.Navigator
            /*  screenOptions={{
                  headerStyle: { backgroundColor: GlobalStyles.colors.pagesBack },
                  headerTintColor: 'white',
              }}*/
          >
          {/*  <Stack.Screen
                name="Presentation"
                component={PresentationScreen}
                //options={{ headerShown: false }}
            />*/}

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
    //backgroundColor: '#7f8c8d',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
});
