import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="App-main">
          <Post nickname="Kris" avatar="https://scontent.fkiv1-1.fna.fbcdn.net/v/t1.0-9/26219566_1609899769088786_2309915502285336180_n.jpg?_nc_cat=0&oh=408756361e39ff9ebddc5c8418c47748&oe=5BBFE505" caption="Just what I like!" image="https://images.unsplash.com/photo-1480444423787-9ea7b1509c54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b5d4b1832194f5e9847aaeb247622f5&auto=format&fit=crop&w=925&q=80"/>
            {/* more posts */}
          </section>
        </div>
    );
  }
}

export default App;
