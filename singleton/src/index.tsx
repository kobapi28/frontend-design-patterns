import React from "react";
import ReactDOM from "react-dom";


const App: React.VFC = () => {
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));