import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return <h4>Select a user!</h4>
    }
    return (
      <div>
        <h3>{this.props.user.first} {this.props.user.last}</h3>
        <h4>Age: {this.props.user.age}</h4>
        <h4>About: {this.props.user.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail);
