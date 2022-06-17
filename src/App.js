import React from "react";
import Counter from "./components/Counter";
import CounterRef from "./components/CounterRef";
import CounterUseEff from "./components/CountUseEff";

function App() {
  return (
    <div>
      <Counter/>
      <CounterRef />
      <CounterUseEff  title="CounterUseEff(props)"/>
    </div>
  );
}

export default App;
