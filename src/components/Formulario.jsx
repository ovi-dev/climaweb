import React from 'react'

export const Formulario = () => {
  return (
    <div className='contenedor'>
        <form action="">
            <div className='campo'>
                <label htmlFor="ciudad"> Ciudad</label>
                <input type="text"
                       id='ciudad'
                       name='ciudad'
                />

            </div>
            <div className='campo'>
                <label htmlFor="Pais"> Pais</label>
                <select
                        id='pais'
                        name='pais'
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
