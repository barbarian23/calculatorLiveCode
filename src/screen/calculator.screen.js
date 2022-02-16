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
    body:{
        display: 'flex'
    },
    header: {
        height:25,
    },
    sectionCurrentResult: {
      flexGrow: 1
    },
    sectionNumber: {
      display: 'flex',
      height: 80
    },
    numberStyle: {
        height: 20, 
        width: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14
    },
    belowNumber: {
        display: 'flex'
    },
    belowNumberRight: {
        justifyContent: 'flex-start'
    },
    belowNumberLeft: {
        display: 'flex'
    },
  });

export default function CalculatorScreen(){

    const arrayNumberUpper = [ 
       ["C", "%", ":", "X"],
       ["7", "8", "9", "-"],
       ["4", "5", "6", "+"]
    ];

    const arrayNumberBelow = [ 
        ["1", "2", "3"],
        ["x", "0", "."],
     ];

    const numberView = (data) => {
        return (
            <View style={styles.numberStyle}>
                <Text>{data}</Text>
            </View>
        )
    }

    return(
        <View style={styles.body}>
          <View style={styles.header}>
               <Text>Calculator</Text>
          </View>
          <View style={styles.sectionCurrentResult}>
               <Text>Show Current Result</Text>
          </View>
          <View style={styles.sectionNumber}>
               {
                   arrayNumberUpper[0].map(item => {
                        return numberView(item);
                   })
               }
          </View>

          <View style={styles.sectionNumber}>
               {
                   arrayNumberUpper[1].map(item => {
                        return numberView(item);
                   })
               }
          </View>

          <View style={styles.sectionNumber}>
               {
                   arrayNumberUpper[2].map(item => {
                        return numberView(item);
                   })
               }
          </View>

        
        <View>
            <View></View>
            <View>

            </View>
        </View>

        </View>
    )
}