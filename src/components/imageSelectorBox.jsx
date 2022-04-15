import React from "react";

const ImageSelectorBox = () => {
  return (
    <div className="imageoptionselectorbox">
      <div className="front-muscle">
        <img
          className="selectorimage"
          src="./img/muscular-front.png"
          alt="malemusclefront"
        />
      </div>
      <div className="front-muscle">
        <img
          className="selectorimage"
          src="./img/muscular-back.png"
          alt="malemuscleback"
        />
      </div>
      <section id="bodyInfo" />
      <section id="bodySelector" />
    </div>
  );
};

export default ImageSelectorBox;
