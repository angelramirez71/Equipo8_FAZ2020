import React from 'react';
import './plantas6.css';
import {Link} from 'react-router-dom';

function plantas6 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas6'>

<div className='volverpl6'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl6'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl6'>

<img src = 'Albahaca.png' width='80px' height='80px'/>

</div>

<div className='flechapl6'>

<Link to='/plantas7'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl6'>

<Link to='/plantas5'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl6'>

<h4>Albahaca</h4>

</div>

<div className='titulo3pl6'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-6'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-6'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-6'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl6'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl6'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl6'>

<h4>Brocoli</h4>

</div>

<div className='ingpl6'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl6'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas6;