import React from "react";
import CardMember from "../../components/equipe/CardEquipe";

const SobreNos: React.FC = () => {
  const membros = [
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/1729191555564.jpg?updatedAt=1740514503351",
      nome: "Alana Oliveira",
      linkedin: "https://www.linkedin.com/in/alanasanches/",
      github: "https://github.com/alanaoliv",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/1731616511157.jpg?updatedAt=1740514503183",
      nome: "Aline Anacleto",
      linkedin: "https://linkedin.com/in/aline-anacleto/",
      github: "https://github.com/alineanacletoo",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/IMG_20220803_130245_008.jpg?updatedAt=1740514503131",
      nome: "Loana Isabelly",
      linkedin: "https://www.linkedin.com/in/loana-isabelly/",
      github: "https://github.com/loanaisabelly",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/1683237753075.jpg?updatedAt=1740514503348",
      nome: "Vanessa Ribeiro",
      linkedin: "https://www.linkedin.com/in/vanessaribeiro-/",
      github: "https://github.com/vanessaribeiro03",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/1693922596317.jpg?updatedAt=1740514503399",
      nome: "Vinicius Oliveira",
      linkedin: "https://www.linkedin.com/in/vinicius-oliveira-dev-fullstack",
      github: "https://github.com/viniciusoliveira-27",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/1685297918578.jpg?updatedAt=1740514503489",
      nome: "Vinicus Rodrigues",
      linkedin: "https://www.linkedin.com/in/vinicius-rodrigues2004/",
      github: "https://github.com/Vinicius-Rodriguess",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/grupo/Wellerson_Pinheiros_2.webp?updatedAt=1740514503386",
      nome: "Wellerson Pinheiros",
      linkedin: "https://www.linkedin.com/in/wellerson-pinheiros/",
      github: "https://github.com/wellerson-pinheiros",
    },
    {
      foto: "https://ik.imagekit.io/23lwgdahj/195032044.png?updatedAt=1740513234564",
      nome: "Projeto Grupo 05",
      github: "https://github.com/projeto-integrador-g5-generation",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 bg-gray-200">
        {membros.map((membro, index) => (
          <CardMember
            key={index}
            foto={membro.foto}
            nome={membro.nome}
            linkedin={membro.linkedin}
            github={membro.github}
          />
        ))}
      </div>
      <div className="flex justify-center items-center w-full p-4 py-8 flex-col gap-2">
        <p className="text-1xl text-center max-w-3xl">
          A equipe do Gestão PRO é formada por desenvolvedores apaixonados por
          tecnologia e inovação, unidos pelo objetivo de criar uma solução
          eficiente para a gestão de usuários. Com um olhar voltado para a
          usabilidade e a experiência do usuário, o time se dedicou ao
          desenvolvimento de um sistema intuitivo, responsivo e moderno.
        </p>
        <p className="text-1xl text-center max-w-3xl">
          O Gestão PRO é um sistema web desenvolvido para gerenciar usuários de
          forma intuitiva e eficiente. Com um design responsivo e moderno, ele
          permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar)
          para usuários, além de contar com uma página dedicada para
          apresentação dos desenvolvedores do projeto.
        </p>
      </div>
    </>
  );
};

export default SobreNos;
