import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginStart, loginDone } from './Action';
import Home from './Home';

class Login extends React.Component {
  constructor(props) {
    super(props); 
  }

  loginAsync(dispatch) {
    dispatch(loginStart());
    // Dummy.
    setTimeout(() => {
      dispatch(loginDone('token'));
    }, 2000);
  }

  render() {
    const {isRunning, token, dispatch} = this.props;
    if (token) {
      return <Home/>
    }
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          hidesWhenStopped={true}
          animating={isRunning}
        />
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
          onPress={() => this.loginAsync(dispatch) }
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

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    isRunning: state.loginState.isRunning,
    token: state.loginState.token,
  }
}

export default connect(mapStateToProps)(Login);
