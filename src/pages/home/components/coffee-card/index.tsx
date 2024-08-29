import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/quantity-input";
import { RegularText, TitleText } from "../../../../components/typography";
import {
  AddCartWrapper,
  CardFooter,
  Container,
  Description,
  Name,
  Tags,
} from "./style";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface Props {
  readonly coffee: Coffee;
}

export function CoffeeCard({ coffee }: Props) {
  return (
    <Container>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}-${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {coffee.price}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </Container>
  );
}
