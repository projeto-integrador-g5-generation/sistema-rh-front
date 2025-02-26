import { useNavigate, useParams } from "react-router-dom";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ChangeEvent, useState } from "react";

function FormProduto() {
  const navigate = useNavigate();

  const { nome, salario, cargo, data_admissao, texto, email } = useParams<{
    nome: string;
    salario: string;
    cargo: string;
    data_admissao: string;
    texto: string;
    email: string;
  }>();

  const [form, setForm] = useState({
    nome: nome || "",
    salario: salario || "",
    cargo: cargo || "",
    data_admissao: data_admissao || "",
    email: email || "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function retornar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/");
    ToastAlerta("Ação realizada com Sucesso!", "sucesso");
  }

  return (
    <div className="container flex flex-col items-center mx-auto">
      <h1 className="my-8 text-4xl text-center">{texto || "Cadastrar"}</h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={retornar}>
        <div className="flex flex-col gap-2">
          <label >Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="p-2 bg-white border-2 rounded border-slate-700 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label >Salario</label>
          <input
            type="text"
            name="salario"
            value={form.salario}
            onChange={handleChange}
            className="p-2 bg-white border-2 rounded border-slate-700 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label >Cargo</label>
          <input
            type="text"
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            className="p-2 bg-white border-2 rounded border-slate-700 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label >Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="p-2 bg-white border-2 rounded border-slate-700 shadow-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label >Data de Admissão</label>
          <input
            type="text"
            name="data_admissao"
            value={form.data_admissao}
            onChange={handleChange}
            className="p-2 bg-white border-2 rounded border-slate-700 shadow-md"
          />
        </div>

        <button
          type="submit"
          className="flex justify-center w-1/2 py-2 mx-auto font-bold text-white rounded disabled:bg-slate-200 bg-slate-400 hover:bg-slate-800 cursor-pointer hover:scale-101 shadow-md transition-all"
        >
          {texto || "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
