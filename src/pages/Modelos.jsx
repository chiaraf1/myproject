import React from "react";
import Posts from "../Components/Posts";

function Modelos() {
return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-center">
    <h1 className="text-3xl font-bold mb-10 uppercase tracking-wider text-center border-b pb-4">
        Modelos iconicas
    </h1>
    <Posts category="modelos" />
    </div>
);
}

export default Modelos;
