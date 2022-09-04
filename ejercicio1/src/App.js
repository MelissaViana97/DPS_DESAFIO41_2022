import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Checklist from './components/Lista';

function App() {

  //Declaracion de Estados
  const [ Checklist, setChecklist ] = useState([]); 
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    const sumarTotal = () => {
      const subtotal = lista.map( (list) => {
        return list.cantidad * list.precio
      })

      let stotal = 0
      subtotal.forEach( st => {
        stotal = stotal + st
      } )
  
      setTotal(stotal);
    }
    sumarTotal();
  }, [ lista ])

  return (
    <div className="container">
      <Form setChecklist = { setChecklist } checklist = { lista } />
      <Checklist checklist = { checklist} setChecklist = { setLista } />
      <div className = 'total-container'>
        <p>Total: ${ total }</p>
      </div>
    </div>
  );
}

export default App;
