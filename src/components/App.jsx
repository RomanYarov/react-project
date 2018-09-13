import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listActive: ""
    };
  }
  
  handleMouse(e, item: string) {
    e.preventDefault();
    
    this.setState({
      listActive: item
    });
  }

  render() {
    const list = ["React 16", "Webpack 4", "ESLint", "Sass", "Autoprefixer"];

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