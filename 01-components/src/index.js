import React from 'react'; // , { Fragment }
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const element1 = React.createElement('h2', 'Hello World!');
// console.log('Element1', element1);

// const Element2 = () => <div>MY DIV</div>;

// class App1 extends React.Component {
//   render() {
//     return <Fragment>Fragment</Fragment>;
//   }
// }

// const title='Hello REACT'

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(
//   <React.StrictMode>
//     {/* <App1 />
//     <Element2 /> */}
//     <App title='Hello REACT' />
//     {/* <App title={title} /> */}
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
