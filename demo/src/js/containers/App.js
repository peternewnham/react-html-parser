import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Content from '../components/Content';

import 'sass/app';

import { updateHtml } from '../actions';

class App extends React.Component {
  render() {
    const { dispatch, html } = this.props;
    return (
      <div id="app">
        <Header />
        <Content onUpdateClick={ html => dispatch(updateHtml(html)) } html={ html } />
      </div>
    );
  }
}

function select(state) {
  return {
    html: state.html
  };
}

export default connect(select)(App);
