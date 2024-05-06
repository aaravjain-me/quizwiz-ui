import './pages/r/RegistrationForm.css';
import React from 'react';
import Light from './assets/light-bulb.jpg';
import { Link } from 'react-router-dom';
import InformationNote from './components/InformationNote';


function App() {
  return (
    <>
      <img src={Light} alt='light bulb' />{/*make the imported image appear*/}
      <InformationNote />
      <div className='registration'>
        <form>
          <div>
            <label htmlFor='passwords'>Enter your password:</label>
            <br />
            <input type='password' name='passwords' id='passwords' />
          </div>
          <Link to='./pages/about/About'>Know more...</Link>{/*link to that page*/}
          <br />
          <button type='submit'>Login</button>
        </form>
        <p>Didn't register for quizwiz</p>
        <Link to='./pages/r/RegistrationForm'>Register now</Link>
      </div>
    </>
  )
}

export default App;