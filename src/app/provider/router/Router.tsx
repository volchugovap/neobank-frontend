import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, NotFoundPage } from "../../../pages";
import { MainLayout } from "../../layouts/MainLayout";

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
