import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./provider";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router />
	</StrictMode>,
);
