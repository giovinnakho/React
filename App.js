import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { stringify } from 'qs';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true}

    setInterval(() => {
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    }, 1000);
  }
  render() {
    
    if (!this.state.isShowingText) {
      return null;
    }
    
    return (
      <View style={{backgroundColor: 'yellow'}}>
        <Text>Hello {this.props.person_name}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ' '}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.replace(/ /g, '¢')});
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    }
    return (
      //# object class & styles
      // <View style={styles.container}>
      //   <Text style={styles.bigBlue}>Open up App.js to start working on your app!</Text>
      //   <Text style={styles.red}>This one is red</Text>
      //   <Image source={pic} style={{width: 193, height: 110}} />
      //   <Greeting person_name="Maria" />
      //   <Greeting person_name="Bella" />
      //   <Greeting person_name="Orang" />
      // </View>

      //# layout
      // <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
      //   <View style={{width: 50, height: 50, backgroundColor:'powderblue'}}></View>
      //   <View style={{width: 50, height: 50, backgroundColor:'skyblue'}}></View>
      //   <View style={{width: 50, height: 50, backgroundColor:'steelblue'}}></View>
      // </View>

      //# textinput
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <TextInput style={{flex: 1, height: 40}} placeholder='Type here!' onChangeText={(text) => this.setState({text})}/> */}
        {/* <Text style={{flex: 1, padding: 10, fontSize: 42}}>{this.state.text.split(' ').map((word) => word && '£').join(' ')}</Text> */}
        <TextInput style={{flex: 1, height: 40}} placeholder='Type here!' onChangeText={this.handleChange} />
        <Text style={{flex: 1, padding: 1}}>{this.state.text}</Text>
        <Button style={{flex: 1}} onPress={() => {
          Alert.alert('You pressed the button');
        }} title="Press me"><Text>Press</Text></Button>
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
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
