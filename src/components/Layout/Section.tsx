import type { ReactNode } from "react";
import styles from "./Section.module.scss";


interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps ) => {
    return (
        <div className={styles.section}>
            {children}
        </div>
    )
};

interface SectionMainProps {
    children: ReactNode;
}

const SectionMain = ({ children }: SectionMainProps) => {
    return (
        <div className={styles["section_main"]}>
            {children}
        </div>
    )
};

Section.Main = SectionMain;


interface SectionHeadProps {
    title: string;
    subtitle?: string;
}

const SectionHead = ({ title, subtitle }: SectionHeadProps) => {
    return(
        <div className={styles["section_head"]}>
            <h1 className={styles["section_head-title"]}>{title}</h1>
            {subtitle && <h3 className={styles["section_head-subtitle"]}>{subtitle}</h3>}
        </div>
    )
}

Section.Head = SectionHead;


interface SectionBorderProps {
    secondary?: boolean;
}

const SectionBorder = ({ secondary }: SectionBorderProps) => {
    const classes = [styles["section_border"]];
    
    if (secondary) { classes.push(styles["section_border--secondary"])}
    return (
        <div className={classes.join(" ")} />
    )
}

Section.Border = SectionBorder;


export default Section;