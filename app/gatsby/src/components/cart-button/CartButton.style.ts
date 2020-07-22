import styled from "styled-components"
import { rem } from "polished"

export const Input = styled.span`
  input {
    padding: ${rem(1)} ${rem(8)};
    width: ${rem(32)};
    height: ${rem(32)};
    font-size: ${rem(14)};
    text-align: right;
    border: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  button {
    min-width: ${rem(32)};
    padding: ${rem(4)} ${rem(4)};
  }
`
