import ObjetoImportacao from "./ObjetoImportacao";

export default interface GeradorImportacao {
  titulo: string;
  buscarRegistrosParaImportacao: () => ObjetoImportacao[];
  gerarDescricao: (obj: ObjetoImportacao) => string;
  gerarValidacoes: (obj: ObjetoImportacao) => string[];
  campos: string[];
}