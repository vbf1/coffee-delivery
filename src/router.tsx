import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { CompleteOrderPage } from "./pages/complete-order";
import { DefaultLayout } from "./layout/default-layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="complete-order" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
}
