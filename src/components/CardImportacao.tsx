import { Box, ThemeContext, ThemeType } from "grommet";
import { css } from "styled-components";

const theme: ThemeType = {
  box: {
    extend: () => css`
      background-color: #b3cde0;
      color: #03396c;
      border-radius: 10px;
      padding: 8px;
    `,
  },
};

export default function Card({ label, validacoes }: { label: string, validacoes?: string[] }) {
  return (
    <ThemeContext.Extend value={theme}>
      <Box>
        {
          // Descrição principal do card
          label
        }
        {
          // Lista as validações caso existam
          validacoes && validacoes.length > 0 && 
            <div style={{color: "red"}}>
              Validações: { validacoes.map(v => <div>{v}</div>) }
            </div>
        }
      </Box>
    </ThemeContext.Extend>
  );
}
