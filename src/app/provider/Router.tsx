import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/home/HomePage";
import { MainLayout } from "../layouts/MainLayout";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
