import { Input } from "../../../../components/input";
import { AddressFormContainer } from "./styles";

export function AddessForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="CEP" className="cep" type="number" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  );
}
