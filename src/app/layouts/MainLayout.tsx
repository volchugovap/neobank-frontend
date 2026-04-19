import { Outlet } from "react-router";
import { Footer, Header } from "../../widgets";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
