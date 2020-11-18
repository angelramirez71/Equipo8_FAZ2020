import React from 'react';
import './plantas2.css';
import {Link} from 'react-router-dom';

function plantas2(){

    document.body.style = "background: moccasin;";

    return(

<div className='plantas2'>

<div className='botonp2'>
    
<Link to='/menu'className='botonp2'>Volver</Link>

    </div>

    <div className='titulop2'>
<center><h3>PLANTAS QUE PUEDES CULTIVAR</h3></center>
    </div>

    <div className='imagenp2'>
      <center> <img src='brote.png' width='50px' height='50px'/> </center> 
    </div>

    <div className='imagen2p2'>
     <img src='zanahoria.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen3p2'>
     <img src='brocoli.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen4p2'>
     <img src='fresa.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen5p2'>
     <img src='tomate.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen6p2'>
     <img src='apio.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen7p2'>
     <img src='ajo.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen8p2'>
     <img src='lechuga.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen9p2'>
     <img src='jengibre.png' width='40px' height='40px'/> 
    </div>

    <div className='imagen10p2'>
     <img src='albahaca.png' width='45px' height='45px'/> 
    </div>

    <div className='imagen11p2'>
     <img src='oregano.png' width='45px' height='45px'/> 
    </div>

    <div className='nombrep2'>
        <h5>Zanahoria</h5>
    </div>

    <div className='nombre2p2'>
        <h5>Brócoli</h5>
    </div>

    <div className='nombre3p2'>
        <h5>Fresa</h5>
    </div>

    <div className='nombre4p2'>
        <h5>Tomate</h5>
    </div>

    <div className='nombre5p2'>
        <h5>Apio</h5>
    </div>

    <div className='nombre6p2'>
        <h5>Ajo</h5>
    </div>

    <div className='nombre7p2'>
        <h5>Lechuga</h5>
    </div>

    <div className='nombre8p2'>
        <h5>Jengibre</h5>
    </div>

    <div className='nombre9p2'>
        <h5>Albahaca</h5>
    </div>

    <div className='nombre10p2'>
        <h5>Oregano</h5>
    </div>
</div>

    );

}
export default plantas2;