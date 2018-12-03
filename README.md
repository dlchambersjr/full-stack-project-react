## Full-Stack-Project(react)

### Author: David Chambers

### Links and Resources
* [REPO: React App](https://github.com/dlchambersjr/full-stack-project-react)
* [REPO: README.MD](https://github.com/dlchambersjr/full-stack-project-react/blob/master/README.md)
* [DEPLOYED: React App](http://dc-week7-fullstack-project.s3-website-us-west-2.amazonaws.com/)
(NOTE:  I attempted to upload with aws.yml twice with no success.)  

### Modules
#### `index.js`

###### `class Main -> renders <App/>`
entry point to the app.

#### `app.js` -> central hub for the app
##### Exported Values and Methods
Exports the results of the render() in the app class

###### `componentDidMount() -> JSON data`
Goes to a serve and retrieves content to passed into the Page component.

###### `render(array) -> jsx output`
creates out put that contains Header, Page, and Footer Components.

#### `.js` -> central hub for the app
##### Exported Values and Methods
Exports the results of the render() in the app class

###### `componentDidMount() -> JSON data`
Goes to a serve and retrieves content to passed into the Page component.

###### `render(array) -> jsx output`
creates out put that contains Header, Page, and Footer Components.

### Components
#### `header.js` -> exports props.children

#### `page.js` -> content from <Deck>
##### Exported Values and Methods
The exported value from Deck is provided via props from Page and the content data passed down from App

#### `deck.js` -> content from <Child>
The exported value from Card is provided via props from Deck and the content data passed down from Page

#### `card.js` -> content received from <Deck>
Renders the props that have been based in from Deck

#### `footer.js` -> exports props.children

### Stylesheets
Uses SASS to create css styles for the components.
* `design.scss` -> imports a reset css file, variables, and the core SASS.
* `reset.scss` -> uses Eric Meyers [reset css](https://meyerweb.com/eric/tools/css/reset/)
* `variables.scss` -> creates variables to be used in css decedants.
* `core.scss` -> defines basic css across the layout
* `header.scss` -> establishes styling for <Header>
* `deck.scss` -> establishes styling for <Deck>
* `card.scss` -> establishes styling for <Card>
* `footer.scss` -> establishes styling for <Footer>

### Running the app
* `npm start`
* or visit the [DEPLOYED version](http://dc-week7-fullstack-project.s3-website-us-west-2.amazonaws.com/)

#### UML
* [REACT UML](https://raw.githubusercontent.com/dlchambersjr/full-stack-project-server/master/uml-react.jpg)