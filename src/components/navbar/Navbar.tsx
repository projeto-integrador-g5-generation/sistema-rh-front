import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-center w-full py-4 text-white bg-gradient-to-r from-indigo-900 to-indigo-800">
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
