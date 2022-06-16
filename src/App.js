import React from "react";
import Counter from "./components/Counter";
import CounterRef from "./components/CounterRef";

function App() {
  return (
    <div>
      <Counter title="MyCounter"/>
      <CounterRef />
    </div>
  );
}

export default App;
