import  { useState } from 'react'
import useClima from '../hooks/useClima'


export const Formulario = () => {

const [alerta, setAlerta] = useState('')
const { busqueda, datosBusqueda, consultarClima} = useClima()
const {ciudad, pais} = busqueda


const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(busqueda).includes('')){
        setAlerta('Todos los campos son obligatorios')
        return 
    }
    setAlerta('')
    consultarClima(busqueda)
}

  return (
    <div className='contenedor'>
           
           {alerta && <p>{alerta}</p>}

        <form 
        onSubmit={handleSubmit}>

            <div className='campo'>
                <label htmlFor="ciudad"> Ciudad</label>
                <input type="text"
                       id='ciudad'
                       name='ciudad'
                       onChange={datosBusqueda}
                       value={ciudad}
                />

            </div>
            <div className='campo'>
                <label htmlFor="Pais"> Pais</label>
                <select
                        id='pais'
                        name='pais'
                        onChange={datosBusqueda}
                       value={pais}
                >
                    <option value="">Seleccione un Pais</option>
                    <option value="US"> Estados Unidos</option>
                    <option value="ES"> España</option>
                    <option value="UK"> Reino Unido</option>
                    <option value="VE"> Venezuela</option>
                    <option value="FA"> Francia</option>
                    <option value="PO"> Portugal</option>
                    <option value="RU"> Rumania</option>

                </select>

              

            </div>

            <input type="submit"
                       value='Consultar clima'
                    />



            
        </form>




    </div>
  )
}
