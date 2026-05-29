import { useState, useEffect } from "react";
import "./App.css";

const DIAS = [
  { data: "29/05", dow: "Sexta", atracoes: ["Fogo na Saia", "Seu Desejo", "Calcinha Preta"], palco360: "Chirlys Trindade" },
  { data: "30/05", dow: "Sábado", atracoes: ["Forró Brasil", "Adelmário Coelho", "Kátia e Aduílio", "Joelma"], palco360: "Forró 10" },
  { data: "31/05", dow: "Domingo", atracoes: ["Cintura Fina", "Baby Som", "Henry Freitas"], palco360: "Zé Tramela" },
  { data: "02/06", dow: "Terça", atracoes: ["Leonne o Nobre", "Thiago Aquino", "Natanzinho Lima"], palco360: "Ittauan" },
  { data: "03/06", dow: "Quarta", atracoes: ["As Patricinhas", "Cavalo de Pau", "Gustavo Mioto"], palco360: "Jan Vaqueiro" },
  { data: "04/06", dow: "Quinta", atracoes: ["Jeany Lins", "Walkiria Santos", "Ana Castela"], palco360: "Alê Ferraz" },
  { data: "05/06", dow: "Sexta", atracoes: ["Geninho Batalha", "Jonas Esticado", "Iguinho e Lulinha", "Ávine Vinny"], palco360: "André Novaes" },
  { data: "06/06", dow: "Sábado", atracoes: ["Zueirões do Forró", "Guilherme Dantas", "Duas Paixões", "Tarcísio do Acordeon"], palco360: "Dudu Moral" },
  { data: "07/06", dow: "Domingo", atracoes: ["Flor de Maracujá", "Dorgival Dantas", "Magníficos"], palco360: "Elton Mota" },
  { data: "09/06", dow: "Terça", atracoes: ["Unha Pintada", "Devinho Novaes", "Mikael Santos"], palco360: "Eve Sandes" },
  { data: "10/06", dow: "Quarta", atracoes: ["Igor Ativado", "João Gomes", "Nattan"], palco360: "Alisson Lima" },
  { data: "11/06", dow: "Quinta", atracoes: ["Nineia Oliveira", "Samyra Show", "Simone Mendes"], palco360: "Larissa Costa" },
  { data: "12/06", dow: "Sexta", atracoes: ["Quarto de Milha", "Falamansa", "Zé Vaqueiro", "Gil Mendes"], palco360: "Netto Ventura" },
  { data: "13/06", dow: "Sábado", atracoes: ["Mastruz com Leite", "Raí Saia Rodada", "Nuzio Medeiros"], palco360: "Cartas de Tarô" },
  { data: "14/06", dow: "Domingo", atracoes: ["Erivaldo de Carira", "Batista Lima", "Zé Cantor"], palco360: "Raio da Silibrina" },
  { data: "16/06", dow: "Terça", atracoes: ["Nadson o Ferinha", "Silvano Sales", "Heitor Costa"], palco360: "Heitor Santos" },
  { data: "17/06", dow: "Quarta", atracoes: ["Raniere Gomes", "Cavaleiros do Forró", "Limão com Mel"], palco360: "Vanessa Porto" },
  { data: "18/06", dow: "Quinta", atracoes: ["Ju Marques", "Solange Almeida", "Fernandinha"], palco360: "Bia Brasil" },
  { data: "19/06", dow: "Sexta", atracoes: ["Luan Estilizado", "Luan Santana", "João Bosco e Vinicius"], palco360: "Ygor Raniere" },
  { data: "20/06", dow: "Sábado", atracoes: ["Maraisa Cantora", "Brasas do Forró", "Yasmin Sensação", "Filho do Piseiro"], palco360: "Lucas Castro" },
  { data: "21/06", dow: "Domingo", atracoes: ["Marcelo Bala", "Claudio Ney e Juliana", "Gusttavo Lima"], palco360: "Franquinho Vaqueiro" },
  { data: "23/06", dow: "Terça", atracoes: ["Luanzinho Moraes", "Fabiano Guimarães", "Rey Vaqueiro", "Painel de Controle"], palco360: "Marcelinho" },
  { data: "24/06", dow: "Quarta", atracoes: ["Alcymar Monteiro", "Geraldo Azevedo", "Matheus e Kauan"], palco360: "Danielzinho Jr" },
  { data: "25/06", dow: "Quinta", atracoes: ["Liene Show", "Taty Girl", "Lauana Prado"], palco360: "Tatah Santana" },
  { data: "26/06", dow: "Sexta", atracoes: ["Danielzinho o Kaceteiro", "Eline Martins", "Diego e Victor Hugo", "Vitor Fernandes"], palco360: "Breno Matos" },
  { data: "27/06", dow: "Sábado", atracoes: ["Cuscuz com Leite", "Zezo", "Bruno e Marrone", "Klessinha"], palco360: "Gardênia Mel" },
  { data: "28/06", dow: "Domingo", atracoes: ["Pedro Lua", "Elba Ramalho", "Flávio José", "Mestrinho"], palco360: "Forró Cana com Limão" },
];

const EMOJIS = {
  vamos: "🔥 VAMO NOIZE MEU AMO",
  pensando: "🤔 TAMO PENSANDO",
  naovamos: "🚫 NÃO VAMOS NESSE DIA",
};

function DiaCard({ data, dow, atracoes, palco360 }) {
  const chaveStorage = `dia-${data}`;

  const [status, setStatus] = useState(() => {
    const salvo = localStorage.getItem(chaveStorage);
    return salvo || "nenhum";
  });

  useEffect(() => {
    localStorage.setItem(chaveStorage, status);
  }, [status, chaveStorage]);

  function ciclar() {
    const CICLO = ["nenhum", "vamos", "pensando", "naovamos"];
    const proximoIndice = (CICLO.indexOf(status) + 1) % CICLO.length;
    setStatus(CICLO[proximoIndice]);
  }

  return (
    <div className={`card status-${status}`} onClick={ciclar}>
      <div className="card-data">{data}</div>
      <div className="card-dow">{dow}</div>

      <ul className="card-atracoes">
        {atracoes.map(a => <li key={a}>{a}</li>)}
      </ul>

      {palco360 && (
        <div className="card-360">
          Palco 360°: <strong>{palco360}</strong>
        </div>
      )}

      {status !== "nenhum" && (
        <span className={`badge badge-${status}`}>{EMOJIS[status]}</span>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <div className="bandeirola"></div>

      <header className="header">
        <div className="subtitulo">Arraiá do povo 2026</div>
        <h1>Nosso São João</h1>
        <div className="local">Fiz com amor para nos ajudar a escolher 
          os dias que nós vamos para os shows minha estrelinha radiante.
        </div>
      </header>

      <div className="grid">
        {DIAS.map(dia => <DiaCard key={dia.data} {...dia} />)}
      </div>
    </>
  );
}

export default App;