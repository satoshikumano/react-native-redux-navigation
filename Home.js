import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    const {id, dispatch} = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>User ID: {id}</Text>
        <Button
          title="Logout"
          onPress={() => dispatch({type:"NAV_LOGOUT"})}
        />
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    id: state.loginState.id,
  }
}
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

