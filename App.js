import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Qualtrics from "react-native-qualtrics";
import Home from "./App/screens/Home";

import {BRAND_ID, PROJECT_ID} from './App/utils';

const Stack = createStackNavigator();
const App = (props) => {
  useEffect(() => {
      Qualtrics.initializeProject(
        BRAND_ID,
        PROJECT_ID,
        (result) => {
          console.log("Response "+result);
        }
      );
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="D Coding Studio!" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
