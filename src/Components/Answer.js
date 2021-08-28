import React from "react";

export default function Answer(props) {
  if (props.multipost) {
    return (
      <>
        {props.guess && (
          <p className="text-success correct">
            You're right!{" "}
            <u>
              <a
                className="text-success"
                href={props.posts[0].link}
                target="_blank"
              >
                The first post
              </a>
            </u>{" "}
            had {props.posts[0].upvotes} upvotes.
            <u>
              <a
                className="text-success"
                href={props.posts[1].link}
                target="_blank"
              >
                The second post
              </a>
            </u>{" "}
            had {props.posts[1].upvotes} upvotes.
          </p>
        )}
        {!props.guess && (
          <p className="text-danger incorrect">
            Nope...{" "}
            <u>
              <a
                className="text-danger"
                href={props.posts[0].link}
                target="_blank"
              >
                The first post
              </a>
            </u>{" "}
            had {props.posts[0].upvotes} upvotes.
            <u>
              <a
                className="text-danger"
                href={props.posts[1].link}
                target="_blank"
              >
                The second post
              </a>
            </u>{" "}
            had {props.posts[1].upvotes} upvotes.
          </p>
        )}
      </>
    );
  } else
    return (
      <>
        {props.guess && (
          <p className="text-success correct">
            You're right!{" "}
            <u>
              <a className="text-success" href={props.link} target="_blank">
                The post
              </a>
            </u>{" "}
            had {props.upvotes} upvotes.
          </p>
        )}
        {!props.guess && (
          <p className="text-danger incorrect">
            Nope...{" "}
            <u>
              <a href={props.link} className="text-danger" target="_blank">
                The post
              </a>
            </u>{" "}
            had {props.upvotes} upvotes.
          </p>
        )}
      </>
    );
}
