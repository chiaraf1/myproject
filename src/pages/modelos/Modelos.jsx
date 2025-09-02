import React from "react";
import Posts from "../../Components/Posts";
import './modelos.css';
function Modelos() {
return (
    <div className="modelos-container">
    <h2 className="section-title">
    Modelos icónicas
    </h2>
    <Posts category="modelos" />
</div>
);
}

export default Modelos;
