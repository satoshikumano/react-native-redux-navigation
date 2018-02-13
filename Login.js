import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginStart, loginDone, loginError } from './Action';
import Home from './Home';

class Login extends React.Component {
  constructor(props) {
    super(props); 
  }

  async loginAsync(dispatch, username, password) {
    dispatch(loginStart());
    try {
      const user = await this.login(username, password);
      dispatch(loginDone(user.token, user.id));
      dispatch({type: "NAV_LOGIN"});
    } catch (err) {
      dispatch(loginError(err.message));
    }
  }

  async login (username, password) {
    let grant_type = 'password';
    const response = await fetch('https://api-jp.kii.com/api/apps/dc0y34o1f8vf/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Kii-Appid' : 'dc0y34o1f8vf',
          'X-Kii-Appkey' : 'bb0b232c4ec64a34a7d08256a45bee66'
        },
        body: JSON.stringify({
            grant_type,
            username,
            password
        }),
    });
    if (200 <= response.status && response.status < 300) {
      const json = await response.json();
      console.log(JSON.stringify(json));
      return {
        token: json.access_token,
        id: json.id,
      };
    } else {
      throw new Error("Failed to login: " + response.status);
    }
  }

  render() {
    const {isRunning, token, dispatch} = this.props;
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
          onPress={() => this.loginAsync(dispatch,this.state.loginName, this.state.password) }
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
