import React from 'react';
import superagent from 'superagent';

import './stylesheets/design.scss';

import Header from './components/header/header.js';
import Page from './components/page/page.js';
import Footer from './components/footer/footer.js';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverURL: 'https://full-stack-back-end.herokuapp.com/content',
      content: [],
    };
  }



  render() {
    return (
      <React.Fragment>
        <Header>
          <div>
            <h1>Hello World - Header</h1>
          </div>
        </Header>
        <Page content={this.state.content} />
        <Footer>
          <div>
            <h5>Hello World - footer</h5>
          </div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default app;
