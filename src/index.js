/**
 * Created by xinzhang on 6/27/17.
 */

import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './AppRouter';

ReactDom.render(
  <AppRouter/>,
  document.getElementById('root')
);


function loadPage() {
  addDeleteButtonToTodoList();
  addCheckedSymbolToTodoList();
}

function addTodo() {
  const inputValue = document.getElementById('inputValue').value;
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(inputValue));

  document.getElementById('todoList').appendChild(li);
  document.getElementById('inputValue').value = '';

  addDeleteButton(li);
}

function addDeleteButton(node) {
  const span = document.createElement('span');
  const txt = document.createTextNode(' \u00D7');
  span.appendChild(txt);
  span.onclick = function () {
    this.parentElement.style.display = 'none';
  };
  node.appendChild(span);
}

function addDeleteButtonToTodoList() {
  const nodeList = document.getElementsByTagName('LI');
  for (var i=0; i < nodeList.length; i ++) {
    addDeleteButton(nodeList[i]);
  }
}

function addCheckedSymbolToTodoList() {
  const list = document.querySelector('ul');
  list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      e.target.style.textDecoration = e.target.style.textDecoration === 'none' ? 'line-through' : 'none';
    }
  })
}
