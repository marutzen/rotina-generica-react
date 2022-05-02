import GeradorImportacao from "./GeradorImportacao";
import ObjetoImportacao from "./ObjetoImportacao";
import PessoaImportacao from "./PessoaImportacao";

export function criarGeradorImportacaoPessoa(): GeradorImportacao {
  return {
    titulo: "Importação de pessoas",
    buscarRegistrosParaImportacao: buscarRegistrosParaImportacao,
    gerarDescricao: gerarDescricao,
    gerarValidacoes: gerarValidacoes,
    campos: ["Nome", "Idade"],
  };
}

function gerarDescricao(obj: ObjetoImportacao): string {
  const pessoa = obj as PessoaImportacao;
  return `Nome: ${pessoa.nome} | Idade: ${pessoa.idade}`;
}

function gerarValidacoes(obj: ObjetoImportacao): string[] {
  const validacoes: string[] = [];
  const pessoa = obj as PessoaImportacao;

  if (pessoa.idade < 18) {
    validacoes.push("Pessoa menor de 18 anos.");
  }

  return validacoes;
}

function buscarRegistrosParaImportacao(): PessoaImportacao[] {
  return [
    {
      nome: "Marco",
      idade: 28,
    },
    {
      nome: "Ronaldo",
      idade: 24,
    },
    {
      nome: "Maria",
      idade: 17,
    },
  ];
}
