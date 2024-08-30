import { Minus, Plus } from "phosphor-react";
import { Container, IconWrapper } from "./styles";

interface Props {
  readonly size?: "small" | "medium";
  readonly onIncrease: () => void;
  readonly onDecrease: () => void;
  readonly quantity: number;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: Props) {
  return (
    <Container size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </Container>
  );
}
