import "./LoaderCard.scss";

export const LoaderCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const classes = `loader-card ${className}`;

	return <div className={classes} />;
};
