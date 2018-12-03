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

  componentDidMount() {
    superagent('get', this.state.serverURL)
      .then(results => {
        let content = (results.body);
        this.setState({ content });
      }).catch(error => console.error(error));
  }

  render() {
    return (
      <React.Fragment>
        <Header>
          <header>
            <h1>My China Trip - December 2016</h1>
          </header>
        </Header>
        <Page content={this.state.content} />
        <Footer>
          <div className='footer'>
            <h5>&copy; 2018 - David Chambers</h5>
          </div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default app;
