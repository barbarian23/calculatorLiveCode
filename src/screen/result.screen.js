import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const styles = StyleSheet.create({
    lineResult: {
      width: "100%",
      marginTop: 10,
      display: 'flex'
    },
    lineResultCalculator: {
      fontSize: 24,
      fontWeight: '600',
      justifyContent: 'flex-start'
    },
    LineResultRealResult: {
        fontSize: 24,
        fontWeight: '600',
        justifyContent: 'flex-end'
    }
  });

export default function ResultScreen(){

    const lineResult = (data) => {
        return (
           <>
            <View style={styles.lineResult}>
                <View style={styles.LineResultCalculator}></View>
                <View style={styles.LineResultRealResult}></View>
            </View>
           </>
        )
    }

    return(
        <>
          <View>
               <Text>ResultScreen</Text>
          </View>
        </>
    )
}