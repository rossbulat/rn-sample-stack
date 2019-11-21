import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { storeSamplesData } from '../actions';
import { SafeAreaView } from 'react-native';
import data from './data.json';

export class LoadingPresentational extends React.Component<any, any> {

  constructor (props) {
    super(props);
    console.log('mounting...');

    try {
      // store session data in redux
      this.props.storeSamplesData(data);

      // go to session
      this.props.navigation.navigate('Stage', {
        currentStage: 1
      });

    } catch (e) {
      this.props.navigation.navigate('Home')
    }

    /* fetch request to get sample data
    
    fetch('/api/to/sampledata', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
  
        // store session data in redux
        props.storeSamplesData(data);
  
        // go to session
        props.navigation.navigate('Stage', {
          currentStage: 1
        });
      })
      .catch(e => {
        props.navigation.navigate('Home')
      });
    */
  }

  render () {
    console.log('render...');

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView >
    );
  }
}

const mapDispatchToProps = {
  storeSamplesData
};

export const Loading = connect(
  null,
  mapDispatchToProps
)(LoadingPresentational);

export default Loading;