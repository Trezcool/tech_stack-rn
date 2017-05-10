import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ListItem from "./ListItem";

class LibraryList extends Component {
  constructor(props) {
    super(props);
    //noinspection JSUnusedGlobalSymbols
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(props.libraries)
    }
  }

  renderRow = (library) => {
    return <ListItem library={library} />
  };

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  }
});

const mapStateToProps = state => {
  return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList)
