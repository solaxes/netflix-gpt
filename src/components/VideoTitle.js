import React from "react";

const VideoTitle = (props) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{props.title}</h1>
      <p className="text-lg mt-6 w-1/3">{props.overview}</p>
      <div className="mt-4">
        <button className="bg-white text-black px-10 py-3 text-2xl rounded-md hover:opacity-50 transition-all duration-500">
          ▶️ Play
        </button>
        <button className="bg-gray-500 bg-opacity-20 px-10 py-3 mx-2 text-2xl rounded-md text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
