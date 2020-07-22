import styled from "styled-components"
import { rem } from "polished"

export const QtyField = styled.span`
  input {
    padding: ${rem(1)} ${rem(1)};
    width: ${rem(32)};
    height: ${rem(18)};
    font-size: ${rem(14)};
    text-align: right;
    border: 0;
  }
  svg {
    display: inline;
    height: ${rem(14)};
    cursor: pointer;
  }
`
