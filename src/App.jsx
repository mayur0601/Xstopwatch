import './App.css'; 
import { useEffect, useState } from 'react';
function App() { 
  let [timer,setTimer] = useState(0);
  let [isRuning,setIsRuning] = useState(false);
  useEffect(()=>{ 
    let timerId; 
    if(isRuning){
      timerId = setInterval(()=>{ 
        setTimer(prevTimer => (prevTimer+1)); 
      },1000);
    }else{ 
      clearInterval(timerId); 
    } 
    return ()=>{
      clearInterval(timerId);
      } 
  },[isRuning,timer]);
  const startStopWatch = () => { setIsRuning(true); } 
    const endStopWatch = () => { setIsRuning(false); } 
      const resetStopWatch = () => { setTimer(0); setIsRuning(false); } 
        function formattedTimer(timer){
          let minute = Math.floor(timer/60);
          let second = timer%60; 
          return `${minute}:${second<10 ? "0" : ""}${second}`; 
        }
  return ( <div className="App"> <h2>Stop watch</h2> <p>Time : {formattedTimer(timer)}</p> {!isRuning && <button onClick={startStopWatch}>Start</button>} {isRuning && <button onClick={endStopWatch}>Stop</button>} <button onClick={resetStopWatch}>Reset</button> </div> ); } export default App;