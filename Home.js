import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Logout"
          onPress={() => this.props.navigation.replace("LOGIN")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

