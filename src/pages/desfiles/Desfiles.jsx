import React from "react";
import Posts from "../../Components/Posts";

function Modelos() {
return (
    <div className="max-w-6xl mx-auto px-6 py-16 font-serif text-gray-900">
    <h2 className="text-3xl font-light mb-10 uppercase tracking-widest text-center border-b border-gray-300 pb-4 text-gray-800">
        Desfiles icónicos
    </h2>
    <Posts category="desfiles" />
    </div>
);
}

export default Modelos;

