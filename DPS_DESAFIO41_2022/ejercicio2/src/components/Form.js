import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'

//DATOS PARA LOS ITEMS DE LOS RNPICKERSELECT
const sizes = [
    { label: 'Pequeño 8 onz.', value: 1 },
    { label: 'Mediano 12 onz.', value: 1.5 },
    { label: 'Grande 16 onz.', value: 2 },
]

const tiposJugos = [
    { label: 'Naranja', value: 2 },
    { label: 'Mandarina', value: 1.5 },
    { label: 'Limonada', value: 3 },
    { label: 'Manzana', value: 2.5 },
    { label: 'Pera', value: 2.75 },
]

const tiposPago = [
    { label: 'Efectivo', value: 'efectivo' },
    { label: 'Tarjeta de crédito', value: 'credito' },
]

const Form = ({ state, setState }) => {

    //Funcion para agregar al estado global el tamaño de jugo
    const setSize = (value, index) => {

        if(value !== null)
        {
            state = {
                ...state,
                size: { text: sizes[index-1].label, value }
            }
        }
        else
        {
            state = {
                ...state,
                size: { text: '', value: 0 }
            }
        }

        setState( {...state} );
    }

    //Funcion para agregar al estado global el tipo de jugo
    const setTipoC = (value, index) => {
        if(value !== null)
        {
            state = {
                ...state,
                tipoJugo: { text: tiposJugo[index-1].label, value }
            }
        }
        else
        {
            state = {
                ...state,
                tipoJugo: { text: '', value: 0 }
            }
        }

        setState( {...state} );
    }

    //Funcion para agregar al estado global el tipo de pago
    const setPago = (value, index) => {
        if(value !== null)
        {
            state = {
                ...state,
                tipoPago: tiposPago[index-1].label,
                descuento: ( value === 'efectivo' ? 0.15 : 0.05 ),
            }
        }
        else
        {
            state = {
                ...state,
                tipoPago: '',
                descuento: 0,
            }
        }

        setState( {...state} );
    }

    //Funcion para agregar al estado global la cantidad
    const setcantidad = (value) => {
        if( value > 0)
        {
            state = {
                ...state,
                cantidad: value
            }
        }
        else
        {
            state = {
                ...state,
                cantidad: 0
            }
        }

        setState( {...state} )
    }

    return(
        <>
            <View style = { styles.containerForm }>
                <RNPickerSelect 
                    style = { picketSelectStyles }
                    onValueChange={ (value, index) => setSize(value, index) }
                    placeholder ={{
                        label: 'Seleccione tamaño de jugo',
                        value: null,
                    }}
                    items={ sizes }
                />
                <RNPickerSelect 
                    style = { picketSelectStyles }
                    onValueChange={ (value, index) => setTipoC(value, index) }
                    placeholder ={{
                        label: 'Seleccione tipo de jugo',
                        value: null,
                    }}
                    items={ tiposJugo }
                />

                <View style = { styles.containerPago }>
                    <View style ={ styles.tipoPago}>
                        <RNPickerSelect 
                            style = { picketSelectStyles }
                            onValueChange={ (value, index) => setPago(value, index) }
                            placeholder ={{
                                label: 'Tipo de pago',
                                value: null,
                            }}
                            items={ tiposPago }
                        />
                    </View>
                    
                    <TextInput
                        placeholder='0'
                        keyboardType="numeric" 
                        style={styles.input} 
                        onChange={(e) => setcantidad(e.nativeEvent.text)}
                    />
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerForm:{
        position: 'absolute', 
        bottom: 15, 
        width: '100%', 
        paddingHorizontal: 50,
        height: 180, 
        justifyContent: 'center',
    },
    containerPago:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tipoPago: {
        width: '60%',
    },
    input: {
        height: 50, 
        width: '35%',
        backgroundColor: '#fff',
        borderColor: 'grey', 
        color: '#000', 
        textAlign: 'center',
    },
});

const picketSelectStyles = StyleSheet.create({ 
    inputIOS: { 
        fontSize: 16,
        borderWidth: 1, 
        borderColor: 'grey', 
        borderRadius: 4, 
        color: 'black', 
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 15,
    }, 
    inputAndroid: { 
        fontSize: 16,
        borderWidth: 0.5, 
        borderColor: 'grey', 
        borderRadius: 8, 
        color: 'black',
        backgroundColor: '#fff',
        height: 50,
        marginBottom: 15,
    }, 
});

export default Form
