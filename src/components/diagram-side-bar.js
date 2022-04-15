import React, { useState } from 'react';

export const DiagramSidebar = (props) => {
  let selectedMuscle = props.selected;
  return (
    <div className="muscle-side-bar">
      <div className="info-board">
        <h1>Muscle Information</h1>
        <h2 className="muscle-title-header">{selectedMuscle}</h2>
        <div className="detail-section">
          <div className="info-box">
            Muscle Group:
            <br />
            <p>This is the group of muscles the selected muscle belongs to. (chest, back etc.)</p>
          </div>
          <div className="info-box">
            Muscle Type:
            <br />
            <p>This explains if the muscle is a stabilizer muscle, mover muscle etc.</p>
          </div>
          <div className="info-box">
            Muscle Details:
            <br />
            <p>This explains the details of the muscles position, its purpose and its supported movements.</p>
          </div>
          <div className="info-box">
            Protagonist Muscles:
            <br />
            <p>These are the muscle that work with the selected muscle.</p>
          </div>
          <div className="info-box">
            Antagonist Muscles:
            <br />
            <p>These are the muscle that work against the selected muscle.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagramSidebar;