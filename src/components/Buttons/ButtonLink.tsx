import css from "./ButtonLink.module.scss";

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
    outline?: boolean;
    remove?: boolean;
}

const ButtonLink = ({ className, children, type = 'button', onClick, disabled, secondary, outline, remove }: ButtonProps) => {

  const classes = [
        css.buttonLink,
        className
    ];

    if (secondary) { classes.push(css["buttonLink--secondary"]) }
    if(remove) { classes.push(css["buttonLink--remove"]) }
    if(outline) { classes.push(css["buttonLink--outline"]) }

    return(
        <button 
            className={classes.join(" ")}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ButtonLink;