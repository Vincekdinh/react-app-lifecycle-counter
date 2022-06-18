import React from "react";
import Counter from "./components/Counter";
import CounterRef from "./components/CounterRef";
import CountUseRef from "./components/CountUseRef";
import CounterUseEff from "./components/CountUseEff";


function App() {
  return (
    <div>
      <Counter/>
      <CounterRef />
      <CountUseRef/>
      <CounterUseEff  title="CounterUseEff(props)"/>
    </div>
  );
}

export default App;
