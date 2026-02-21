import css from "./ButtonIcon.module.scss";

interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    icon: React.ElementType;
}

const ButtonIcon = ({ className = "", type = 'button', onClick, icon }: ButtonProps) => {

  const classes: string[] = [
        css.buttonIcon,
        className
    ];

    const Icon: React.ElementType = icon;

    return(
        <button 
            className={classes.join(" ")}
            type={type}
            onClick={onClick}
        >
            <span className={css.buttonIcon_icon}>
                <Icon fontSize="inherit" />
            </span>
        </button>
    )
}

export default ButtonIcon;