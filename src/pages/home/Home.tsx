import ListarColaborador from "../../components/colaboradores/listacolaborador/ListarColaborador";

function Home() {
  return (
    <>
      <div className=" flex justify-center bg-gradient-to-r from-indigo-900 to-indigo-800">
        <div className="container grid sm:grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4 w-full">
            <h2 className="text-5xl font-bold text-center">GestãoPRO</h2>
            <p className="text-xl text-center">
              Gerencie seus colaboradores com um clique! Prático, seguro e fácil
              de usar.
            </p>

            <div className="flex justify-around gap-4">
              <button className="rounded border-white border-solid border-2 py-2 px-4 text-white cursor-pointer hover:bg-white hover:text-black transition-all hover:scale-105">
                Novo Colaborador
              </button>
            </div>
          </div>

          <div className="hidden sm:flex justify-center ">
            <img
              src="https://ik.imagekit.io/alanaoliv/imagens_api-20250117T123121Z-001/imagens_api/Resume%20folder-bro.svg?updatedAt=1740505584171"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListarColaborador/>
    </>
  );
}

export default Home;
