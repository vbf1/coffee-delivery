import { Container, ContentContainer } from "./styles";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  readonly icon: ReactNode;
  readonly label: string;
};

export const PaymentMethodInput = forwardRef<HTMLInputElement, Props>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <Container>
        <input
          id={id}
          type="radio"
          {...props}
          name="paymentMethods"
          ref={ref}
        />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </Container>
    );
  }
);
