import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/quantity-input";
import { RegularText } from "../../../../components/typography";
import { ActionContainer, Container, RemoveButton } from "./styles";
import { CartItem } from "../../../../context/cart-context";
import { FormatMoney } from "../../../../utils/format-money";
import { UseCart } from "../../../../hooks/use-cart";
import { ECart } from "../../../../enum/cart.enum";

interface Props {
  readonly coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: Props) {
  const { changeCartItemQuantity, removeCartItem } = UseCart();
  const coffeeTotal = coffee.price * coffee.quantity;
  const formattedPrice = FormatMoney(coffeeTotal);

  return (
    <Container>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="Coffee Images" />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={() =>
                changeCartItemQuantity(coffee.id, ECart.button_increase)
              }
              onDecrease={() =>
                changeCartItemQuantity(coffee.id, ECart.button_decrease)
              }
            />
            <RemoveButton onClick={() => removeCartItem(coffee.id)}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </Container>
  );
}
