import React, { useState } from "react";
import "./registro.css";
import { Link } from "react-router-dom";

function Registro() {
  
  const initialstate = {
    nombre_usuario: "",
    correo:"",
    contraseña:"",
    perfil:"admin"
  }
  const [user, setUser] = useState(initialstate)

  function handlerChange(e){
    setUser({...user,[e.target.name] : e.target.value})
  }

  async function sendData(e){
    e.preventDefault()
    await fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

  }
  document.body.style = "background: white;";

  return (
    <div className="registro">
      <div className="botonregistro2">
        <Link to="/principal">Volver</Link>
      </div>

      <div className="tituloregistro">
        <h1>REGISTRO</h1>
      </div>

      <div className="imagenregistro">
        <img src="Logohydro.png" alt="." width="300px" height="300px" />
      </div>
    <form onSubmit={sendData}>
      <div className="camporegistro">
        <input type="text" name="nombre_usuario" placeholder="Nombre de usuario" onChange={(e) => handlerChange(e)}></input>
      </div>

      <div className="camporegistro2">
        <input type="mail" name="correo" placeholder="Correo electrónico" onChange={(e) => handlerChange(e)}></input>
      </div>

      <div className="camporegistro3">
        <input type="password" name="contraseña" placeholder="Contraseña" onChange={(e) => handlerChange(e)}></input>
      </div>
      
      <div className='botonregistro'>
        <button type="submit" class="btn btn-success btn-lg">
          {/* <Link to="/login" className="botonregistro"> */}
            Registrar
          {/* </Link> */}
        </button>
        </div>
    </form>
    
    </div>
  );
}

export default Registro;