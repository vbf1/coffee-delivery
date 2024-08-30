import { CreditCard } from "phosphor-react";
import { Container } from "./styles";

export function PaymentMethodInput() {
  return (
    <Container>
      <CreditCard size={16} />
      Cartào de crédito
    </Container>
  );
}
