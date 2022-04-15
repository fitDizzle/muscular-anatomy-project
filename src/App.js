
import React from "react";
import ColorKey from "./components/colorKey";
import Footer from "./components/footer";
import Header from "./components/header";
import ImageSelectorBox from "./components/imageSelectorBox";
import MuscleDiagram from "./components/muscleDiagram";
import DiagramSidebar from "./components/diagram-side-bar";

export const App = () => {

  return (
    <div className="App">
      <Header />

      <div className="key-container">
        <ColorKey />
        <ImageSelectorBox />
      </div>

        <div className="diagram-container">
          <MuscleDiagram />
          <DiagramSidebar />
      </div>

      <Footer />
    </div>
  );
};

export default App;
