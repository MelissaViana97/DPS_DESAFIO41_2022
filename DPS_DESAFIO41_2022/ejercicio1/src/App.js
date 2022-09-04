import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Lista from './components/Lista';

function App() {

  //Declaracion de Estados
  const [ lista, setLista ] = useState([]); 
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    const sumaTotal = () => {
      const pretotal = lista.map( (list) => {
        return list.cantidad * list.precio
      })

      let stotal = 0
      pretotal.forEach( st => {
        stotal = stotal + st
      } )
  
      setTotal(stotal);
    }
    sumaTotal();
  }, [ lista ])

  return (
    <div className="container">
      <Form setLista = { setLista } lista = { lista } />
      <Lista lista = { lista } setLista = { setLista } />
      <div className = 'total-container'>
        <p>Total: ${ total }</p>
      </div>
    </div>
  );
}

export default App;
