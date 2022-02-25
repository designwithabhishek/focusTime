import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text,View } from 'react-native';

import {RoundedButton} from "../../components/RoundedButton"

import { colors } from '../../utils/colors';
import { sizes, spacing } from '../../utils/sizes';

const HistoryItem = ({ item, index }) => {
  console.log(item);
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <SafeAreaView style={styles.container}>
      {!!focusHistory.length && (
        <>
      <Text style={styles.title}>Things we've focussed on</Text>
        <FlatList
          style={{ flex: 1 }}
          data={focusHistory}
          contentContainerStyle={{ flex: 1, alignItems: 'center' }}
          renderItem={HistoryItem}
        />
        <View style={styles.clearContainer}>
        <RoundedButton title="Clear" onPress={clearHistory} />
        </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: sizes.md,
  }),
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: sizes.lg,
  },
  clearContainer:{
    alignItems:'center',
    padding:spacing.md
  }
});
