import React from "react";
import "./feed.css";
import Post from '../Post';

class Feed extends React.Component {
  render() {
    return (
      <section className="App-main">
        <Post nickname="Kris " avatar="https://scontent.fkiv1-1.fna.fbcdn.net/v/t1.0-9/26219566_1609899769088786_2309915502285336180_n.jpg?_nc_cat=0&oh=408756361e39ff9ebddc5c8418c47748&oe=5BBFE505" caption="Just what I like!" image="https://images.unsplash.com/photo-1480444423787-9ea7b1509c54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b5d4b1832194f5e9847aaeb247622f5&auto=format&fit=crop&w=925&q=80" />
        <Post nickname="Nika " avatar="https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/glasses-wearing-girl-nerd-female-woman-avatar-512.png" caption="Scandinavia" image="https://www.dailyscandinavian.com/wp-content/uploads/2016/11/vikings-trade-byzantium.jpg" />
      </section>
    );
  }
}

export default Feed;
