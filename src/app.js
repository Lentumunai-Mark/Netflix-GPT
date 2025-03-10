import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";

const App = () => {
    return (
        < Body/>
    );
}


//why do we render using reactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);