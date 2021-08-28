import React from "react";

export default function Embed(props) {
  const isVid = props.preview.includes("mp4");
  return (
    <div className="mx-auto">
      {isVid && (
        <video
          id="post-embed"
          autoPlay
          loop
          src={props.preview}
          title="Post Preview"
        />
      )}
      {!isVid && (
        <iframe
          id="post-embed"
          autoPlay
          loop
          src={props.preview}
          title="Post Preview"
        />
      )}
    </div>
  );
}
