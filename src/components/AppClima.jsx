import  {Formulario}  from './Formulario'
import Resultado from './Resultado'
import useClima from "../hooks/useClima";
import Loading from './Loading';



export const AppClima = () => {
  const {resultado, cargando, noResultado} = useClima()
  return (
    <>
        <main className='dos-columnas'>
        <Formulario/>
        {cargando ? <Loading/> :
        resultado?.name ? <Resultado/> : noResultado ? <p>{noResultado}</p>
      : <p> </p>}
        </main>
    </>
  )
}
