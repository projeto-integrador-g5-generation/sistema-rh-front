/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import Colaborador from "../../../model/Colaborador";
import CardColaboradores from "../cardcolaboradores/CardColaboradores";

function ListarColaborador() {
  const colaboradores: Colaborador[] = [
    {
      id: 1,
      nome: "Ana Souza",
      salario: 4500,
      data_admissao: "15-03-2023",
      cargo: "Designer",
      email: "ana.souza@email.com",
      foto: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      nome: "Carlos Pereira",
      salario: 3800,
      data_admissao: "10-07-2022",
      cargo: "Analista de Sistemas",
      email: "carlos.pereira@email.com",
      foto: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      nome: "Juliana Mendes",
      salario: 5200,
      data_admissao: "05-09-2021",
      cargo: "Gerente de Projetos",
      email: "juliana.mendes@email.com",
      foto: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      nome: "Roberto Lima",
      salario: 3100,
      data_admissao: "20-05-2020",
      cargo: "Suporte Técnico",
      email: "roberto.lima@email.com",
      foto: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      nome: "Fernanda Alves",
      salario: 6000,
      data_admissao: "12-12-2019",
      cargo: "Coordenadora de TI",
      email: "fernanda.alves@email.com",
      foto: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      nome: "Daniel Costa",
      salario: 4100,
      data_admissao: "25-06-2023",
      cargo: "Desenvolvedor Full Stack",
      email: "daniel.costa@email.com",
      foto: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      nome: "Mariana Barbosa",
      salario: 4700,
      data_admissao: "30-01-2024",
      cargo: "Analista de Dados",
      email: "mariana.barbosa@email.com",
      foto: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      nome: "Thiago Oliveira",
      salario: 3400,
      data_admissao: "18-04-2021",
      cargo: "Técnico de Redes",
      email: "thiago.oliveira@email.com",
      foto: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      nome: "Patrícia Ramos",
      salario: 5300,
      data_admissao: "08-08-2022",
      cargo: "Gerente de Infraestrutura",
      email: "patricia.ramos@email.com",
      foto: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      nome: "Ricardo Nogueira",
      salario: 3800,
      data_admissao: "11-11-2020",
      cargo: "QA Analyst",
      email: "ricardo.nogueira@email.com",
      foto: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 11,
      nome: "Beatriz Fernandes",
      salario: 4200,
      data_admissao: "22-02-2023",
      cargo: "Desenvolvedora Front-end",
      email: "beatriz.fernandes@email.com",
      foto: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 12,
      nome: "Gustavo Martins",
      salario: 5000,
      data_admissao: "14-05-2018",
      cargo: "Arquiteto de Software",
      email: "gustavo.martins@email.com",
      foto: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  const [name, setName] = useState("");
  const [listacolaborador, setListacolaborador] = useState(colaboradores);

  useEffect(() => {
    const colaboradoresEncontrados = colaboradores.filter((c: Colaborador) =>
      c.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    setListacolaborador(colaboradoresEncontrados);
  }, [name]);

  return (
    <div className="bg-gradient-to-t from-indigo-900 to-white">
      <div className="w-full p-4 flex justify-center items-center">
        <input
          className="max-w-3xl w-full px-4 py-4 bg-white rounded-lg h-9 focus:outline-none shadow-lg border-1 border-gray-400"
          type="search"
          placeholder="Pesquisar"
          id="busca"
          name="busca"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
        />
      </div>

      {listacolaborador.length == 0 ? (
        <div className="flex justify-center items-center p-4 w-full min-h-[90vh]">
          <p className="text-3xl text-white text-center">
            Colaborador não encontrado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5 pt-10 min-h-[90vh]">
          {listacolaborador.map((colaborador) => (
            <CardColaboradores key={colaborador.id} colaborador={colaborador} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListarColaborador;
