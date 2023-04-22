import { useState } from "react"


const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);

    const manejadorMensaje = () => {
        setMensaje(!mensaje);
        //Recuerden que ! invierte el valor de la variable booleana. 
    } 

  return (
    <div>
        <button onClick={manejadorMensaje}> {mensaje ? "Ocultar" : "Mostrar"} </button>
        {mensaje && <h2>"marolio le da sabor a tu vida, marolio está desde el comienzo del día"</h2>}
    </div>
  )
}

export default Mensaje
