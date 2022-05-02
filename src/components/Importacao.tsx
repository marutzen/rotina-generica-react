import { Grid, Heading } from "grommet";
import GeradorImportacao from "../model/GeradorImportacao";
import CardImportacao from "./CardImportacao";

export default function GridImportacao({
  gerador,
}: {
  gerador: GeradorImportacao;
}) {
  return (
    <>
      <Heading size="small">{gerador.titulo}</Heading>
      <Grid
        columns={{
          count: 4,
          size: "auto",
        }}
        gap="small"
        style={{ marginBottom: "30px" }}
      >
        {gerador.buscarRegistrosParaImportacao().map((r) => (
          <CardImportacao
            label={gerador.gerarDescricao(r)}
            validacoes={gerador.gerarValidacoes(r)}
          />
        ))}
      </Grid>
    </>
  );
}
