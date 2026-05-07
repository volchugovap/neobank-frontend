import "./RoundLoader.scss";
import { TbLoaderQuarter } from "react-icons/tb";

export const RoundLoader: React.FC = () => {
	return (
		<span className="round-loader">
			<TbLoaderQuarter />
		</span>
	);
};
