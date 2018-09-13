import React from 'react';

class Root extends React.Component {
  
  handlerMouse(e) {
    console.log(e);
  }

  render() {
    const list = [0, 1, 2, 3];

    return (
      <div>
        <ul>
          { list.map((i, index) => (
            <li
              key={ index }
              onMouseEnter={ (e) => this.handlerMouse(e) }>
              { i + 1 }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Root;