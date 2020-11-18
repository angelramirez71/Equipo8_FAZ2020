import React from 'react';
import './plantas5.css';
import {Link} from 'react-router-dom';

function plantas5 () {

document.body.style = "background: moccasin;";

return(

<div className='plantas5'>

<div className='volverpl5'>

<Link to ='/login'>Volver</Link>

</div>

<div className='titulopl5'>

<h4>¿Qué plantas deseas cultivar?</h4>

</div>

<div className='imagenpl5'>

<img src = 'lechuga.png' width='80px' height='80px'/>

</div>

<div className='flechapl5'>

<Link to='/plantas6'><img src = 'proximo.png' width='60px' height='60px'/></Link>

</div>

<div className='flecha2pl5'>

<Link to='/plantas4'><img src = 'anterior.png' width='60px' height='60px'/></Link>

</div>

<div className='titulo2pl5'>

<h4>Lechuga</h4>

</div>

<div className='titulo3pl5'>

<h3>Sugerencias</h3>

</div>

<div className='imagenpl2-5'>

<img src = 'tomate.png' width='60px' height='60px'/>

</div>

<div className='imagenpl3-5'>

<img src = 'fresa.png' width='60px' height='60px'/>

</div>

<div className='imagenpl4-5'>

<img src = 'brocoli.png' width='60px' height='60px'/>

</div>

<div className='titulo4pl5'>

<h4>Tomate</h4>

</div>

<div className='titulo5pl5'>

<h4>Fresa</h4>

</div>

<div className='titulo6pl5'>

<h4>Brocoli</h4>

</div>

<div className='ingpl5'>

<button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='ingpl5'>Aceptar</Link></button>

</div>

</div>
);
}

export default plantas5;