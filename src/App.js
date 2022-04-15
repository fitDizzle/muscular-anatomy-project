
import React, { useState } from "react";
import ColorKey from "./components/colorKey";
import Footer from "./components/footer";
import Header from "./components/header";
import ImageSelectorBox from "./components/imageSelectorBox";
import MuscleDiagram from "./components/muscleDiagram";
import DiagramSidebar from "./components/diagram-side-bar";

export const App = () => {

  const [selectedMuscle, setSelectedMuscle] = useState('');
  const handleMuscleSelect = (e) => {
    let selected = e.target.parentElement.attributes.class.nodeValue.toUpperCase();
    setSelectedMuscle(selected);
  };

  return (
    <div className="App">
      <Header />

      <div className="key-container">
        <ColorKey />
        <ImageSelectorBox />
      </div>

      <div className="diagram-container">
        <MuscleDiagram handleMuscleSelect={handleMuscleSelect} />
        <DiagramSidebar selected={selectedMuscle} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
