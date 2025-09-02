import React from "react";
import Posts from "../../Components/Posts";
import './desfiles.css';

function Desfiles() {
return (
    <div className="desfiles-container">
        <h2 className="section-title">
          Desfiles icónicos
        </h2>
        <Posts category="desfiles" />
      </div>
  );
}

export default Desfiles;

