import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { selectUser } from '../actions/index';
import { connect } from 'react-redux';

class UserList extends Component {

  createListItem(){
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        {this.createListItem()}
      </ul>
    );
  }
}

function mapStateToProps(store) {
  return ({
    users: store.users
  })
}

function matchDispatchToProps(dispatch) {
  return(bindActionCreators({ selectUser: selectUser }, dispatch))
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
