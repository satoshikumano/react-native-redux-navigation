import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const {dispatch} = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Logout"
          onPress={() => dispatch({type:"NAV_LOGOUT"})}
        />
      </View>
    );
  }
}

export default connect()(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

