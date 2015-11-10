import React from 'react';
import SimpleCounter from './SimpleCounter';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world!</p>
        <SimpleCounter />
      </div>
    );
  }
}
