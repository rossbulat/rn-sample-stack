import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';

export class Home extends React.Component<any, any> {
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Press "Get Samples" to load a sandom sample into the navigator.
          </Text>
          <Button
            onPress={() => {
              this.props.navigation.push('Loading');
            }}
            title="Get Samples"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;