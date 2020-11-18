import React from 'react';
import './menu2.css';
import {Link} from 'react-router-dom';

function menu2() {
  
  return (

    <div class="sidebar">

  <center><a class="active" href="#menú" className='titulomenu'>MENÚ</a></center>

  <div className='hrefmenu'>
  <Link to='/crear'><a href="#crea">Crea tu cultivo</a></Link>
  <Link to='/cuida'><a href="#cuida">Cuida tu cultivo </a></Link>
  <Link to='/plantas2'><a href="#plantas">Plantas que puedes cultivar</a></Link>
  <Link to='/interactua2'><a href="#intera">Interactúa con tu cultivo</a></Link>
  </div>

  <div class="boton1menu2">
  <Link to='/usuario'><button type="button" class="btn btn-link">Usuario</button></Link>
  </div>

  <div class="boton2menu2">
         <Link to='/plantas'><button type="button" class="btn btn-link">Inicio</button></Link>
  </div>

     <div class="imgmenu2">
     <center><img src="Logohydro.png" class="imgmenu" width='160px' height='180px'/></center>
     </div>

</div>

  );
}

export default menu2;
