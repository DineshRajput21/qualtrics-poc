/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from "react";
import type { Node } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Qualtrics from "react-native-qualtrics";
import Home from "./App/screens/Home";

const Stack = createStackNavigator();
const App = (props) => {
  // Only initilize the data one time when the app loads for SDK and config variables
  useEffect(() => {
    try {
      Qualtrics.initializeProject(
        "singlifecaresd",
        "ZN_eQCkPp4VLL5F3LM",
        (result) => {
          console.log("Results "+result);
        }
      );
    } catch (e) {
       alert(JSON.stringify(e));
    }
    // This is a fancy way of matching the Qualtrics DateTime format using JS
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    Qualtrics.setDateTime(today);
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
