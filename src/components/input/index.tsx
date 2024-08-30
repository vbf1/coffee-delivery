import { InputHTMLAttributes } from "react";
import { InputStyleContainer } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...props }: Props) {
  return <InputStyleContainer {...props} />;
}
