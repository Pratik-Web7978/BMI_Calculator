import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight <= 0 || feet < 0 || inches < 0) {
      alert('Please enter valid weight and height values:');
    } else {
      // Convert height to inches
      let totalHeightInInches = (parseInt(feet) * 12) + parseInt(inches);
      let bmiCalc = (weight / (totalHeightInInches * totalHeightInInches)) * 703;
      setBmi(bmiCalc.toFixed(1));

      // Determine message
      if (bmiCalc < 18.5) {
        setMessage('You are underweight!');
      } else if (bmiCalc >= 18.5 && bmiCalc < 25) {
        setMessage('You are a healthy weight!');
      } else {
        setMessage('You are overweight!');
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
            />
          </div>

          <div>
            <label>Height</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="number"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
                placeholder="Feet"
              />
              <input
                type="number"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
                placeholder="Inches"
              />
            </div>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        {bmi && (
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
