import React from 'react';

class App extends React.Component {
  state = {
    listActive: ""
  }
  
  handleMouse = (e, item) => {
    e.preventDefault();
    
    this.setState({
      listActive: item
    });
  }

  render() {
    const list = ["React 16", "Webpack 4", "ESLint", "Sass", "Autoprefixer", "Babel^7"];

    return (
      <div className="contain">
        <h2>The Minimal React Webpack Setup</h2>
        <p>Features</p>
        <ul>
          { list.map((i, index) => (
            <li
              key={ index }
              className={ this.state.listActive === i ? "active" : "" }
              onMouseLeave={ (e) => this.handleMouse(e, "") }
              onMouseEnter={ (e) => this.handleMouse(e, i) }>
              { i }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default App;