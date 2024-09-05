import React, { Component } from 'react';
import './index.css';

class ContentBlock extends Component {
  render() {
    return this.props.content ? (
      <div
        className={`o-content-block ${this.props.className}`}
        dangerouslySetInnerHTML={{ __html: this.props.content || 'No HTML' }}
      />
    ) : null;
  }
}

export default ContentBlock;
