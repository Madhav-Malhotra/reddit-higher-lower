import React, { useState } from "react";
import Embed from "./Embed.js";
import Guess from "./Guess.js";
import Answer from "./Answer.js";
import { posts } from "../posts.js";

export default function SinglePost() {
  let rand = Math.floor(Math.random() * posts.length);
  const [post, setPost] = useState(posts[rand]);
  const [guess, setGuess] = useState(null);

  const newPost = () => {
    rand = Math.floor(Math.random() * posts.length);
    setPost(posts[rand]);
    setGuess(null);
  };

  return (
    <div className="App">
      <h2 className="header">{post.title}</h2>
      <div className="row text-center px-5 py-4">
        <div className="col-sm-12">
          <Embed preview={post.preview} />
        </div>
      </div>
      {guess === null && (
        <Guess upvotes={post.upvotes} link={post.link} setGuess={setGuess} />
      )}
      {(guess === true || guess === false) && (
        <Answer guess={guess} upvotes={post.upvotes} link={post.link} />
      )}
      <button className="next-post mt-3 mb-4" onClick={newPost}>
        New Post
      </button>
    </div>
  );
}
