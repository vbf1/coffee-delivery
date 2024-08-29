import { Minus, Plus } from "phosphor-react";
import { Container, IconWrapper } from "./styles";

export function QuantityInput() {
  return (
    <Container>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </Container>
  );
}
