import { useParams } from "react-router-dom"


function DeletarColaborador() {

    const {nome} = useParams<{nome:string}>()
    return (
        <div className='container  w-1/3 mx-auto'>
            <h1 className='text-4xl text-center p-4'>Deletar Colaborador</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o colaborador a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-900 text-white font-bold text-2xl'>
                    Colaborador
                </header>
                <p className='p-8 text-3xl bg-white h-full'>
                       {nome}
                </p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 cursor-pointer'>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center cursor-pointer'>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarColaborador