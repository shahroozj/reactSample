import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={['Item 1', 'Item 2']} />, document.getElementById('app'));