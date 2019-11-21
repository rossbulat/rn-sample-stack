import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './styles';
import { incrementCurrentStage } from '../actions';

export class StagePresentational extends React.Component<any, any> {

  componentWillUpdate () {
    this.props.incrementCurrentStage(
      this.props.navigation.getParam('currentStage', this.props.session.currentStage)
    );
  }

  render () {

    const { samples } = this.props;
    const currentStage = this.props.navigation.getParam('currentStage', samples.currentStage);

    const sample = samples.docs[currentStage - 1];

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Sample {sample.test} of {samples.docs.length}</Text>
        </ScrollView>

        <View style={styles.footer}>
          {currentStage !== samples.docs.length &&
            <Button
              onPress={() => {
                this.props.navigation.push('Stage', {
                  currentStage: (currentStage + 1)
                });
              }}
              title="Next"
            />
          }
          {currentStage === samples.docs.length &&
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Finish"
            />
          }
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  samples: state.samples
});

const mapDispatchToProps = {
  incrementCurrentStage
};

export const Stage = connect(
  mapStateToProps,
  mapDispatchToProps
)(StagePresentational);

export default Stage;