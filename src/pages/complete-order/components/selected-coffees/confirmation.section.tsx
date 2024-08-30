import { Button } from "../../../../components/button";
import { RegularText } from "../../../../components/typography";
import { UseCart } from "../../../../hooks/use-cart";
import { FormatMoney } from "../../../../utils/format-money";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemTotal, cartQuantity } = UseCart();
  const cartTotal = DELIVERY_PRICE + cartItemTotal;

  const formattedProducts = FormatMoney(cartItemTotal);
  const formattedlTotal = FormatMoney(cartTotal);
  const formattedDelivery = FormatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedProducts}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDelivery}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedlTotal}
        </RegularText>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
