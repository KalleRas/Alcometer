import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' 

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [gender, setGender] = useState("male")
  const [time, setTime] = useState(1)
  const [result, setResult] = useState(0)

  function calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33
    const grams = litres * 8 * 4.5
    const burning = weight / 10
    const gramsLeft = grams - (burning * time)
    let result = 0

    if (gender === "male") {
      result = gramsLeft / (weight * 0.7)
    }
    
    else {
      result = gramsLeft / (weight * 0.6)
    }

    if (result < 0) {
      result = 0
    }


    setResult(result.toFixed(1))

  }

  return (
    <form onSubmit={calculate}>
    <h1>Calculating alcohol blood levels</h1>
    <div>
      <label>Weight</label>
      <input type="number" name="Weight" id="" step="1"  
      onChange={e => setWeight(e.target.value)}/>
    </div>

    <div>
      <label>Bottles</label>
      <select type="number" name="Bottles" id="" step="1" 
      onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>

    <div>
      <label>Time</label>
      <select type="number" name="Time" step="1"
      onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </div>

    <div>
      <label>Gender</label>
      <input type="radio" name="Gender" id="male" value="male" 
      onChange={e => setGender("male")} defaultChecked />
      <label>Male</label>
      <input type="radio" name="Gender" id="female" 
      onChange={e => setGender("female")}/>
      <label>Female</label>
    </div>
    
    <output>{result}</output>
    <button type='submit'>Calculate</button>
    </form>
  );
}

export default App;