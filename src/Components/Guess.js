import React from "react";

export default function Guess(props) {
  let num, compNum;
  if (!props.multipost) [num, compNum] = getUpvoteNum(props.upvotes);

  const handleGuess = (guess, upvotes) => {
    if (upvotes.length > 3) upvotes = upvotes.slice(0, -1) * 1000;

    if (guess === "over" && upvotes > compNum) props.setGuess(true);
    else if (guess === "under" && upvotes < compNum) props.setGuess(true);
    else props.setGuess(false);
  };

  const multiGuess = (guess, posts) => {
    let up1, up2;
    up1 = posts[0].upvotes;
    up2 = posts[1].upvotes;
    if (up1.length > 3) up1 = up1.slice(0, -1) * 1000;
    if (up2.length > 3) up2 = up2.slice(0, -1) * 1000;

    if (guess === "one" && up1 > up2) {
      props.setGuess(true);
    } else if (guess === "two" && up2 > up1) {
      props.setGuess(true);
    } else {
      props.setGuess(false);
    }
  };

  if (props.multipost) {
    return (
      <div className="row">
        <div className="col">
          <p>Which post got more upvotes?</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-danger multiguess-padding"
              onClick={() => multiGuess("one", props.posts)}
            >
              {"  #1  "}
            </button>
            <button
              type="button"
              className="btn btn-success multiguess-padding"
              onClick={() => multiGuess("two", props.posts)}
            >
              {"  #2  "}
            </button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="row">
        <div className="col">
          <p>How many upvotes did this post get?</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleGuess("under", props.upvotes)}
            >
              Under {num}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleGuess("over", props.upvotes)}
            >
              Over {num}
            </button>
          </div>
        </div>
      </div>
    );
}

const getUpvoteNum = (upvotes) => {
  const skew = [0.1, 0.25, 0.5, 0.75, 0.9];
  const rand = Math.floor(Math.random() * skew.length);
  const plusMinus = Math.round(Math.random());
  if (upvotes.length > 3) upvotes = upvotes.slice(0, -1) * 1000;

  let num, compNum;
  if (plusMinus) {
    num = Math.round(upvotes + skew[rand] * upvotes);
    compNum = num;
    if (num.toString().length > 3) num = (num / 1000).toFixed(1) + "k";
  } else {
    num = Math.round(upvotes - skew[rand] * upvotes);
    compNum = num;
    if (num.toString().length > 3) num = (num / 1000).toFixed(1) + "k";
  }
  return [num, compNum];
};
