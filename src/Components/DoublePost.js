import React, { useState } from "react";
import Embed from "./Embed.js";
import Guess from "./Guess.js";
import Answer from "./Answer.js";
import { posts } from "../posts.js";

export default function DoublePost() {
  const [posts, setPosts] = useState(pickPosts());
  const [guess, setGuess] = useState(null);

  const shuffle = () => {
    setPosts(pickPosts());
    setGuess(null);
  };

  return (
    <div className="App">
      <h2 className="header">#1: {posts[0].title}</h2>
      <div className="row text-center px-5 py-4">
        <div className="col-sm-12">
          <Embed preview={posts[0].preview} />
        </div>
      </div>

      <h2 className="header" id="header-2">
        #2: {posts[1].title}
      </h2>
      <div className="row text-center px-5 py-4">
        <div className="col-sm-12">
          <Embed preview={posts[1].preview} />
        </div>
      </div>

      {guess === null && (
        <Guess multipost={true} posts={posts} setGuess={setGuess} />
      )}
      {(guess === true || guess === false) && (
        <Answer multipost={true} posts={posts} guess={guess} />
      )}
      <button className="next-post mt-3 mb-4" onClick={() => shuffle()}>
        New Posts
      </button>
    </div>
  );
}

const pickPosts = () => {
  let rand1, rand2;
  rand1 = Math.floor(Math.random() * posts.length);
  do {
    rand2 = Math.floor(Math.random() * posts.length);
  } while (rand2 === rand1);

  const newPosts = [posts[rand1], posts[rand2]];
  return newPosts;
};
