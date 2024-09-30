import React from 'react';

const Video = ({ src }) => {
  return (
    <div>
      <video width="600" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;