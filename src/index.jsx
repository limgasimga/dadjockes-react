import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';

import Joke from "./Joke";
import {jokes} from "./jokes.js"


const App = () => {
const [upLikes, setUpLikes] = useState(0)
const [downLikes, setDownLikes] = useState(0)

return (
  <div className="container">
      
      {
          jokes.map(joke => <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
            /> )
        }

    </div>
)
};

render(<App />, document.querySelector('#app'));
