import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="MainForm">
        <div>
          <button onClick={props.handleClickAction("C")}>C</button>
          <box className="ResultFields">
            <h>{props.inputFirst}</h>
            <h>{props.inputSecond}</h>
          </box>
        </div>
        <div>
          <button onClick={props.handleClickNumber(7)}>7</button>
          <button onClick={props.handleClickNumber(8)}>8</button>
          <button onClick={props.handleClickNumber(9)}>9</button>
          <button onClick={props.handleClickAction("+")}>+</button>
        </div>
        <div>
          <button onClick={props.handleClickNumber(4)}>4</button>
          <button onClick={props.handleClickNumber(5)}>5</button>
          <button onClick={props.handleClickNumber(6)}>6</button>
          <button onClick={props.handleClickAction('-')}>-</button>
        </div>
        <div>
          <button onClick={props.handleClickNumber(1)}>1</button>
          <button onClick={props.handleClickNumber(2)}>2</button>
          <button onClick={props.handleClickNumber(3)}>3</button>
          <button onClick={props.handleClickAction('*')}>*</button>
        </div>
        <div>
          <button onClick={props.handleClickNumber(0)}>0</button>
          <button onClick={props.handleClickAction(".")}>.</button>
          <button onClick={props.handleClickEqual}>=</button>
          <button onClick={props.handleClickAction("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
