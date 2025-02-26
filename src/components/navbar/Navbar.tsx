import { MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center w-full py-4 text-white bg-indigo-900">
        <div className="container flex items-center justify-between mx-4 text-lg font-bold">
          <div className="flex items-center gap-2">
            <img
              src="https://ik.imagekit.io/ecspdivlw/icons/rh_9755778.png?updatedAt=1740507931200"
              alt="Logo"
              className="w-8"
            />
            <Link to="/home" className="text-1xl md:text-2xl font-bold">
              Gestão PRO
            </Link>
          </div>

          <div className="relative items-center justify-center w-2/5 text-black hidden md:flex">
            <form className="flex items-center justify-center w-full">
              <input
                className="w-10/12 px-4 py-4 bg-white rounded-lg h-9 focus:outline-none"
                type="search"
                placeholder="Pesquisar"
                id="busca"
                name="busca"
                required
              />
              <button
                type="submit"
                className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-900 rounded-lg border border-indigo-700 cursor-pointer"
              >
                <MagnifyingGlass size={14} weight="bold" />
              </button>
            </form>
          </div>

          <div className="flex gap-4">
            <Link to="/colaboradores" className="mx-2 hover:underline hover:scale-102 transition-all">
              Colaboradores
            </Link>
            <Link to="/sobre" className="mx-2 hover:underline hover:scale-102 transition-all">
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
