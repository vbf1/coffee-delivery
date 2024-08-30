import { Minus, Plus } from "phosphor-react";
import { Container, IconWrapper } from "./styles";

interface Props {
  size?: "small" | "medium";
}

export function QuantityInput({ size = "medium" }: Props) {
  return (
    <Container size={size}>
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
