import App from './App';
import React from 'react';


function AppFunctional() {
  //задаем переменную inputFirst со способом изменения setInputFirst, React.useState неизменно, 0 - это изначальное значение
  const [inputFirst, setInputFirst]=React.useState(0);
  const [inputSecond, setInputSecond]=React.useState(0);
  const [isFirst, setIsFirst]=React.useState(true);
  const [symbol, setSymbol]=React.useState(undefined);
  
  const handleClickNumber=(number) => () => {
    if (isFirst) {
      setInputFirst(Number(String(inputFirst)+number))
    }
    else {
      setInputSecond(Number(String(inputSecond)+number))
    }
  }

  const handleClickAction=(action) => () => {
    setIsFirst(false);
    setSymbol(action);
  }

  const handleClickEqual= (e) => {
    switch (symbol) {
      case "+":
        setInputFirst (inputFirst+inputSecond);
        break;
      case "-":
        setInputFirst (inputFirst-inputSecond);
        break;
      case "*":
        setInputFirst (inputFirst*inputSecond);
        break;
      case "/":
        setInputFirst (inputFirst/inputSecond);
        break;
      default:
        break;
    }
    setInputSecond (0);
  }

//передаем inputFirst в Арр
  return (
    <App
      inputFirst={inputFirst}
      inputSecond={inputSecond}
      handleClickAction={handleClickAction}
      handleClickNumber={handleClickNumber}
      handleClickEqual={handleClickEqual}
    />
  );
}

export default AppFunctional;