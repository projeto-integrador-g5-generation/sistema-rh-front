import Colaborador from "../../../model/Colaborador"


function CardColaboradores({ colaborador }: { colaborador: Colaborador }) {





  return (
   <>
    <div id='container-pai' className='border w-70  rounded-4xl bg- white-900 flex flex-col overflow-hidden m-4 drop-shadow-lg shadow-lg text-sm'>
    
        <div id='fotoperfil-nome-colaborador' className='flex items-center  w-full h-20 ' >

            <div id='foto' className=' w-16 h-16 m-4  '>
                <img src={colaborador.foto} alt={colaborador.nome} className='  border w-16 h-16 rounded-full  ' />
           </div>
         
           <div id="nomeColaborador">
                  <h1>{colaborador.nome}</h1>
          </div>

        </div>



       <div id='pai-seguda-parte' className='w-full m-0.5'>

          <div id='atributos-colaboradores' className='p-2 '>
            <ul className='flex flex-wrap'> 
              <li>Cargo: {colaborador.cargo}</li>
              <li>Salario: {colaborador.salario}</li>
              <li>DataAdimissao: {colaborador.data_admissao}</li>
              <li>Email:{colaborador.email}</li >
            </ul>
          </div>

          <div id='buttoes-editar-exluir' className='flex items-center justify-evenly py-4 '>

            <div className='bg-red'>
                <button className='p-2 bg-red-600 rounded-2xl cursor-pointer hover:scale-110 transition-all
                shadow-md hover:drop-shadow-[2px_2px_4px_#FF6262]'>Editar</button>
            </div>

            <div >
                <button className='bg-blue-600 rounded-2xl p-2 cursor-pointer hover:scale-110 transition-all
                shadow-md hover:drop-shadow-[2px_2px_4px_#006FFF]'>Excluir</button>
            </div> 
              

          </div>
        </div>   
    </div>
    </>
  )
}

export default CardColaboradores