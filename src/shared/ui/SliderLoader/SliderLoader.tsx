import "./SliderLoader.scss";

export const SliderLoader: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className }) => {
	const classes = `loader-container ${className}`;

	return <ul className={classes}></ul>;
};
