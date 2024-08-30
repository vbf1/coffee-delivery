import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { TitleText } from "../../../../components/typography";
import { SectionTitle } from "../section-title";
import { Container, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import { AddessForm } from "./address-form";
import { PaymentMethodOptions } from "./payment-method-options";

export function CompleteOrderForm() {
  const { colors } = useTheme();
  return (
    <Container>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />
        <AddessForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </Container>
  );
}
