import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`
  });
    if (count === 6) {
    alert ('No se puede sumar más')
    
  }

  return (
    <div className="Container">
      <div>
        <h1>Counter App</h1>
      </div>
      <div className="Contador ">
        <button onClick={() => setCount(count + 1)}>
        + 1
      </button>
      <input className="resultado"
          type='text'
          placeholder='0'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
    </div>
  )
}
export default App;
