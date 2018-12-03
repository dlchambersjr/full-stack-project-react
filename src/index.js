import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

import * as serviceWorker from './serviceWorker';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
