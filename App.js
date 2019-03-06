import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Greeting person_name='Maria' />
        <Greeting person_name='Bella' />
        <Greeting person_name='Orang' />
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
