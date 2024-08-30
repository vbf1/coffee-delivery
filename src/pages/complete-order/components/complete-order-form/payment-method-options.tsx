import { PaymentMethodInput } from "../payment-method-input";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  );
}
