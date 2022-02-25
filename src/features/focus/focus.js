import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButton';
import {sizes,spacing} from '../../utils/sizes'  
import {colors} from '../../utils/colors'

export const Focus = ({addSubject}) => {
  const [subject,setSubject]=useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onSubmitEditing={({nativeEvent})=>{setSubject(nativeEvent.text)}}/>
          <RoundedButton size={50} title="+" onPress={()=>addSubject(subject)}  />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.md,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: sizes.lg,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop:spacing.md,
  },
  input: {
    flex: 1,
    marginRight: spacing.md,
  },
});
