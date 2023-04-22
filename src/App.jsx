import './App.css';
//JSX es una sintaxis de JS. 

//Los componentes tienen 3 caracteristicas fundamentales: 
//1) Renderizar un solo elemento.
//2) Pueden recibir propiedades. 
//3) Pueden tener un estado. 

//¿Que es el estado? 
//Es un objeto que contiene información del componente que puede cambiar durante la ejecución de la APP. 

//Usamos "hooks", que son funciones de React que me permiten mantener y trabajar con ese estado. 

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Vista from './components/Vista/Vista';
import Mensaje from './components/Mensaje/Mensaje';

function App() {
  const nombre = "React";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Mundillo" />
      <ItemCount />
      <Vista />
      <Mensaje />
    </>
    
  );
}

export default App;
