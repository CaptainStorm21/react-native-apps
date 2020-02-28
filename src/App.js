import React, { Component } from "react";
import { Button, TextInput, StyleSheet, Text, View } from "react-native";
import { Alert } from "react-native";
import Photo from './components/Photo';

class App extends Component {
  state = {
    text: ""
  };

  OnButtonPress() {
    const { text } = this.state;
    Alert.alert(`you entered ${text} in the box`);
    alert(`you entered ${text} in the box`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to react native</Text>
        <TextInput
          style={{
            height: 40,
            width: 200,
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            marginBottom: 5
          }}
          onChangeText={text => this.setState({ text })}
          placeholder="enter text here"
          autoCapitalize={"none"}
        />
        <Button title="Click Me!" onPress={this.OnButtonPress.bind(this)} />
        <Photo/>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
