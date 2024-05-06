import './RegistrationForm.css';
import Light from '.../assets/light-bulb.jpg';
import InformationNote from '.../components/InformationNote';
import { Link } from 'react-router-dom';


function RegistrationForm() {
  const register = () => {
    const email = document.getElementById('email');
  };

  return (
    <div className='main'>
      <img src={Light} alt='light bulb' />{/*make the imported image appear*/}
      <InformationNote />
      <div className='registration'>
        <form>
          <div>
            <label htmlFor='email'>Enter your E-Mail address:</label>
            <br />
            <input type='email' name='email' id='email' required />
          </div>
          <div>
            <label htmlFor='school'>Which school do you study in:</label>
            <br />
            <input type='text' name='school' id='school' />
          </div>
          <div>
            <label htmlFor='username'>What is your name:</label>
            <br />
            <input type='text' name='username' id='username' />
          </div>
          <div>
            <label htmlFor='password'>Enter your password:</label>
            <br />
            <input type='password' name='password' id='password' />
          </div>
          <br />
          <Link to='../about/About'>Know more...</Link>{/*link to the about page*/}
          <br />
          <button onClick={register} type='submit'>Register</button>
        </form>
      </div>
      <img src={Light} alt='light bulb 2' />{/*make the imported image appear*/}
    </div>
  );
}

export default RegistrationForm;
