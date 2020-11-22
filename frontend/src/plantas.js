import React from 'react';
import './plantas.css';
import {Link} from 'react-router-dom';

function plantas () {

document.body.style = "background: moccasin;";

return(

<div className='plantas'>

<div className='volverplantas'>

<Link to ='/login'>Volver</Link>

</div>

<div className='tituloplantas'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenplantas'>

<Link to='/interactua'><img src = 'zanahoria.png' width='80px' height='80px'/></Link>

</div>

<div className='flechaplantas'>

<Link to='/plantas3'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2plantas'>

<h4>Zanahoria</h4>

</div>

<div className='titulo3plantas'>

<h3>Sugerencias</h3>

</div>

<div className='imagenplantas2'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenplantas3'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenplantas4'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4plantas'>

<h4>Tomate</h4>

</div>

<div className='titulo5plantas'>

<h4>Fresa</h4>

</div>

<div className='titulo6plantas'>

<h4>Brocoli</h4>

</div>

<div className='ingplantas'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingplantas'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas;