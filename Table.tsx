import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  column1Data: string[];
  column2Data: string[];
  column3Data: string[];
}

const Table: React.FC<Props> = ({ column1Data, column2Data, column3Data }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View> 

      <View style={styles.infoRow}>
      <Text style={[styles.infoLevel]}>Level</Text>
        <Text style={styles.infoText}>  Time</Text>
        <Text style={styles.infoText}>Blinds</Text>
      </View>

    <View style={[styles.table, { width: screenWidth }]}>

      {[...Array(11)].map((_, rowIndex) => (

      <View key={rowIndex} style={styles.row}>
      <View style={styles.cell}>
        <Text style={[styles.column1Text, rowIndex === 0 && styles.column1]}>
          {column1Data[rowIndex]}
        </Text>
      </View>

          <View style={styles.cell}>
            <Text>{column2Data[rowIndex]}</Text>
          </View>

          
          <View style={styles.cell}>
            <Text>{column3Data[rowIndex]}</Text>
          </View>
        </View>

      ))}

    </View>
    </View>


  );
};

const styles = StyleSheet.create({

infoRow:{
 flexDirection: 'row',
 padding:8,
  },

  infoLevel:{
    color: '#5CE3FE',
    flex: 1,
    borderColor: 'transparent',

  },

  infoText:{
    color: 'black',
    flex: 1,
    borderColor: 'transparent',
    marginLeft:40

  },

  table: {
    marginTop: 5,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderBottomColor: 'transparent ',
  },

  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },

  cell: {
    flex: 1,
    padding: 8,
    paddingHorizontal: 25,
    paddingTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRightWidth: 0.5, 
    borderColor: 'transparent', // Set border color to transparent
  },

  column1: {
    color: '#5CE3FE',
  },

  column1Text: {
    color: '#5CE3FE',
  },



});

export default Table;
