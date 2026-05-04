import "./RoundLoader.scss";
import { TbLoaderQuarter } from "react-icons/tb";

export const Loader: React.FC = () => {
	return (
		<span className="round-loader">
			<TbLoaderQuarter />
		</span>
	);
};
