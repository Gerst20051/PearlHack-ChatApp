import React, { Component } from 'react';
import { Row } from 'react-materialize';
import './ForumItem.css';

class ForumItem extends Component {
  render() {
    return (
        <Row>
          {this.props.user} {this.props.name}
        </Row>
    );
  }
}

export default ForumItem;
