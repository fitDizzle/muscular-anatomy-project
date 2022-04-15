import React from "react";

const ImageSelectorBox = () => {
  return (
    <div class="imageoptionselectorbox">
      <div className="front-muscle">
        <img
          class="selectorimage"
          src="./img/muscular-front.png"
          alt="malemusclefront"
        />
      </div>
      <div className="front-muscle">
        <img
          class="selectorimage"
          src="./img/muscular-back.png"
          alt="malemuscleback"
        />
      </div>
      <section id="bodyInfo" class="p-3 bg-light" />
      <section id="bodySelector" />
    </div>
  );
};

export default ImageSelectorBox;
