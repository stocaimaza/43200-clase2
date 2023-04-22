//Vamos a trabajar con "useState" que es un Hook que me permite crear un estado. 

//1) Primero lo tengo que importar. 
import { useState } from "react";

//2) Segundo, useState me retorna un array con dos elementos. El primero es el estado actual y el segundo es una función que me actualiza ese estado. 

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    //Entre () colocamos el valor inicial del estado. 

    //3)Creamos dos funciones para incrementar y decrementar el contador. 
    let maximo = 10;
    //(esta variable simboliza el stock máximo de nuestro producto )


    const incrementar = () => {
        if (contador < maximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
    )
}
//Incrementar y decrementar van sin parentesis porque si no se ejecutarian al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 

export default ItemCount
