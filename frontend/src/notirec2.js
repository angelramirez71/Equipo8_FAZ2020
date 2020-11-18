import React from 'react';
import './notirec2.css';
import {Link} from 'react-router-dom';

function notirec2(){

    document.body.style = "background: gray;";

return(

<div className='notirec2'>

    <div className='textonoti2'>

        <h2>Conectandose con tu cultivo...</h2>

    </div>
    <div className='imagennoti2'>

        <center><img src='Logohydro.png' width='250px' height='250px'/></center>
    </div>

    <div className='botonnoti2'>

    <center><button type="button" class="btn btn-secondary btn-lg"><Link to='/interactua' className='botonnoti2'>Aceptar</Link></button></center>
</div>
</div>

);

}

export default notirec2;