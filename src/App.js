import './App.css';
import React , {useState} from 'react'


function App() {
  const [interest, setInterest] = useState('');
  const [principle, setPrinciple] = useState('');
  const [rate , setRate] = useState('');
  const [time , setTime] = useState('');

  const calc = () => {
    
    const principleNum = parseFloat(principle);
    const rateNum = parseFloat(rate);
    const timeNum = parseFloat(time);
  
    
    if (isNaN(principleNum) || isNaN(rateNum) || isNaN(timeNum) || principleNum <= 0 || rateNum <= 0 || timeNum <= 0) {
      alert("Enter Valid Values!");
    } else {
      const Int = (principleNum * rateNum * timeNum) / 100;
      setInterest(Int);
    }
  }

 const reload = () =>{
  window.location.reload();
 }
  return (
    <div className="App">
      <div className="container">

        <h2 className='h2'>Simple Interest Calculator</h2>
        <span>Calculate Your simple Interest Easily</span>

        <div className="box">
          <h2>₹{interest}</h2>
          <span>Total Simple Interest</span>
        </div>

        <input type="text" value={principle} Placeholder="₹ Principle Amount" onChange={(e) => setPrinciple(e.target.value)} /> <br />

        <input type="text"  value={rate} Placeholder='Rate Of Interest (p.a)%' onChange={(e) => setRate(e.target.value)}  /> <br />
        <input type="text" value={time} Placeholder='Time Period' onChange={(e) => setTime(e.target.value)}  />
        
        <div className="button">
          <button className="btn" onClick={calc}>Calculate</button>
          <button className="btn" onClick={reload}>Reset</button>
        </div>

      </div>
    </div>
  );
}

export default App;
