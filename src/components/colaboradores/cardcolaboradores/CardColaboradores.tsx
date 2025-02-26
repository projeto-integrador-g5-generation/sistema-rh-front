import { Link } from "react-router-dom";
import Colaborador from "../../../model/Colaborador";

function CardColaboradores({ colaborador }: { colaborador: Colaborador }) {
  return (
    <>
      <div
        id="container-pai"
        className="border-1 border-gray-300 w-80 rounded-4xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all"
      >
        <div
          id="fotoperfil-nome-colaborador"
          className="flex items-center  w-full h-20 "
        >
          <div id="foto" className=" w-16 h-16 m-4  ">
            <img
              src={colaborador.foto}
              alt={colaborador.nome}
              className="  border-1 border-gray-300 w-16 h-16 rounded-full  "
            />
          </div>

          <div id="nomeColaborador">
            <h1>{colaborador.nome}</h1>
          </div>
        </div>

        <div id="pai-seguda-parte" className="w-full m-0.5">
          <div id="atributos-colaboradores" className="p-2 ">
            <ul className="flex flex-col gap-1">
              <li>Cargo: {colaborador.cargo}</li>
              <li>Salario: R$ {colaborador.salario.toFixed(2)}</li>
              <li>Data de Adimissao: {colaborador.data_admissao}</li>
              <li>Email: {colaborador.email}</li>
            </ul>
          </div>

          <div
            id="buttoes-editar-exluir"
            className="flex items-center justify-evenly py-4 "
          >
            <div className="bg-red">
              <button
                className="p-2 bg-red-600 rounded-2xl cursor-pointer hover:scale-110 transition-all
                shadow-md hover:drop-shadow-[2px_2px_4px_#FF6262] px-5"
              >
             <Link to={`/deletarcolaborador/${colaborador.nome}`}>Excluir</Link>   
              </button>
            </div>

            <div>
              <button
                className="bg-blue-600 rounded-2xl p-2 cursor-pointer hover:scale-110 transition-all
                shadow-md hover:drop-shadow-[2px_2px_4px_#006FFF] px-5"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardColaboradores;
