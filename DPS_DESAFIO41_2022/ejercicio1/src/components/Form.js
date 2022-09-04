import React, { useRef } from 'react';
import Select from 'react-select';
import './Form.css'

//Listado de Productos que se mostraran en el Select
const options = [
    { value: 'Leche' , label: 'Leche', precio: 1.2 },
    { value: 'Shampoo' , label: 'Shampoo', precio: 3 },
    { value: 'Pollo' , label: 'Pollo', precio: 2.0 },
    { value: 'Tomates' , label: 'Tomates', precio: 1.50 },
    { value: 'Azucar' , label: 'Azucar', precio: 0.6 },
    { value: 'Frijoles' , label: 'Frijoles', precio: 0.8 },
    { value: 'Manzana' , label: 'Manzana', precio: 0.25 },
    { value: 'Jugo' , label: 'Jugo', precio: 1.25 },
    { value: 'crema' , label: 'crema', precio: 1.95 },
    { value: 'Pan' , label: 'Pan', precio: 2.25 }
]

const Form = ({ lista, setLista }) => {

    //Hook Ref 
    const inputSelect = useRef(null);

    //Funcion para agregar el producto en el array lista
    const handleClick = () => {

        if(inputSelect.current.state.value != null)
        {
            let producto = inputSelect.current.state.value.label;
            let precio = inputSelect.current.state.value.precio;

            let pos = lista.findIndex( list => list.producto === producto );

            if( pos !== -1)
            {
                lista[pos].cantidad = lista[pos].cantidad + 1; 
        
                setLista([...lista]);
            }
            else
            {
                setLista([...lista, { producto, precio, cantidad: 1 }]);
            }


        }
        else
        {
            alert('Seleccione un producto')   
        }
    }

    return(
        <>
            <h1>Lista de Compras</h1>
            <div className='form-container'>
                <Select options = { options } className='input' ref={ inputSelect } />
                <button className='btn-form' onClick = { handleClick }>Agregar</button>
            </div>
        </>
        
    )
}

export default Form;
