import BicicletaImportacao from "./BicicletaImportacao";
import GeradorImportacao from "./GeradorImportacao";
import ObjetoImportacao from "./ObjetoImportacao";

export function criarGeradorImportacaoBicicleta(): GeradorImportacao {
  return {
    titulo: "Importação de bicicletas",
    buscarRegistrosParaImportacao: buscarRegistrosParaImportacao,
    gerarDescricao: gerarDescricao,
    gerarValidacoes: gerarValidacoes,
    campos: ["Marca", "Marchas"],
  };
}

function gerarDescricao(obj: ObjetoImportacao): string {
  const bicicleta = obj as BicicletaImportacao;
  return `Marca: ${bicicleta.marca} | Qtd. marchas: ${bicicleta.marchas}`;
}

function gerarValidacoes(obj: ObjetoImportacao): string[] {
  const validacoes: string[] = [];
  const bicicleta = obj as BicicletaImportacao;

  if (bicicleta.marca !== "Caloi" && bicicleta.marca !== "Ronaldo") {
    validacoes.push("Apenas bicicletas Caloi ou Ronaldo podem ser importadas");
  }

  if (bicicleta.marchas > 21) {
    validacoes.push(`Número inválido de marchas: ${bicicleta.marchas}.`);
  }

  return validacoes;
}

function buscarRegistrosParaImportacao(): BicicletaImportacao[] {
  return [
    {
      marca: "Caloi",
      marchas: 28,
    },
    {
      marca: "Ronaldo",
      marchas: 18,
    },
    {
      marca: "Seila",
      marchas: 15,
    },
    {
      marca: "Caloi",
      marchas: 21,
    },
  ];
}
