import { Box } from "grommet";
import GridImportacao from "../components/Importacao";
import { criarGeradorImportacaoBicicleta } from "../model/GeradorImportacaoBicibleta";
import {
  criarGeradorImportacaoPessoa,
} from "../model/GeradorImportacaoPessoa";

export default function MainPage() {
  return (
    <Box>
      <GridImportacao gerador={criarGeradorImportacaoPessoa()} />
      <GridImportacao gerador={criarGeradorImportacaoBicicleta()} />
    </Box>
  );
}
