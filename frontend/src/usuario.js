import React from 'react';
import './usuario.css';
import {Link} from 'react-router-dom';

function usuario() {
    document.body.style = "background: white;";
  
    return (

 <div className='usuario'>

<div className='titulousuario'>

<center><h1>USUARIO</h1></center>

</div>

<div className='imagenusuario'>

<center><img src='usuario.png' width='150px' height='150px'></img></center>

</div>

<div className='imagenusuario2'>

<center><img src='añadir.png' width='40px' height='40px'></img></center>

</div>

<div className='fondousuario'>
<div className='titulousuario2'>

<h4>Nombre de usuario</h4>

</div>

<div className='titulousuario3'>

<h4>Planta seleccionada</h4>

</div>

<div className='titulousuario4'>

<h5>Zanahoria</h5>

</div>

<div className='imagenusuario3'>

<img src='zanahoria.png' width='40px' height='40px'></img>

</div>

<div className='botonusuario'>

<Link to='/plantas'>¿Quieres cambiar tu planta seleccionada?</Link>

</div>


<div className='botonusuario2'>

<Link to='/menu'><button type="button" class="btn btn-secondary btn-lg">Aceptar</button></Link>

</div>
</div>
 </div>

    );
    }

    export default usuario;