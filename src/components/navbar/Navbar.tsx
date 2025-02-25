

function Navbar() {
    return (
        <>
            <div className="flex justify-center w-full py-4 text-white bg-indigo-800">
                <div className="container flex items-center justify-between mx-4 text-lg font-bold">
                    <div className="flex items-center gap-2">
                        <img src="https://ik.imagekit.io/ecspdivlw/icons/rh_9755778.png?updatedAt=1740507931200" alt="Logo" className="w-8" />
                        Gestão PRO
                    </div>

                    <div>
                        <a href="#" className="mx-2">Colaboradores</a>
                        <a href="#" className="mx-2">Sobre</a>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Navbar