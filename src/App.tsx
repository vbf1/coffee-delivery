import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { CartContextprovider } from "./context/cart-context";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextprovider>
          <Router />
        </CartContextprovider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
