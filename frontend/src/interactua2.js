import React from 'react';
import './interactua2.css';
import {Link} from 'react-router-dom';

function interactua2 () {

document.body.style = "background: gray;";

return(

<div className='interactua2'>

<div className='imageninter'>

<Link to='/menu2'><img src='menu.png' width='45px' height='50px'/></Link>

</div>

<div className='imageninter2'>

<img src='wifi.png' width='50px' height='50px'/>

</div>

<div className='titulointer'>

<h2><center>INTERACTÚA CON TU CULTIVO</center></h2>

</div>

<div className='titulo2inter'>

<h3>ENCENDIDO</h3>

</div>

<div className='encendidointer'>

<Link to='/interactua'><img src='apagar.png' width='110px' height='100px'/></Link>

</div>

<div className='titulo3inter'>

<h3>APAGAR EN</h3>

</div>

<div className='titulo5inter'>

<button type="button" class="btn btn-success btn-lg">5 MINUTOS</button>

</div>

<div className='titulo4inter'>

<h3>HUMEDAD</h3>

</div>

<div className='titulo4inter'>

<button type="button" class="btn btn-success btn-lg">18%</button>

</div>

</div>
);
}

export default interactua2;