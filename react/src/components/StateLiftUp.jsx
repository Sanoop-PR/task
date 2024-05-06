import React, { useState } from 'react';

function StateLiftUp() {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [total, settotal] = useState(0);



function add() {
    settotal(Number(first)+Number(second))
    console.log(first,second,total)
}

  return (
    <div>
      <h1>5. State Lift-Up</h1>
      <InputA value={first} setfirst={setfirst} />
      <InputB value={second} setsecond={setsecond} />
      <h3>{total}</h3>
      <SubmitButton submit={add}/>
    </div>
  );
}

function InputA(props) {
  return (
    <div>
      <label>Input A:</label>
      <input value={props.first} type="number" onChange={(e)=>props.setfirst(e.target.value)} />
    </div>
  );
}

function InputB(props) {
  return (
    <div>
      <label>Input B:</label>
      <input value={props.second} type="number" onChange={(e)=>props.setsecond(e.target.value)} />
    </div>
  );
}

function SubmitButton(props) {
    return(
        <button onClick={props.submit}>add</button>
    )
}

export default StateLiftUp;