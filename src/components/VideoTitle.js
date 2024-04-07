import React from "react";

const VideoTitle = (props) => {
  return (
    <div className="pt-56 px-12">
      <h1 className="text-6xl font-bold">{props.title}</h1>
      <p className="text-lg mt-6 w-1/3">{props.overview}</p>
      <div className="mt-4">
        <button className="bg-black text-white px-10 py-3 text-2xl rounded-md">
          ▶️ Play
        </button>
        <button className="bg-black bg-opacity-20 px-10 py-3 mx-2 text-2xl rounded-md text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
