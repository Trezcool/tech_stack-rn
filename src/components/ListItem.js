import React, { Component } from 'react';
import { LayoutAnimation, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions'

class ListItem extends Component {
  //noinspection JSMethodCanBeStatic
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription = () => {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      )
    }
  };

  render() {
    const { library, selectLibrary } = this.props;

    return (
    <TouchableWithoutFeedback onPress={() => selectLibrary(library.id)}>
      <View>
        <CardSection>
          <Text style={styles.title}>{library.title}</Text>
        </CardSection>
        {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
});

const mapStateToProps = (state, ownProps) => {
  return {expanded: state.selectedLibraryId === ownProps.library.id}
};

export default connect(mapStateToProps, actions)(ListItem)
