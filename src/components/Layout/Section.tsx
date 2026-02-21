import type { FC } from "react";
import type { ReactNode } from "react";
import styles from "./Section.module.scss";


interface SectionComponent extends FC<SectionProps> {
    Main: FC<SectionMainProps>;
    Aside: FC<SectionAsideProps>;
    Head: FC<SectionHeadProps>;
    Content: FC<SectionContentProps>;
    Border: FC<SectionBorderProps>;
}

interface SectionProps {
    children: ReactNode;
}

const Section: SectionComponent = ({ children }: SectionProps ) => {
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

interface SectionAsideProps {
    children: ReactNode;
    sticky?: boolean
}

const SectionAside = ({ children, sticky }: SectionAsideProps) => {
    const classes = [styles["section_aside"]];

    if (sticky) { classes.push(styles["section_aside--sticky"])};

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    )
}

Section.Aside = SectionAside;


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


interface SectionContentProps {
    children: ReactNode;
}

const SectionContent = ({ children }: SectionContentProps) => {
    return (
        <div className={styles["section_content"]}>
            { children }
        </div>
    )
}

Section.Content = SectionContent;


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