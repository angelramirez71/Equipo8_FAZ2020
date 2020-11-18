import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom';

function menu() {
  
  return (

    <div class="sidebar">

  <center><a class="active" href="#menú" className='titulomenu'>MENÚ</a></center>

  <div className='hrefmenu'>
  <Link to='/crear'><a href="#crea">Crea tu cultivo</a></Link>
  <Link to='/cuida'><a href="#cuida">Cuida tu cultivo </a></Link>
  <Link to='/plantas2'><a href="#plantas">Plantas que puedes cultivar</a></Link>
  <Link to='/interactua'><a href="#intera">Interactúa con tu cultivo</a></Link>
  </div>

  <div class="boton1menu">
         <Link to='/usuario'><button type="button" class="btn btn-link">Usuario</button></Link>
  </div>

  <div class="boton2menu">
         <Link to='/plantas'><button type="button" class="btn btn-link">Inicio</button></Link>
  </div>

     <div class="imgmenu">
     <center><img src="Logohydro.png" class="imgmenu" width='160px' height='180px'/></center>
     </div>

</div>

  );
}

export default menu;
