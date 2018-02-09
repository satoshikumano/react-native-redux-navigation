import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(loginName) => this.setState({loginName})}
        />
        <Text>Password</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          onPress={() => this.props.navigation.replace("HOME") }
          title="Login"
        />
      </View>
    )
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

