import './pages/r/RegistrationForm.css';
import React from 'react';
import Light from './assets/light-bulb.jpg';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
      <img src={Light} alt='light bulb' />{/*make the imported image appear*/}
      <InformationNote />
      <div className='registration'>
        <form>
          <div>
            <label htmlFor='password'>Enter your password:</label>
            <br />
            <input type='password' name='password' id='password' />
          </div>
          <Link to='./pages/about/About'>Know more...</Link>{/*link to that page*/}
          <br />
          <button type='submit'>Login</button>
        </form>
      </div>
      <p>Didn't register for quizwiz</p>
      <Link to='./pages/r/RegistrationForm'>Register Now</Link>{/*link to that page*/}
      <img src={Light} alt='light bulb 2' />{/*make the imported image appear*/}
    </>
  )
}

export default App;