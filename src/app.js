import React from "react";
import ReactDOM from "react-dom/client";

function App(){
    return (
        <div className="text-3xl font-bold text-green-800">
            hello world
        </div>
    );
}


//why do we render using reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);