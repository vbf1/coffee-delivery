import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string | number;
}

export function Button({ text, ...props }: Props) {
  return <Container {...props}>{text}</Container>;
}
