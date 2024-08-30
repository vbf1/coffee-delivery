import { FormProvider, useForm } from "react-hook-form";
import { CompleteOrderForm } from "./components/complete-order-form";
import { SelectedCoffees } from "./components/selected-coffees";
import { Container } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";
import { useNavigate } from "react-router-dom";
import { UseCart } from "../../hooks/use-cart";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethods: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormSchema>;

export function CompleteOrderPage() {
  const { cleanCart } = UseCart();

  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderFormSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  const handleConfirmOrder = (data: OrderData) => {
    navigate("/order-confirmed", {
      state: data,
    });
    cleanCart();
  };

  return (
    <FormProvider {...confirmOrderForm}>
      <Container
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </Container>
    </FormProvider>
  );
}
