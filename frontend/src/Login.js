import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {

  document.body.style = "background: white;";

  return (
    
    <div className="Login">

<div className="botonlogin2">

<Link to='/principal'>Volver</Link>

</div>

      <div className="titulologin">
      
      <h2>INICIAR SESIÓN</h2>

      </div>

      <div className="imagenlogin">
      
      <img src='Logohydro.png' alt='.' width='300px' height='300px'/>
      
      </div>

      <div className="campologin">
      
      <input type='text'></input>

      </div>

      <div className="campologin2">

      <input type='mail'></input>

      </div>

      <div className="botonlogin">

    <button type="button" class="btn btn-success btn-lg"><Link to='/plantas'className='botonlogin'>Aceptar</Link></button>

</div>

<div className="botonlogin3">
  
  <Link to='/recupera'>¿Olvidaste tu contraseña?</Link>

</div>
      
    </div>
  );
}

export default Login;
