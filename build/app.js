import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import Button from './bootstrap/button';
import Collapse from './bootstrap/collapse';

let $sidebar = $('.sidebar');

$('.js-sidebar-toggle').on('click', (e) => {
    e.preventDefault();
    $sidebar.toggleClass('sidebar--active');
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Test app....',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
