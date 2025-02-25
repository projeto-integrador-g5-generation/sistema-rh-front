import {GithubLogo} from "@phosphor-icons/react"

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-800 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Gestão PRO | Copyright: {data}</p>
          <p className="text-lg text-center">
            Acesse nossa rede social e conheça nossos projetos
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/projeto-integrador-g5-generation/"
              target="_blank"
            >
              <GithubLogo size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
