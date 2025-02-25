

function Home() {
    return (
        <>
            <div className="bg-indigo-800 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            GestãoPRO 
                        </h2>
                        <p className='text-xl'>
                            Gerencie seus colaboradores com um clique! Prático, seguro e fácil de usar.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="
                              rounded
                              border-white
                              border-solid
                              border-2
                              py-2
                              px-4
                              text-white
                            ">
                              Novo Colaborador
                            </div>       
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/alanaoliv/imagens_api-20250117T123121Z-001/imagens_api/Resume%20folder-bro.svg?updatedAt=1740505584171"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home