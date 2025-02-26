import {GithubLogo} from "@phosphor-icons/react"

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4 gap-2">
          <p className="text-md font-bold">Gestão PRO | Copyright: {data}</p>
          <p className="text-md text-center">
            Acesse nossa rede social e conheça nossos projetos
          </p>
          <div className="flex gap-2">
            <a
              href="https://github.com/projeto-integrador-g5-generation/"
              target="_blank"
            >
              <GithubLogo size={40} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
