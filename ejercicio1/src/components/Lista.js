import React from 'react';
import CardDetalle from './CardDetalle';
import './Lista.css'

const Checklist = ({ Checklist , setv }) => {

    //Funcion para modificar la cantidad del producto
    const ChangeCantidad = ( item ) => {
       checklist = checklist .map( (list) => {
            if(list.producto === item.producto)
            {  
                list.cantidad = item.cantidad
            }
            return list
        })

        setChecklist([...checklist]);
    }

    //Funcion para eliminar un producto de la lista
    const DeleteItem = ( producto ) => {

        let pos = checklist.findIndex( list => list.producto === producto );
        checklist.splice(pos, 1);
        setChecklist([...checklist]);
    }

    return(
        <div className='lista-container'>
            {
                lista.map( ( item, index ) => (
                    <CardDetalle 
                        key = { index } 
                        item = { item } 
                        DeleteItem = { DeleteItem } 
                        ChangeCantidad = { ChangeCantidad }  
                    />
                ))
            }
        </div>
    )
}

export default Checklist;
