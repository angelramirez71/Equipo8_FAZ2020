import React from 'react';
import './registro.css';
import {Link} from 'react-router-dom';

function registro() {
  
  document.body.style = "background: white;";

  return (

    <div className="registro">

      <div className="botonregistro2">

<Link to='/principal'>Volver</Link>

</div>

      <div className="tituloregistro">
      
      <h1>REGISTRO</h1>

      </div>

      <div className="imagenregistro">
      
      <img src='Logohydro.png' alt='.' width='300px' height='300px'/>
      
      </div>

      <div className="camporegistro">
      
      <input type='text'></input>

      </div>

      <div className="camporegistro2">

      <input type='mail'></input>

      </div>

      <div className="camporegistro3">

      <input type='password'></input>

      </div>


      <div className="botonregistro">

    <button type="button" class="btn btn-success btn-lg"><Link to='/login'className='botonregistro'>Aceptar</Link></button>

</div>
      
    </div>
  );
}

export default registro;