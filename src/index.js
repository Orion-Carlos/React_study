import React from 'react';
import ReactDOM from 'react-dom';
import Vote from './vote'


let data = [
  { sex: '男', id: 1 },
  { sex: '女', id: 2 }
]

ReactDOM.render(
  <div>
    <Vote title='啦啦啦'>
      <span>陈</span>
      <span>胡</span>
    </Vote>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

