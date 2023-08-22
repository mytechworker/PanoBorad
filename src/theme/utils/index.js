import { css } from "styled-components";

export const BorderRadiuser = (arc) => css`
  -moz-border-radius: ${arc};
  -webkit-border-radius: ${arc};
  border-radius: ${arc};
`;
