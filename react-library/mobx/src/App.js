import { makeAutoObservable } from "mobx";
import TimerView from "./components/Timer";
import { observer } from "mobx-react";

// Model the application state.
class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    console.log(123);
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

// Update the 'Seconds passed: X' text every second.
setInterval(() => {
  myTimer.increase();
}, 1000);

let num = makeAutoObservable({ number: 1 });

const Div = observer(({ timer, num }) => {
  console.log("num", num.number);

  return (
    <>
      <div>{timer.secondsPassed}</div>
      <button onClick={() => ++num.number}>{num.number}</button>
    </>
  );
});

function App() {
  return (
    <>
      <TimerView timer={myTimer} />
      <Div timer={myTimer} num={num} />
    </>
  );
}

export default App;
