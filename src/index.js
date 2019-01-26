import React from 'react';
import ReactDOM from 'react-dom';
const tasks = ['Vue', 'Phoenix/Elixir','Unity', 'AR Kit']
const element = React.createElement('h1', null, "Hello World!");

const orderedList = React.createElement('ol', null,
  React.createElement('li', null, "Learn React."),
  React.createElement('li', null, "Learn Vue."),
  React.createElement('li', null, "Learn Phoenix."),
  React.createElement('li', null, "Learn Unity or Unreal."),
);

const mappedOrderedList = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', {key: index}, task))
);

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(orderedList, document.getElementById('ordered-list'));
ReactDOM.render(mappedOrderedList, document.getElementById('mapped-ordered-list'));
