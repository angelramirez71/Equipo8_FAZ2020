import React from 'react';
import './crear.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function crear() {
  document.body.style = "background: white;";

  return (
    <div className="crear">
      
      <div class="contenedorcrear">
          <img src="cultivo.jpg" width="375" height="164" />
              <div class="centradocrea"><b><h1>CREA TU CULTIVO</h1></b></div>
          <Link to='/menu'><div class="texto-encimacrea"><button type="button" class="btn btn-volvercrea"><b>Volver</b></button></div></Link>
      </div>

<div class="cajacrear">
  <center><h4><b>Materiales Necesarios</b></h4></center>
 
  <br/>

  <div className="tubocrear">
   <img src="tubos.png" width="70" height="70" aling="left" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       Tubos de pvc
  </div>  
 
  <div>
   <img src="bomba.png" width="70" height="70" aling="left"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Bomba aireadora
  </div>  

  <div>
   <img src="espuma.png" width="75" height="75" aling="left"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      Espuma agricola 
  </div> 

  <div>
    <img src="gota.png" width="70" height="70" aling="left"/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Agua con solucion nutritiva
  </div>

  <br/>
  
  <center><button type="button" class="btn btn-success btn-lg">Siguiente</button></center>

  </div> 
  </div>
  );
}

export default crear;
