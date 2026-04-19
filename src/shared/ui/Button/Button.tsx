import "./Button.scss";

interface IIcon {
  src: string;
  alt: string;
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IIcon;
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({
  icon,
  children,
  className,
  ...rest
}) => {
  const classes = `btn ${className || ""}`;
  return (
    <button className={classes} {...rest}>
      {icon?.src && <img src={icon.src} alt={icon.alt} className="btn__icon" />}
      {children}
    </button>
  );
};
