import React, { useState } from 'react';


function App(){
  const [result, setResult] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [wCondition, setWCondition] = useState('');

  function handleClick() {
    const bmi = weight / (height ** 2);
    setResult(bmi);
    if(bmi <= 24.9 && bmi >= 18.5){
      setWCondition('Healthy Weight');
    }else if(bmi <= 29.9 && bmi >= 25){
      setWCondition('Overweight');
    }else if(bmi >= 30){
      setWCondition('Obese');
    }else{
      setWCondition('Underweight');
    }
  }
  return(
    <div id="main">
      <div id="container">
        <h2 id="main-heading" class="">Body Mass Index (BMI) Calculator</h2>
        <div class="input-group">
          <div id="prepend" class="input-group-prepend">
            <span class="input-group-text">Your Height (m) :</span>
          </div>
          <input type="number" class="form-control" onChange={e => setHeight(e.target.value)} />
        </div>
        <div class="input-group"> 
          <div id="prepend" class="input-group-prepend">
            <span class="input-group-text">Your Weight (kg) :</span>
          </div>
          <input type="number" class="form-control" onChange={e => setWeight(e.target.value)}/>
        </div>
        <button class="btn" onClick={handleClick}>Compute BMI</button>
        <input id="answer" class="input-group form-control" value={result}/>
        <p>Weight Condition: {wCondition}</p> 
      </div>
    </div>
  );
}

export default App;