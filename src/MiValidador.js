import React from 'react';
import { validate } from "./rut"
export default function MiValidador(params) {
    
    const [rutIngresado, setRutIngresado] = React.useState(params.valor);

    const [clave, setClave] = React.useState("");

    

    const change = (e)=>{
        setRutIngresado(e.target.value);
    }
    const onChangePassword = (e)=>{
        setClave(e.target.value);
    }

     if(clave === "uvalpo") return <p>¡Bien hecho!</p>

     return  (<div>
        <input type="text" value={rutIngresado} onChange={change}  />
       { validate(rutIngresado) && 
           <input type="password" className='new-line'  value={clave} onChange={onChangePassword}  />
           
       }
       </div>)
}