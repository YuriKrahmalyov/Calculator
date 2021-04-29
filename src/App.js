import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainForm">
        <div className="ContentRow">
          <button className="Button">C</button>
          <h className="ResultField">XXL</h>
        </div>
        <div className="ContentRow">
          <button className="Button">7</button>
          <button className="Button">8</button>
          <button className="Button">9</button>
          <button className="Button">+</button>
        </div>
        <div className="ContentRow">
          <button className="Button">4</button>
          <button className="Button">5</button>
          <button className="Button">6</button>
          <button className="Button">-</button>
        </div>
        <div className="ContentRow">
          <button className="Button">1</button>
          <button className="Button">2</button>
          <button className="Button">3</button>
          <button className="Button">*</button>
        </div>
        <div className="ContentRow">
          <button className="Button">0</button>
          <button className="Button">.</button>
          <button className="Button">=</button>
          <button className="Button">/</button>
        </div>

      </div>
    </div>
  );
}

export default App;
