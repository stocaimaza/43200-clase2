import './Vista.css'
import { useState } from 'react'


const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro";

  return (
    <div className= {estilo}>
      <button onClick={ cambiarModo } > { modoOscuro ? "Claro" : "Oscuro" }  </button>
      <h2> Componente Vista </h2>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae a voluptates cumque illum alias commodi aliquid iure sed porro suscipit eius omnis exercitationem distinctio vero harum eos voluptatem, accusantium perspiciatis.</p>
    </div>
  )
}

export default Vista
