import React from 'react';
import './cuida.css';
import {Link} from 'react-router-dom';

function cuida() {
  document.body.style = "background: white;";

  return (
    <div className="cuida">
      <header className="cuida-header"> 

<div class="contenedorcuida">

  <img src="cultivo.jpg"className="img3cuida" />
  <center><div class="texto-encimacuida">CUIDA TU CULTIVO</div></center>

</div>

<img src="sol.png" className= "img4cuida" />
<img src="caliente.png" className= "img5cuida" />
<img src="botonenc.png" className= "img6cuida" />
<img src="limpieza.png" className= "img7cuida" />

<div className="boton1cuida">
<button type="button" class="btn btn-success ">ENCIENDE TU CULTIVO CADA DOS HORAS</button>
</div>
<div className="boton2cuida">
<button type="button" class="btn btn-success ">LIMPIA EL TUBO DE PVC DESPUES DE CADA RECOLECTA</button>
</div>
<div className="boton3cuida">
<button type="button" class="btn btn-success ">MANTEN TU CULTIVO ENTRE LOS 25ºC Y NO SOBREPASAR LOS 28ºC</button>
</div>
<div className="boton4cuida">
<button type="button" class="btn btn-success ">EXPOSICION SOLAR POR LO MENOS 6 HORAS DIARIAS</button>
</div>

<div className='aceptarcuida'>
      <Link to='/menu' className='aceptarcuida'><button type="button" class="btn btn-secondary btn-lg">Aceptar</button></Link>
      </div>

     </header>
     
   </div>

 );
}

export default cuida;
