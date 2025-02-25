import Colaborador from "../../../model/Colaborador"
import CardColaboradores from "../cardcolaboradores/CardColaboradores"


function ListarColaborador() {

    const colaboradores: Colaborador[] = [{ id: 1, nome: "Wellerson", salario: 3000, data_admissao: "20-02-2025", cargo: "Desenvolvedor", email: "wellersonpinheiros@Outlook.com", foto:"https://ik.imagekit.io/z8ilvvp84p/imagens_usuarios/16.jpg?updatedAt=1737384202137" },
    
        { id: 1, nome: "Wellerson", salario: 3000, data_admissao: "20-02-2025", cargo: "Desenvolvedor", email: "wellersonpinheiros@Outlook.com", foto:"https://ik.imagekit.io/z8ilvvp84p/imagens_usuarios/16.jpg?updatedAt=1737384202137"},


        { id: 1, nome: "Wellerson", salario: 3000, data_admissao: "20-02-2025", cargo: "Desenvolvedor", email: "wellersonpinheiros@Outlook.com", foto:"https://ik.imagekit.io/z8ilvvp84p/imagens_usuarios/16.jpg?updatedAt=1737384202137"},



        { id: 1, nome: "Wellerson", salario: 3000, data_admissao: "20-02-2025", cargo: "Desenvolvedor", email: "wellersonpinheiros@Outlook.com", foto:"https://ik.imagekit.io/z8ilvvp84p/imagens_usuarios/16.jpg?updatedAt=1737384202137" }]

    return (
        <div className="grid md:grid-cols-3 items-center justify-center gap-4">{colaboradores.map((colaborador) => (
            <CardColaboradores key={colaborador.id} colaborador={colaborador} />
        ))}</div>
    )
}

export default ListarColaborador