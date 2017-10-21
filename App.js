import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    var user = {
      mood: ["sad", "bad"]
    }

    var moods = ["test", "bad"]

    var message;

    if (user.mood[1] === "bad") {
      message = (<Text style={styles.red}>happy</Text>);
    } else {
      message = <Text style={styles.red}>Not happy</Text>;
    }

    return (
      <View style={styles.container}>
{message}

        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

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
  red: {
    color: "red"
  }
});
