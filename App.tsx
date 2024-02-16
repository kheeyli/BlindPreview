import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Table from './Table';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Preview Blinds Structure"
        onPress={() => navigation.navigate("Blind Struc")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {

const LevelData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "..."];
const TimeData = ["03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "24:00", "27:00", "30:00", "+3:00"];
const BlindsData = ["1/2", "2/4", "4/8", "8/16", "16/32", "32/64", "64/128", "128/256", "256/512", "512/1024", "*2"];


  return (
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home Page"
          component={HomeScreen}
           />

          <Stack.Screen name = "Blind Struc"
          options={ ({navigation} ) => ({
            headerShown: true,

            headerTitle:() => (<Text style={styles.titleheader}>Preview Blind Structure</Text>
          ), 

          headerLeft:() => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.arrow}>◀︎</Text>
            </TouchableOpacity>
          ),

          headerBackground: () => (
            <LinearGradient
              colors={["#E1BEF3", "#DA8CF8", "#7E3EF8", "#6A1FF9"]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
          ),
          })} >


        {(props) => (
            <View>
              <Table {...props} column1Data={LevelData} column2Data={TimeData} column3Data={BlindsData} />
            </View>
        )}

    </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>

  );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },

    titleheader:
    {
      color: 'white',
      fontSize: 19,
      textAlign: 'center',  
    },

    arrow: {
      fontSize: 20,
      marginLeft: 10,
    },
  });

export default App; 